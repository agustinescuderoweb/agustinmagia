import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';
import React from 'react';

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "Agustin Magia",
  description: "Página de Magia - Agustin Magia"
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
