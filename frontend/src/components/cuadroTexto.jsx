import axios from 'axios';
import React, { useState } from 'react';

function TextInput() {
  const [review_es, setReview] = useState('');
  const [prediction, setPrediction] = useState('');

  const handleInputChange = (event) => {
    setReview(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/predict', {review_es});
      setPrediction(response.data)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '20vh',
        marginTop: '5rem',
        marginBottom: '8rem'

      }}
    >
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="review"
          placeholder="Ingrese el review de la película"
          style={{
            padding: '0.5rem',
            border: '1px solid gray',
            borderRadius: '0.25rem',
            width: '40rem',
          }}
          value={review_es}
          onChange={handleInputChange}
        />
        <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '0vh',
        marginTop: '3rem',
        marginBottom: '5rem'
      }}
    >
        <button type="submit"
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
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '0vh',
          marginTop: '5rem',
          backgroundColor: '#B3C6DF',
          padding: '1rem', 
          borderRadius: '0.25rem',
          fontSize: '1.2rem',
          maxWidth: '20rem',
          margin: '0 auto'
        }}
      >
        <p>{prediction}</p>
      </div>

      </form>
      
    </div>
    
  );
}

export default TextInput;