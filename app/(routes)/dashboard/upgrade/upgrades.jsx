import React from 'react';

export default function upgrades() {
  const styles = {
    container: {
      padding: '2rem',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f4f4f8',
    },
    header: {
      h1: {
        fontSize: '1.8rem',
        color: '#333',
      },
      p: {
        color: '#777',
      },
    },
    features: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      color: '#555',
      fontWeight: 'bold',
      marginTop: '0.5rem',
    },
    cards: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1.5rem',
      marginTop: '2rem',
    },
    card: {
      backgroundColor: 'white',
      padding: '1.5rem',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'left',
      h3: {
        fontSize: '1.2rem',
        color: '#333',
      },
      p: {
        color: '#777',
      },
      h2: {
        fontSize: '1.5rem',
        color: '#333',
        margin: '1rem 0',
      },
      button: {
        width: '100%',
        padding: '0.75rem',
        backgroundColor: '#6200ea',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        fontWeight: 'bold',
        cursor: 'pointer',
        marginTop: '1rem',
        hover: {
          backgroundColor: '#4b00c2',
        },
      },
      ul: {
        listStyleType: 'none',
        padding: 0,
        color: '#555',
      },
      li: {
        marginTop: '0.5rem',
      },
    },
    recommended: {
      border: '2px solid #6200ea',
    },
    elite: {
      borderTop: '5px solid #6200ea',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.header.h1}>
          Choose the Premium plan that's right for your store
        </h1>
        <p style={styles.header.p}>All plans include:</p>
        <div style={styles.features}>
          <span>Custom domain</span>
          <span>No Wix branding</span>
          <span>24/7 customer care</span>
        </div>
      </div>

      <div style={styles.cards}>
        <div style={{ ...styles.card, ...styles.elite }}>
          <h3 style={styles.card.h3}>Business Elite</h3>
          <p style={styles.card.p}>Scale your business</p>
          <h2 style={styles.card.h2}>₹1,800/mo</h2>
          <button
            style={styles.card.button}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = styles.card.button.hover.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = styles.card.button.backgroundColor)
            }
          >
            Select
          </button>
          <ul style={styles.card.ul}>
            <li style={styles.card.li}>15 collaborators</li>
            <li style={styles.card.li}>Unlimited storage space</li>
            <li style={styles.card.li}>Advanced marketing suite</li>
            <li style={styles.card.li}>Free domain for 1 year</li>
            <li style={styles.card.li}>Advanced site analytics</li>
            <li style={styles.card.li}>Accept payments</li>
            <li style={styles.card.li}>Advanced eCommerce</li>
            <li style={styles.card.li}>Advanced developer platform</li>
          </ul>
        </div>

        <div style={{ ...styles.card, ...styles.recommended }}>
          <h3 style={styles.card.h3}>Business</h3>
          <p style={styles.card.p}>Grow your brand</p>
          <h2 style={styles.card.h2}>₹900/mo</h2>
          <button
            style={styles.card.button}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = styles.card.button.hover.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = styles.card.button.backgroundColor)
            }
          >
            Select
          </button>
          <ul style={styles.card.ul}>
            <li style={styles.card.li}>10 collaborators</li>
            <li style={styles.card.li}>100 GB storage space</li>
            <li style={styles.card.li}>Standard marketing suite</li>
            <li style={styles.card.li}>Free domain for 1 year</li>
            <li style={styles.card.li}>Standard site analytics</li>
            <li style={styles.card.li}>Accept payments</li>
            <li style={styles.card.li}>Standard eCommerce</li>
          </ul>
        </div>

        <div style={styles.card}>
          <h3 style={styles.card.h3}>Core</h3>
          <p style={styles.card.p}>Engage your audience</p>
          <h2 style={styles.card.h2}>₹500/mo</h2>
          <button
            style={styles.card.button}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = styles.card.button.hover.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = styles.card.button.backgroundColor)
            }
          >
            Select
          </button>
          <ul style={styles.card.ul}>
            <li style={styles.card.li}>5 collaborators</li>
            <li style={styles.card.li}>50 GB storage space</li>
            <li style={styles.card.li}>Basic marketing suite</li>
            <li style={styles.card.li}>Free domain for 1 year</li>
            <li style={styles.card.li}>Basic site analytics</li>
            <li style={styles.card.li}>Accept payments</li>
            <li style={styles.card.li}>Basic eCommerce</li>
          </ul>
        </div>

        <div style={styles.card}>
          <h3 style={styles.card.h3}>Light</h3>
          <p style={styles.card.p}>Get the basics</p>
          <h2 style={styles.card.h2}>₹250/mo</h2>
          <button
            style={styles.card.button}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = styles.card.button.hover.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = styles.card.button.backgroundColor)
            }
          >
            Select
          </button>
          <ul style={styles.card.ul}>
            <li style={styles.card.li}>2 collaborators</li>
            <li style={styles.card.li}>2 GB storage space</li>
            <li style={styles.card.li}>Light marketing suite</li>
            <li style={styles.card.li}>Free domain for 1 year</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
