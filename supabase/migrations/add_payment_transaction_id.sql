
-- Add payment_transaction_id column to orders table
ALTER TABLE public.orders 
ADD COLUMN payment_transaction_id TEXT;

-- Add index for faster lookups
CREATE INDEX idx_orders_payment_transaction_id ON public.orders(payment_transaction_id);
