import React from 'react';

export default function Books({title,onClick}){
  return (
    <h4 
      className="answer"
      onClick={() => onClick(title)}
    >
      {title}
    </h4>
  )
}