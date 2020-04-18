import React from 'react';
// import PropTypes from 'prop-types';
import Hero from './components/Hero';
import Turn from './components/Turn';
import Continue from './components/Continue';
import Footer from './components/Footer';
import {Link} from 'react-router-dom';

import './App.css';
import './bootstrap.min.css'

function AuthorQuiz({turnData,highlight,onAnswerSelected}) {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn 
        {...turnData} 
        highlight={highlight}
        onAnswerSelected={onAnswerSelected}
      />
      <Continue />
      <p><Link to="/add">Add Author</Link></p>
      <Footer />
    </div>
  );
}

export default AuthorQuiz;
