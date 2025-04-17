import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <a href="#top" style={styles.backToTop}>
          <span style={styles.backToTopIcon}>↑</span>
          <span style={styles.backToTopText}>BACK TO TOP</span>
        </a>
        
        <div style={styles.socialLinks}>
          <a href="https://www.facebook.com/share/1C5uikzm74/" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
            <div style={styles.socialIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/mounir-boudjelal-a11870283" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
            <div style={styles.socialIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </div>
          </a>
          <a href="https://www.instagram.com/mounir.bdj" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
            <div style={styles.socialIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </div>
          </a>
          <a href="https://github.com/mooniirrr" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
            <div style={styles.socialIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"></path>
              </svg>
            </div>
          </a>
        </div>
        
        <div style={styles.copyright}>
          ©{new Date().getFullYear()} Mounir <br />All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#1a1a1a',
    color: 'white',
    padding: '40px 20px',
    textAlign: 'center',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
  },
  backToTop: {
    color: 'white',
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '15px',
  },
  backToTopIcon: {
    fontSize: '18px',
    marginBottom: '5px',
  },
  backToTopText: {
    fontSize: '12px',
    letterSpacing: '2px',
  },
  socialLinks: {
    display: 'flex',
    gap: '15px',
    margin: '15px 0',
  },
  socialLink: {
    color: 'white',
    textDecoration: 'none',
  },
  socialIcon: {
    width: '36px',
    height: '36px',
    border: '1px solid white',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    padding: '8px',
  },
  copyright: {
    fontSize: '14px',
    opacity: 0.8,
  }
};

export default Footer;