import React from 'react';

const Footer = () => {
    const styles = {
        footer: {
            backgroundColor: '#333',
            color: '#fff',
            textAlign: 'center',
            padding: '1rem 0',
            position: 'fixed',
            width: '100%',
            bottom: 0,
            left: 0,
        },
        footerContent: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        footerLinks: {
            marginTop: '0.5rem',
        },
        link: {
            color: '#fff',
            margin: '0 0.5rem',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
        },
        linkHover: {
            color: '#00aced',
        },
        paragraph: {
            margin: 0,
        }
    };

    return (
        <footer style={styles.footer}>
            <div style={styles.footerContent}>
                <p style={styles.paragraph}>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
                <div style={styles.footerLinks}>
                    <a
                        href="https://linkedin.com/in/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.link}
                        onMouseOver={(e) => e.currentTarget.style.color = styles.linkHover.color}
                        onMouseOut={(e) => e.currentTarget.style.color = styles.link.color}
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.link}
                        onMouseOver={(e) => e.currentTarget.style.color = styles.linkHover.color}
                        onMouseOut={(e) => e.currentTarget.style.color = styles.link.color}
                    >
                        GitHub
                    </a>
                    <a
                        href="mailto:youremail@example.com"
                        style={styles.link}
                        onMouseOver={(e) => e.currentTarget.style.color = styles.linkHover.color}
                        onMouseOut={(e) => e.currentTarget.style.color = styles.link.color}
                    >
                        youremail@example.com
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
