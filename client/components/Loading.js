import React from "react";

const Loading = () => (
  <div className='container'>
    <div
      className='d-flex justify-content-center align-items-center'
      style={{ height: "100vh" }}>
      <div className='spinner-grow text-primary mx-3' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
      <div className='spinner-grow text-primary mx-3' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
      <div className='spinner-grow text-primary mx-3' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  </div>
);

export default Loading;
