
import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

const Spec = () => {
  const images = [
    '/lovable-uploads/73fd0ada-d12f-4f44-ac5b-5990b5070319.png',
    '/lovable-uploads/efa98636-f74a-42fd-b489-d2501fdd005b.png',
    '/lovable-uploads/04a3a3a0-c455-422a-807a-040cb6e862d2.png',
    '/lovable-uploads/03f9efc2-1901-49e0-b6f6-d2795d82216e.png',
    '/lovable-uploads/2a8e6eb2-aaa6-4681-9569-4bf261f95aad.png',
    '/lovable-uploads/4ac40de0-0374-40e9-8509-15236472e797.png',
    '/lovable-uploads/d222f1b4-53aa-41fe-9628-140ff95de85a.png',
    '/lovable-uploads/abf2a049-ea96-4c40-9c26-21bf0450498f.png',
    '/lovable-uploads/0363e2ae-5b1d-47ee-a019-33cc9ebad94d.png'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <div className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center">
                    Ximpul Flow Specifications
                </h1>
            </div>
        </div>
        <div className="flex flex-col items-center bg-white">
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Spec image ${index + 1}`} className="w-full max-w-5xl" />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Spec;
