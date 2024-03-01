import React from 'react';
import App from '../App'; 
import elephant from '../images/elephant.jpeg';

const DataComponent = () => {
  const imageData = [
    {
      id: 1,
      img: elephant,
    },
    {
      id: 2,
      img: elephant,
    },
    {
      id: 3,
      img: elephant,
    },
    {
      id: 4,
      img: elephant,
    },
  ];

  return (
    <div className="box">
      {imageData.map((element) => (
        <App key={element.id} props={element} /> 
      ))}
    </div>
  );
};

export default DataComponent;
