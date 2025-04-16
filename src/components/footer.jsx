import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <a href="#top" style={styles.backToTop}>
          <span style={styles.backToTopIcon}>↑</span>
          <span style={styles.backToTopText}>BACK TO TOP</span>
        </a>
        
        <div style={styles.socialLinks}>
          <a href="#" style={styles.socialLink}>
            <div style={styles.socialIcon}>□</div>
          </a>
          <a href="#" style={styles.socialLink}>
            <div style={styles.socialIcon}>□</div>
          </a>
          <a href="#" style={styles.socialLink}>
            <div style={styles.socialIcon}>□</div>
          </a>
          <a href="#" style={styles.socialLink}>
            <div style={styles.socialIcon}>□</div>
          </a>
        </div>
        
        <div style={styles.copyright}>
          ©{currentYear} Your Name All Rights Reserved.
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
    width: '24px',
    height: '24px',
    border: '1px solid white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
  },
  copyright: {
    fontSize: '14px',
    opacity: 0.8,
  }
};

export default Footer;