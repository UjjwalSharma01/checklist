'use client';

import { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState({
    content: 'The only limit to our realization of tomorrow will be our doubts of today.',
    author: 'Franklin D. Roosevelt',
  });

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
          headers: { 'X-Api-Key': 'gv414CStL2w22HtsC4pp8A==fHW82xPwAxJPaUjU' },
        });
        const data = await response.json();
        setQuote({
          content: data[0].quote,
          author: data[0].author,
        });
      } catch (error) {
        console.error('Error fetching quote:', error);
      }
    };

    fetchQuote();
  }, []);

  return (
    <section className="quote">
      <blockquote id="quoteContent">"{quote.content}"</blockquote>
      <cite id="quoteTitle">— {quote.author}</cite>
    </section>
  );
};

export default Quote;
