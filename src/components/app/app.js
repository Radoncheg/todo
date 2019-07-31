import React, {Component} from 'react';

import ActiveNote from '../active-note';
import NoteService from '../note-service';
import AddNote from '../add-note';
import SearchPanel from "../search-panel";

import './app.css';

export default class App extends Component {

    state = {
        notes: NoteService.getNotes(),
        term: ''
     }

    addNote() {
        this.setState({addForm: 1});
    }

    removeNote(id) {
        NoteService.remove(this.state.notes, id);
        this.setState({notes: NoteService.getNotes()});
    }

    editNote(note) {
    }

    showItem(id) {
        this.setState({
            active: id,
            addForm: 0
        });
    }

    saveForm(note) {
        this.state.notes.push(note);
        NoteService.save(this.state.notes);
        this.setState({addForm: 0, notes: NoteService.getNotes()});
    }

    onSearchChange = (term) => {
        this.setState({term});
    }

    search(notes, term) {
        if (term.length===0) {
            return notes;
        }
        return notes.filter((note)=> {
            return note.title
                .toLowerCase()
                .indexOf(term.toLowerCase()) > -1;
        });
    }

    render() {
        const {notes, term} = this.state;
        if (!notes) {
            notes = [];
        }
        const visibleItems = this.search(notes, term);
        let activeNote = notes.find(note => note.id === this.state.active);
        if (!activeNote) {
            activeNote = [];
        }
        return (
            <div className="todo-app">
                <div className="topHeader todo-app">
                    <div className="search-panel d-flex">

                        <SearchPanel
                            onSearchChange={this.onSearchChange}/>
                        <h1 className="Header">the notebook</h1>
                    </div>
                </div>
                <div className="todo-app flex-container">
                    <div className="first">
                        {visibleItems.map(note => (
                            <div className="field1" onClick={this.showItem.bind(this, note.id)
                            } key={note.id}>
                                <div className="field2">{note.title}
                                </div>
                                <div>{note.data}
                                </div>
                                <i className="fa fa-pencil icons" onClick={this.editNote.bind(this)}/>
                                <i className="fa fa-trash-o icons" onClick={this.removeNote.bind(this, note.id)}/>
                            </div>
                        ))}
                        <div>
                            <button type="button"
                                    className='btn btn-info buttonAdd1'
                                    onClick={this.addNote.bind(this)}>Добавить
                            </button>
                        </div>
                    </div>
                    <div className="second">
                        {this.state.active && !this.state.addForm && (
                            <ActiveNote activeNote1={activeNote}/>
                        )}

                        {!!this.state.addForm && (
                            <AddNote saveForm={this.saveForm.bind(this)}/>
                        )}
                    </div>
                </div>
                <div className="basement todo-app">
                    Copyright © all rights reserved 2019 by Radoncheg
                </div>
            </div>
        );
    }
}
