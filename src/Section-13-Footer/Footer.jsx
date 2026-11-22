
function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row g-4 mb-4">
          <div className="col-12 col-md-4">
            <h5 className="fw-bold text-white mb-3">🏦 Banker</h5>
            <p className="text-secondary small">
              A modern, reliable financial institution offering digital banking,
              wealth management, and institutional market solutions.
            </p>
          </div>
          <div className="col-6 col-md-2">
            <h6 className="fw-bold text-light mb-3">Quick Links</h6>
            <ul className="list-unstyled text-secondary small mb-0">
              <li className="mb-2">
                <a href="#about" className="text-secondary text-decoration-none">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#services" className="text-secondary text-decoration-none">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#pricing" className="text-secondary text-decoration-none">
                  Pricing
                </a>
              </li>
              <li className="mb-2">
                <a href="#faq" className="text-secondary text-decoration-none">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-2">
            <h6 className="fw-bold text-light mb-3">Resources</h6>
            <ul className="list-unstyled text-secondary small mb-0">
              <li className="mb-2">
                <a href="#blog" className="text-secondary text-decoration-none">
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a href="#how-it-works" className="text-secondary text-decoration-none">
                  How It Works
                </a>
              </li>
              <li className="mb-2">
                <a href="#gallery" className="text-secondary text-decoration-none">
                  Gallery
                </a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="text-secondary text-decoration-none">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4">
            <h6 className="fw-bold text-light mb-3">Security & Compliance</h6>
            <p className="text-secondary small">
              FDIC Insured up to standard limits. 256-bit bank-grade encryption
              protects your personal data and funds around the clock.
            </p>
          </div>
        </div>
        <hr className="border-secondary opacity-25 my-4" />
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center text-secondary small">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Banker Inc. All rights reserved.
          </p>
          <div className="d-flex gap-3 mt-2 mt-sm-0">
            <a href="#home" className="text-secondary text-decoration-none">
              Privacy Policy
            </a>
            <span>&bull;</span>
            <a href="#home" className="text-secondary text-decoration-none">
              Terms of Service
            </a>
            <span>&bull;</span>
            <a href="#home" className="text-secondary text-decoration-none">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;