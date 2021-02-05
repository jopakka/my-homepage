import {useState, useEffect} from 'react';

const WindowDimensions = () => {
  const [dimens, setDimens] = useState(getWindowDimensions());

  useEffect(() => {
    const handleResize = () => {
      setDimens(getWindowDimensions());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return dimens;
};

const getWindowDimensions = () => {
  const {innerWidth: width, innerHeight: height} = window;
  return {width, height};
};

export default WindowDimensions;
