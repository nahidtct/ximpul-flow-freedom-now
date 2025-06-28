
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { useOrders } from '@/hooks/useOrders';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { Eye, Edit, Truck } from 'lucide-react';

export const AdminOrders = () => {
  const { orders, isLoading, updateOrderStatus, updateTrackingInfo } = useOrders();
  const { adminUser } = useAdminAuth();
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter orders based on status and search term
  const filteredOrders = orders.filter(order => {
    const matchesStatus = statusFilter === 'all' || order.order_status === statusFilter;
    const matchesSearch = order.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.customer_phone.includes(searchTerm) ||
                         order.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const handleStatusUpdate = async (orderId: string, newStatus: string, notes?: string) => {
    if (adminUser) {
      await updateOrderStatus(orderId, newStatus, adminUser.id, notes);
    }
  };

  const OrderStatusBadge = ({ status }: { status: string }) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      pending_payment: 'bg-orange-100 text-orange-800',
      processing: 'bg-blue-100 text-blue-800',
      shipped: 'bg-purple-100 text-purple-800',
      delivered: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800'
    };
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[status] || 'bg-gray-100 text-gray-800'}`}>
        {status.replace('_', ' ').toUpperCase()}
      </span>
    );
  };

  if (isLoading) {
    return <div className="flex justify-center items-center h-64">Loading orders...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Order Management</h1>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <Input
              placeholder="Search by name, phone, or order ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Orders</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="pending_payment">Pending Payment</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="shipped">Shipped</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Orders Table */}
      <Card>
        <CardHeader>
          <CardTitle>Orders ({filteredOrders.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredOrders.map((order) => (
              <div key={order.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="font-medium">{order.customer_name}</h3>
                      <OrderStatusBadge status={order.order_status} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                      <div>
                        <p><span className="font-medium">Phone:</span> {order.customer_phone}</p>
                        <p><span className="font-medium">Email:</span> {order.customer_email}</p>
                      </div>
                      <div>
                        <p><span className="font-medium">Edition:</span> {order.selected_edition}</p>
                        <p><span className="font-medium">Color:</span> {order.selected_color}</p>
                      </div>
                      <div>
                        <p><span className="font-medium">Total:</span> {order.total_amount} BDT</p>
                        <p><span className="font-medium">Date:</span> {new Date(order.created_at).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" onClick={() => setSelectedOrder(order)}>
                          <Eye className="w-4 h-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Order Details - {order.id.slice(0, 8)}</DialogTitle>
                        </DialogHeader>
                        {selectedOrder && (
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <h4 className="font-medium mb-2">Customer Information</h4>
                                <p><span className="font-medium">Name:</span> {selectedOrder.customer_name}</p>
                                <p><span className="font-medium">Phone:</span> {selectedOrder.customer_phone}</p>
                                <p><span className="font-medium">Email:</span> {selectedOrder.customer_email}</p>
                                <p><span className="font-medium">Address:</span> {selectedOrder.customer_address}</p>
                              </div>
                              <div>
                                <h4 className="font-medium mb-2">Order Details</h4>
                                <p><span className="font-medium">Edition:</span> {selectedOrder.selected_edition}</p>
                                <p><span className="font-medium">Color:</span> {selectedOrder.selected_color}</p>
                                <p><span className="font-medium">Payment:</span> {selectedOrder.payment_method}</p>
                                {selectedOrder.engraving_text && (
                                  <p><span className="font-medium">Engraving:</span> {selectedOrder.engraving_text}</p>
                                )}
                              </div>
                            </div>
                            <div>
                              <h4 className="font-medium mb-2">Update Status</h4>
                              <div className="flex gap-2">
                                <Select onValueChange={(value) => handleStatusUpdate(selectedOrder.id, value)}>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Change status" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="processing">Processing</SelectItem>
                                    <SelectItem value="shipped">Shipped</SelectItem>
                                    <SelectItem value="delivered">Delivered</SelectItem>
                                    <SelectItem value="cancelled">Cancelled</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
