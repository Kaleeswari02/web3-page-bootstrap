import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-5 mt-auto">
      <div className="container">
        <div className="row g-4">
          {/* Brand Section */}
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-3">
              <i className="bi bi-code-square me-2"></i>
              Bootstrap Boilerplate
            </h5>
            <p className="text-light-emphasis mb-3">
              A modern Next.js App Router boilerplate with Bootstrap 5, 
              designed for rapid development and clean code.
            </p>
            <div className="d-flex gap-3">
              <a 
                href="https://github.com" 
                className="text-light-emphasis text-decoration-none" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="bi bi-github fs-4"></i>
              </a>
              <a 
                href="https://twitter.com" 
                className="text-light-emphasis text-decoration-none" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <i className="bi bi-twitter fs-4"></i>
              </a>
              <a 
                href="https://linkedin.com" 
                className="text-light-emphasis text-decoration-none" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin fs-4"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/" className="text-light-emphasis text-decoration-none">
                  <i className="bi bi-house me-1"></i>Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#features" className="text-light-emphasis text-decoration-none">
                  <i className="bi bi-star me-1"></i>Features
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#about" className="text-light-emphasis text-decoration-none">
                  <i className="bi bi-info-circle me-1"></i>About
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#contact" className="text-light-emphasis text-decoration-none">
                  <i className="bi bi-envelope me-1"></i>Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold mb-3">Resources</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a 
                  href="https://nextjs.org/docs" 
                  className="text-light-emphasis text-decoration-none" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-book me-1"></i>Next.js Docs
                </a>
              </li>
              <li className="mb-2">
                <a 
                  href="https://getbootstrap.com/docs/5.3/" 
                  className="text-light-emphasis text-decoration-none" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-bootstrap me-1"></i>Bootstrap Docs
                </a>
              </li>
              <li className="mb-2">
                <a 
                  href="https://react.dev" 
                  className="text-light-emphasis text-decoration-none" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-react me-1"></i>React Docs
                </a>
              </li>
              <li className="mb-2">
                <Link href="#docs" className="text-light-emphasis text-decoration-none">
                  <i className="bi bi-file-text me-1"></i>Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4 col-md-6">
            <h6 className="fw-bold mb-3">Get In Touch</h6>
            <div className="mb-2">
              <i className="bi bi-envelope me-2"></i>
              <a href="mailto:hello@example.com" className="text-light-emphasis text-decoration-none">
                hello@example.com
              </a>
            </div>
            <div className="mb-2">
              <i className="bi bi-telephone me-2"></i>
              <a href="tel:+1234567890" className="text-light-emphasis text-decoration-none">
                +1 (234) 567-8900
              </a>
            </div>
            <div className="mb-3">
              <i className="bi bi-geo-alt me-2"></i>
              <span className="text-light-emphasis">
                New York, NY, USA
              </span>
            </div>
            <button 
              type="button" 
              className="btn btn-primary btn-sm"
             
            >
              <i className="bi bi-send me-1"></i>
              Contact Us
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <hr className="my-4 border-secondary" />
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="text-light-emphasis mb-0">
              © {currentYear} Bootstrap Boilerplate. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="d-flex gap-3 justify-content-md-end">
              <Link href="#privacy" className="text-light-emphasis text-decoration-none small">
                Privacy Policy
              </Link>
              <Link href="#terms" className="text-light-emphasis text-decoration-none small">
                Terms of Service
              </Link>
              <Link href="#cookies" className="text-light-emphasis text-decoration-none small">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}