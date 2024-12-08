"use client";
import React from "react";

export default function Upgrades() {
  const styles = {
    container: {
      padding: "2rem",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#fff",
    },
    header: {
      marginBottom: "2rem",
    },
    title: {
      fontSize: "2rem",
      color: "#333",
      fontWeight: "bold",
      marginBottom: "0.5rem",
    },
    subtitle: {
      color: "#555",
      fontSize: "1rem",
    },
    features: {
      display: "flex",
      justifyContent: "center",
      gap: "1rem",
      color: "#777",
      fontSize: "0.9rem",
      fontWeight: "500",
      marginTop: "1rem",
    },
    cards: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "2rem",
      marginTop: "2rem",
    },
    card: {
      backgroundColor: "#f9f9f9",
      padding: "2rem",
      borderRadius: "10px",
      border: "1px solid #ddd",
      transition: "transform 0.3s, box-shadow 0.3s",
      textAlign: "center",
      cursor: "pointer",
    },
    hoverEffect: {
      transform: "scale(1.02)",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    },
    titleCard: {
      fontSize: "1.4rem",
      color: "#333",
      fontWeight: "bold",
      marginBottom: "0.5rem",
    },
    description: {
      color: "#777",
      margin: "0.5rem 0 1rem",
      fontSize: "0.95rem",
    },
    price: {
      fontSize: "1.6rem",
      color: "#333",
      margin: "1rem 0",
      fontWeight: "bold",
    },
    button: {
      padding: "0.8rem",
      backgroundColor: "#E973AB",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      fontWeight: "bold",
      textDecoration: "none",
      display: "inline-block",
      textAlign: "center",
      fontSize: "1rem",
      marginTop: "1rem",
      transition: "background-color 0.3s",
    },
    buttonHover: {
      backgroundColor: "#C26192",
    },
    list: {
      listStyleType: "none",
      padding: 0,
      color: "#555",
      marginTop: "1.5rem",
      fontSize: "0.9rem",
      textAlign: "left",
    },
    listItem: {
      marginBottom: "0.5rem",
    },
  };

  const plans = [
    {
      title: "SpendWise Premium Business",
      description: "Scale your expense management",
      price: "₹999/mo",
      link: "https://buy.stripe.com/test_3cs5oob0x6xV2lO3cf",
      features: [
        "15 collaborators",
        "Unlimited storage space",
        "Advanced expense tracking suite",
        "In-depth analytics and reporting",
        "Customizable financial insights",
        "Dedicated premium support",
        "Seamless integrations with top accounting tools",
        "Enhanced security features",
      ],
    },
    {
      title: "SpendWise Pro",
      description: "Grow your financial management",
      price: "₹799/mo",
      link: "https://buy.stripe.com/test_3cs6ssecJcWjaSk9AC",
      features: [
        "10 collaborators",
        "100 GB storage space",
        "Comprehensive expense tracking suite",
        "Customizable reports and insights",
        "Dedicated customer support",
        "Advanced security protocols",
        "Payment gateway integration",
      ],
    },
    {
      title: "SpendWise Core",
      description: "Engage your financial management",
      price: "₹499/mo",
      link: "https://buy.stripe.com/test_28o2cc3y58G39OgaEF",
      features: [
        "5 collaborators",
        "50 GB storage space",
        "Basic expense tracking features",
        "Basic expense reports and analytics",
        "Email support",
        "Integration with basic accounting tools",
        "Secure payment acceptance",
      ],
    },
    {
      title: "SpendWise Lite",
      description: "Get the basics of financial tracking",
      price: "₹199/mo",
      link: "https://buy.stripe.com/test_eVa4kk5Gd4pN4tW000",
      features: [
        "2 collaborators",
        "2 GB storage space",
        "Basic expense tracking features",
        "Simple expense reports",
      ],
    },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Choose the Premium Plan That Fits Your Needs</h1>
        <p style={styles.subtitle}>All plans include:</p>
        <div style={styles.features}>
          <span>Custom domain</span>
          <span>No branding</span>
          <span>24/7 customer care</span>
          <span>Seamless integrations</span>
        </div>
      </div>

      <div style={styles.cards}>
        {plans.map((plan, index) => (
          <div
            key={index}
            style={styles.card}
            onMouseOver={(e) => {
              Object.assign(e.currentTarget.style, styles.hoverEffect);
            }}
            onMouseOut={(e) => {
              Object.assign(e.currentTarget.style, {
                transform: "scale(1)",
                boxShadow: "none",
              });
            }}
          >
            <h3 style={styles.titleCard}>{plan.title}</h3>
            <p style={styles.description}>{plan.description}</p>
            <h2 style={styles.price}>{plan.price}</h2>
            <a
              href={plan.link}
              style={styles.button}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = styles.button.backgroundColor)
              }
            >
              Select
            </a>
            <ul style={styles.list}>
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} style={styles.listItem}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}



// "use client";
// import React from "react";

// export default function Upgrades() {
//   const styles = {
//     container: {
//       padding: "2rem",
//       textAlign: "center",
//       fontFamily: "Arial, sans-serif",
//       backgroundColor: "#f4f4f8",
//     },
//     header: {
//       marginBottom: "2rem",
//     },
//     title: {
//       fontSize: "1.8rem",
//       color: "#333",
//       marginBottom: "0.5rem",
//     },
//     subtitle: {
//       color: "#777",
//     },
//     features: {
//       display: "flex",
//       justifyContent: "center",
//       gap: "1rem",
//       color: "#555",
//       fontWeight: "bold",
//       marginTop: "0.5rem",
//     },
//     cards: {
//       display: "grid",
//       gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//       gap: "1.5rem",
//     },
//     card: {
//       backgroundColor: "#fff",
//       padding: "1.5rem",
//       borderRadius: "8px",
//       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//       textAlign: "left",
//       transition: "transform 0.2s",
//       cursor: "pointer",
//     },
//     recommended: {
//       border: "2px solid #E973AB",
//     },
//     elite: {
//       borderTop: "5px solid #E973AB",
//     },
//     titleCard: {
//       fontSize: "1.2rem",
//       color: "#333",
//     },
//     description: {
//       color: "#777",
//       margin: "0.5rem 0",
//     },
//     price: {
//       fontSize: "1.5rem",
//       color: "#333",
//       margin: "1rem 0",
//     },
//     button: {
//       width: "100%",
//       padding: "0.75rem",
//       backgroundColor: "#E973AB",
//       color: "#fff",
//       border: "none",
//       borderRadius: "4px",
//       fontWeight: "bold",
//       marginTop: "1rem",
//       textDecoration: "none",
//       display: "block",
//       textAlign: "center",
//     },
//     buttonHover: {
//       backgroundColor: "#C26192",
//     },
//     list: {
//       listStyleType: "none",
//       padding: 0,
//       color: "#555",
//       marginTop: "1rem",
//     },
//     listItem: {
//       marginBottom: "0.5rem",
//     },
//   };

//   const plans = [
//     {
//       title: "SpendWise Premium Business",
//       description: "Scale your expense management",
//       price: "₹999/mo",
//       link: "https://buy.stripe.com/test_3cs5oob0x6xV2lO3cf",
//       features: [
//         "15 collaborators",
//         "Unlimited storage space",
//         "Advanced expense tracking suite",
//         "In-depth analytics and reporting",
//         "Customizable financial insights",
//         "Dedicated premium support",
//         "Seamless integrations with top accounting tools",
//         "Enhanced security features",
//       ],
//       style: styles.elite,
//     },
//     {
//       title: "SpendWise Pro",
//       description: "Grow your financial management",
//       price: "₹799/mo",
//       link: " https://buy.stripe.com/test_3cs6ssecJcWjaSk9AC",
//       features: [
//         "10 collaborators",
//         "100 GB storage space",
//         "Comprehensive expense tracking suite",
//         "Customizable reports and insights",
//         "Dedicated customer support",
//         "Advanced security protocols",
//         "Payment gateway integration",
//       ],
//       style: styles.recommended,
//     },
//     {
//       title: "SpendWise Core",
//       description: "Engage your financial management",
//       price: "₹499/mo",
//       link: "https://buy.stripe.com/test_28o2cc3y58G39OgaEF",
//       features: [
//         "5 collaborators",
//         "50 GB storage space",
//         "Basic expense tracking features",
//         "Basic expense reports and analytics",
//         "Email support",
//         "Integration with basic accounting tools",
//         "Secure payment acceptance",
//       ],
//     },
//     {
//       title: "SpendWise Lite",
//       description: "Get the basics of financial tracking",
//       price: "₹199/mo",
//       link: " https://buy.stripe.com/test_eVa4kk5Gd4pN4tW000",
//       features: [
//         "2 collaborators",
//         "2 GB storage space",
//         "Basic expense tracking features",
//         "Simple expense reports",
//       ],
//     },
//   ];

//   return (
//     <div style={styles.container}>
//       <div style={styles.header}>
//         <h1 style={styles.title}>
//           <b>Choose the Premium Plan That Fits Your Needs</b>
//         </h1>
//         <p style={styles.subtitle}>All plans include:</p>
//         <div style={styles.features}>
//           <span>Custom domain</span>
//           <span>No branding</span>
//           <span>24/7 customer care</span>
//           <span>Seamless integrations</span>
//         </div>
//       </div>

//       <div style={styles.cards}>
//         {plans.map((plan, index) => (
//           <div
//             key={index}
//             style={{
//               ...styles.card,
//               ...(plan.style || {}),
//             }}
//           >
//             <h3 style={styles.titleCard}>
//               <b>{plan.title}</b>
//             </h3>
//             <p style={styles.description}>{plan.description}</p>
//             <h2 style={styles.price}>{plan.price}</h2>
//             <a
//               href={plan.link}
//               style={styles.button}
//               onMouseOver={(e) =>
//                 (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)
//               }
//               onMouseOut={(e) =>
//                 (e.target.style.backgroundColor = styles.button.backgroundColor)
//               }
//             >
//               Select
//             </a>
//             <ul style={styles.list}>
//               {plan.features.map((feature, featureIndex) => (
//                 <li key={featureIndex} style={styles.listItem}>
//                   {feature}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
