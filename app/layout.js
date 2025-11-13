// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Import custom global styles
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
export const metadata = {
  title: 'Next.js Bootstrap Boilerplate',
  description: 'A clean Next.js App Router boilerplate with Bootstrap 5',
  viewport: 'width=device-width, initial-scale=1',
  keywords: 'nextjs, bootstrap, boilerplate, app router',
  author: 'Bootstrap Boilerplate',
  robots: 'index, follow',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preload Bootstrap font for better performance */}
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" as="style" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.css" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="d-flex flex-column min-vh-100">
        {/* Navbar Component */}
        <Navbar />
        
        {/* Main Content */}
        <main className="flex-grow-1">
          {children}
        </main>
        
        {/* Footer Component */}
        <Footer />
        
        {/* Bootstrap JS Bundle (includes Popper) */}
        <script 
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" 
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" 
          crossOrigin="anonymous"
          defer
        ></script>
      </body>
    </html>
  );
}
