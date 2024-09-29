import React from 'react';

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
      {children}
    </div>
  );
}
