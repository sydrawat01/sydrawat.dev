import React from 'react';
import star from '../../images/star.svg';

const Rating = ({ stars }) => {
  const ratings = [];
  for (let i = 1; i <= stars; i += 1) {
    ratings.push(i);
  }
  return (
    <>
      <div className="stars">
        {ratings.map(item => (
          <img src={star} alt="rating" width="30" key={item} style={{ padding: `${2}px` }} />
        ))}
      </div>
    </>
  );
};
export default Rating;
