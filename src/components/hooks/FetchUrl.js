import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

//https://dev.to/vinodchauhan7/react-hooks-with-async-await-1n9g
const FetchUrl = (url) => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchStuff = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const json = await response.json();
        setResult(json);
      } catch (e) {
        console.error('FetchUrl', e.message());
      } finally {
        setLoading(false);
      }
    };

    if (url !== '') {
      fetchStuff();
    }
  }, [url]);

  return [result, loading];
};

FetchUrl.propTypes = {
  url: PropTypes.string,
};

export default FetchUrl;
