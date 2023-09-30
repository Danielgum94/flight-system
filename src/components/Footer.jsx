import React from 'react';

export default function Footer() {
  const footerStyle = {
    backgroundColor: '#343a40',
    color: 'white',
    textAlign: 'center',
    padding: '10px',
    position: 'relative',
    bottom: '0',
    width: '100%',
  };

  return (
    <footer style={footerStyle} className="bg-dark text-light text-center py-3">
      &copy; 2023 Flight Management System
    </footer>
  );
}
