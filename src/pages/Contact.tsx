
import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';

const Contact = () => {
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
          <ContactForm />
          
          <div className="text-center mt-12">
            <p className="text-lg font-light text-muted-foreground">
              "We believe in full transparency — your voice matters."
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
