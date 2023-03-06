import React from 'react';
import Typed from 'typed.js';
import './Home.css';

const Home = () => {
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [
        'developer',
        'blogger',
        'cat lover',
      ],
      typeSpeed: 80,
      backSpeed: 80,
      loop: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);


  return (
    <>
      <div className="wrap">
        <h3>Hello! This is Chelsey</h3>
        <div className="type-wrap">
          <span>I&#39;m a </span><span className='typed-span' style={{whiteSpace: 'pre'}} ref={el} />
        </div>
      </div>

    </>
  );
};

export default Home;
