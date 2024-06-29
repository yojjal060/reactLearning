import React, { useEffect, useRef, useState } from 'react';

function App() {
  const [dimensions, setDimensions] = useState([]);
  // Assuming you want to track 3 divs, initialize an array of refs
  const divsRef = useRef([...Array(3)].map(() => React.createRef()));

  useEffect(() => {
    let dims = divsRef.current.map(ref => {
      return ref.current ? ref.current.offsetHeight : 0;
    });
    setDimensions(dims);
  }, []);

  return (
    <>
      {divsRef.current.map((ref, index) => (
        <div key={index} className={`lol${index + 1}`} ref={ref}>
          {dimensions[index]}
        </div>
      ))}
    </>
  );
}

export default App;