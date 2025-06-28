
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useContacts } from '@/hooks/useContacts';
import { Eye, Mail, Phone, Calendar } from 'lucide-react';

export const AdminCustomers = () => {
  const { contacts, isLoading, updateContactStatus } = useContacts();
  const [selectedContact, setSelectedContact] = useState(null);
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter contacts based on status and search term
  const filteredContacts = contacts.filter(contact => {
    const matchesStatus = statusFilter === 'all' || contact.status === statusFilter;
    const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.subject.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const ContactStatusBadge = ({ status }: { status: string }) => {
    const colors = {
      new: 'bg-blue-100 text-blue-800',
      in_progress: 'bg-yellow-100 text-yellow-800',
      resolved: 'bg-green-100 text-green-800',
      closed: 'bg-gray-100 text-gray-800'
    };
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[status] || 'bg-gray-100 text-gray-800'}`}>
        {status.replace('_', ' ').toUpperCase()}
      </span>
    );
  };

  if (isLoading) {
    return <div className="flex justify-center items-center h-64">Loading contacts...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Customer Contacts</h1>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <Input
              placeholder="Search by name, email, or subject..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Contacts</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="in_progress">In Progress</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Contacts List */}
      <Card>
        <CardHeader>
          <CardTitle>Contact Messages ({filteredContacts.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredContacts.map((contact) => (
              <div key={contact.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="font-medium">{contact.name}</h3>
                      <ContactStatusBadge status={contact.status} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                      <div>
                        <p className="flex items-center gap-1">
                          <Mail className="w-4 h-4" />
                          {contact.email}
                        </p>
                        <p className="flex items-center gap-1 mt-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(contact.created_at).toLocaleDateString()}
                        </p>
                      </div>
                      <div>
                        <p><span className="font-medium">Subject:</span> {contact.subject}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 truncate">{contact.message}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" onClick={() => setSelectedContact(contact)}>
                          <Eye className="w-4 h-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Contact Details</DialogTitle>
                        </DialogHeader>
                        {selectedContact && (
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <h4 className="font-medium mb-2">Contact Information</h4>
                                <p><span className="font-medium">Name:</span> {selectedContact.name}</p>
                                <p><span className="font-medium">Email:</span> {selectedContact.email}</p>
                                <p><span className="font-medium">Date:</span> {new Date(selectedContact.created_at).toLocaleString()}</p>
                              </div>
                              <div>
                                <h4 className="font-medium mb-2">Message Details</h4>
                                <p><span className="font-medium">Subject:</span> {selectedContact.subject}</p>
                                <p><span className="font-medium">Status:</span> <ContactStatusBadge status={selectedContact.status} /></p>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-medium mb-2">Message</h4>
                              <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="whitespace-pre-wrap">{selectedContact.message}</p>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-medium mb-2">Update Status</h4>
                              <Select onValueChange={(value) => updateContactStatus(selectedContact.id, value)}>
                                <SelectTrigger className="w-48">
                                  <SelectValue placeholder="Change status" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="new">New</SelectItem>
                                  <SelectItem value="in_progress">In Progress</SelectItem>
                                  <SelectItem value="resolved">Resolved</SelectItem>
                                  <SelectItem value="closed">Closed</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            ))}
            {filteredContacts.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No contact messages found.
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
