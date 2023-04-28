import React from 'react';

function Button() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '0vh',
      }}
    >
      <button
        style={{
          backgroundColor: "#113251",
          color: 'white',
          fontSize: '1rem',
          padding: '0.5rem 1rem',
          borderRadius: '0.25rem',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Recibir predicción
      </button>
    </div>
  );
}

export default Button;
