import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';
import React from 'react';
<<<<<<< HEAD
=======
import './globals.css'; 

>>>>>>> 0ba4e82 (nuevo)

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
<<<<<<< HEAD
=======
      <head>
      <link rel="icon" href="/logomagia.ico" />
      </head>
>>>>>>> 0ba4e82 (nuevo)
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
