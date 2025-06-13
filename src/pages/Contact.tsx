
import React, { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-light text-foreground mb-6 leading-tight">
            Contact
          </h1>
          <p className="text-xl md:text-2xl font-light text-muted-foreground mb-8">
            Have a question? Want to know more about Ximpul or #TruePrice?<br />
            Reach out — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-base font-medium">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 rounded-2xl"
                required
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-base font-medium">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 rounded-2xl"
                required
              />
            </div>

            <div>
              <Label htmlFor="subject" className="text-base font-medium">Subject</Label>
              <Input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                className="mt-2 rounded-2xl"
                required
              />
            </div>

            <div>
              <Label htmlFor="message" className="text-base font-medium">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-2 rounded-2xl min-h-[120px]"
                required
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-black hover:bg-black/90 text-white py-3 text-lg font-medium rounded-2xl"
            >
              Send Message
            </Button>
          </form>

          <div className="text-center mt-12">
            <p className="text-lg font-light text-muted-foreground">
              "We believe in full transparency — your voice matters."
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground font-light">
              © 2024 Ximpul Flow. Made with love in Bangladesh.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
