import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';
import MarkTwain from './images/marktwain.jpg';
import JKRowling from './images/jkrowling.jpg';
import JosephConrad from './images/josephconrad.jpg'
import {shuffle, sample} from 'underscore';
import AddAuthorForm from './components/AddAuthorForm';

const authors = [
  {
    name: 'Mark Twain',
    imageUrl: MarkTwain,
    imageSource: 'Wikimedia Commons',
    books: [
      'The Adventures of Huckleberry Finn',
      'Life on the Mississippi',
      'Roughing It'
    ]
  },
  {
    name: 'J.K. Rowling',
    imageUrl: JKRowling,
    imageSource: 'Wikimedia Commons',
    books: [
      'Harry Potter and the Sorcerers Stone'
    ]
  },
  {
    name: 'Joseph Conrad',
    imageUrl: JosephConrad,
    imageSource: 'Wikimedia Commons',
    books: [
      'Heart of Darkness'
    ]
  },
]



function getTurnData(authors){
  const allBooks = authors.reduce((p,c,i) => p.concat(c.books), [])
  const fourRandomBooks = shuffle(allBooks).slice(0,4)
  const answer = sample(fourRandomBooks);
  console.log(authors,answer,authors.find(title => title === answer))
  return {
    books: fourRandomBooks,
    author: authors.find(title => {return title.books.some(i => i === answer) })
  }
}

const state = {
  turnData: getTurnData(authors),
  highlight: ''
}

function onAnswerSelected(answer){
  const isCorrect = state.turnData.author.books.some(book => book === answer)
  state.highlight = isCorrect ? 'correct' : 'wrong'
  render();
}

function App(){
  return (
    <AuthorQuiz {...state} onAnswerSelected={onAnswerSelected}/>
  )
}

function render(){
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <React.Fragment>
          <Route exact path="/" component={App} />
          <Route path="/add" component={AddAuthorForm} />
        </React.Fragment>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')

  );
}
render();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
