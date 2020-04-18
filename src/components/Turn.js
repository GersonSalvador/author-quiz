import React from 'react';
import Books from './Books'
import PropTypes from 'prop-types';

export default function Turn ({author, books, highlight,onAnswerSelected}){
  function highlightToBgColor(highlight){
    const colors = {
      'none' : '',
      'correct': 'green',
      'wrong': 'red'
    }
    return colors[highlight]
  }

  return (
    <div 
      className="row turn" 
      style={{backgroundColor : highlightToBgColor(highlight)}}
    >
      <div className="col-4 offset-1">
        <img src={author.imageUrl} alt={author.name}  title={author.name} className="authorimage"/>
      </div>
      <div className="col-6">
        {books.map((title,i) => <Books title={title} key={i} onClick={onAnswerSelected}/>)}
      </div>
    </div>
  )
}
Turn.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    iamgeSource: PropTypes.string,
    books: PropTypes.arrayOf(PropTypes.string).isRequired
  }),
  books: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  highlight: PropTypes.string.isRequired
}