import React, { Component } from 'react';

export default class NoteService extends Component {
static getNotes ()
{
 return JSON.parse(localStorage.getItem("notebook"));
}

static save(notes)
{
  let myJSON = JSON.stringify(notes);
  localStorage.setItem('notebook', myJSON);
}

static remove(notes, id)
{
  let index = notes.findIndex(function(notes) {
  return notes.id === id;
  });
  const newArray = [
    ...notes.slice(0, index),
    ...notes.slice(index + 1)
  ];
  notes = newArray;
  let myJSON = JSON.stringify(notes);
  localStorage.setItem('notebook', myJSON);
}

static edit(notes, id)
{
  let index = notes.findIndex(function(notes) {
    return notes.id === id;
    
  });

}

}
