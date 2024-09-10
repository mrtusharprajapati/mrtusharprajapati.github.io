// LandingPage.tsx
import React from 'react';
import './LandingPage.css'; // Import a CSS file for styling

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <img src="/path/to/author-photo.jpg" alt="Author" className="author-photo" />
          <div className="author-info">
            <h1>Author Name</h1>
            <p>Short bio about the author and their work.</p>
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section className="books">
        <h2>Books</h2>
        <div className="book-list">
          {/* Repeat this block for each book */}
          <div className="book-item">
            <img src="/path/to/book-cover.jpg" alt="Book Title" className="book-cover" />
            <h3>Book Title</h3>
            <p>Brief description or tagline of the book.</p>
            <div className="buy-buttons">
              <a href="https://amazon.com" className="buy-btn">Buy on Amazon</a>
              <a href="https://flipkart.com" className="buy-btn">Buy on Flipkart</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with social links */}
      <footer className="footer">
        <div className="social-links">
          <a href="https://twitter.com/author" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://facebook.com/author" target="_blank" rel="noopener noreferrer">Facebook</a>
          {/* Add more social links */}
        </div>
        <div className="contact">
          <p>Contact me: <a href="mailto:author@example.com">author@example.com</a></p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
