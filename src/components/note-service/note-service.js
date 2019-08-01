import React, { Component } from 'react';

export default class NoteService extends Component {

 static getNotes ()
 {
   return JSON.parse(localStorage.getItem("notebook"));
 }

 static save(notes)
 {
   const myJSON = JSON.stringify(notes);
   localStorage.setItem('notebook', myJSON);
 }

 static remove(notes, id)
 {
   const index = notes.findIndex(notes => notes.id === id);
   const newArray = [
    ...notes.slice(0, index),
    ...notes.slice(index + 1)
   ];
   notes = newArray;
   const myJSON = JSON.stringify(notes);
   localStorage.setItem('notebook', myJSON);
 }

 static edit(notes, note)
 {
   const index = notes.findIndex(notes => notes.id === note.id);
   notes.splice(index, 1, note);
   const myJSON = JSON.stringify(notes);
   localStorage.setItem('notebook', myJSON);
   }

 }

