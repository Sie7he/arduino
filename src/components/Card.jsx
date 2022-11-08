import React  from 'react';
import './card.css';

export const Card = ({ className, title, content , subText}) => {
  

  return (
    <div className={className}>
      <h2>{title}</h2>
      <span className="content"> {content} </span>
      <h4>{subText}</h4>
    </div>
  )
}
