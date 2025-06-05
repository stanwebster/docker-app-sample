import React, { useState, useEffect } from 'react';

const CatFact = () => {
  const [fact, setFact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchFact = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('http://backend:5000/cat-fact');
      if (!response.ok) throw new Error('Network response was not ok');
      
      const data = await response.json();
      setFact(data);
    } catch (err) {
      setError('Failed to load cat fact. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <div className="cat-fact-container">
      {loading ? (
        <div className="loader">😺 Loading cat fact...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <>
          <div className="fact-box">
            <p className="fact-text">{fact.fact}</p>
            <div className="fact-meta">
              <span>Length: {fact.length} chars</span>
            </div>
          </div>
          <button className="new-fact-btn" onClick={fetchFact}>
            Get New Cat Fact
          </button>
        </>
      )}
    </div>
  );
};

export default CatFact;