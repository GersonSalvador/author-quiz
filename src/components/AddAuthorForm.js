import React from 'react';
import {Link} from 'react-router-dom'

export default function AddAuthorForm(match){
  return (
    <div>
      <h1>Add Author</h1>
      <p ><Link to="/">Go Back</Link></p>
    </div>
  )
}