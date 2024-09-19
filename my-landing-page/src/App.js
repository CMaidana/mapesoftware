import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Your custom CSS file

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">Your Company</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Welcome to Your Company</h1>
          <p>Your catchy tagline goes here.</p>
          <a href="#" className="btn btn-primary btn-lg">Get Started</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>About Us</h2>
          <p>A brief description of your company and what you do.</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services bg-light">
        <div className="container">
          <h2>Our Services</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="service">
                <h3>Service 1</h3>
                <p>Description of Service 1.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service">
                <h3>Service 2</h3>
                <p>Description of Service 2.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service">
                <h3>Service 3</h3>
                <p>Description of Service 3.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <p>Contact information and a contact form can go here.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Your Company. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
