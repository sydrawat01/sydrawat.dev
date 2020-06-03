import React from 'react';
import star from '../../images/star.svg';

const Rating = ({ stars, link, thumbnail }) => {
  const ratings = [];
  for (let i = 1; i <= stars; i += 1) {
    ratings.push(i);
  }
  return (
    <div className="critique">
      <div className="watch">
        <a href={link}>
          <img src={thumbnail} alt="netflix"/>
        </a>
      </div>
      <div className="stars">
        {ratings.map(item => (
          <img src={star} alt="rating" key={item} />
        ))}
      </div>
    </div>
  );
};
export default Rating;
