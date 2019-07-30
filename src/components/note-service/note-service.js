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
  notes.splice(index, 1)
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
