import React from 'react';

const Spinner = () => {
  const spinnerContainerStyle = {
    height: '100vh', // 100% of the viewport height
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'lightblue', // Change the background color if needed
  };

  const spinnerStyle = {
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    background: 'conic-gradient(#0000 10%, #474bff)',
    WebkitMask: 'radial-gradient(farthest-side, #0000 calc(100% - 9px), #000 0)',
    animation: 'spinner-zp9dbg 1s infinite linear',
  };

  return (
    <div style={spinnerContainerStyle}>
      <div style={spinnerStyle} className="spinner"></div>

      <style>
        {`
          @keyframes spinner-zp9dbg {
            to {
              transform: rotate(1turn);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Spinner;
