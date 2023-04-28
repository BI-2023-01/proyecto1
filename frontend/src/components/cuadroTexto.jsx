import React from 'react';

function TextInput() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '20vh',
      }}
    >
      <input
        type="text"
        placeholder="Ingrese el review de la película"
        style={{
          padding: '0.5rem',
          border: '1px solid gray',
          borderRadius: '0.25rem',
          width: '100%',
          maxWidth: '40rem',
        }}
      />
    </div>
  );
}

export default TextInput;
