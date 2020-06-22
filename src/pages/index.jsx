import React, {
  useEffect,
  useState,
} from 'react';

const IndexPage = () => {
  const [quotes, setQuotes] = useState(
    []
  );
  const [
    quoteAuthor,
    setQuoteAuthor,
  ] = useState('');
  const [quote, setQuote] = useState(
    ''
  );

  const getRandomQuotes = () => {
    return quotes[
      Math.floor(
        Math.random() * quotes.length
      )
    ];
  };

  const getQuote = () => {
    return getRandomQuotes();
  };

  const quoteBoxStyles = {
    maxWidth: 500,
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  useEffect(() => {
    const grabData = async () => {
      const res = await fetch(
        'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
      );
      const data = await res.json();
      const firstQuote =
        data.quotes[
          Math.floor(
            Math.random() *
              data.quotes.length
          )
        ];
      setQuotes(data.quotes);
      setQuote(firstQuote.quote);
      setQuoteAuthor(firstQuote.author);
    };
    grabData();
  }, []);

  const handleClick = () => {
    const {
      quote,
      author,
    } = getQuote();
    setQuote(quote);
    setQuoteAuthor(author);
  };
  return (
    <div
      id="quote-box"
      style={quoteBoxStyles}
    >
      <h1>Quote box</h1>
      <div>
        <h2 id="text">{quote}</h2>
        <h3 id="author">
          {quoteAuthor}
        </h3>
        <button
          type="submit"
          id="new-quote"
          onClick={handleClick}
        >
          New Quote!
        </button>
      </div>
      <p>
        <a
          href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${quote}"${quoteAuthor}`}
          id="tweet-quote"
        >
          Tweet Quote
        </a>
      </p>
    </div>
  );
};

export default IndexPage;
