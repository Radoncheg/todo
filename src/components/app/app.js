import React, {Component} from 'react';

import ActiveNote from '../active-note';
import NoteService from '../note-service';
import AddNote from '../add-note';
import EditNote from '../edit-note';
import SearchPanel from "../search-panel";

import './app.css';
let notes = NoteService.getNotes();
localStorage.setItem("notebook",JSON.stringify(notes));

export default class App extends Component {

    state = {
      notes: NoteService.getNotes(),
        term: '',
     }

    addNote = () => {
        this.setState({
            addForm: 1,
            editForm: 0
        });
    }

    removeNote = (id) => {
        NoteService.remove(this.state.notes, id);
        this.setState({notes: NoteService.getNotes()});
    }

    editNote = (id) => {
        this.setState({
            active: id,
            addForm: 0,
            editForm: 1
        });
        this.setState({notes: NoteService.getNotes()});
    }

    showItem = (id) => {
        this.setState({
            active: id,
            addForm: 0,
            editForm: 0
        });
    }

    saveForm(note) {
        this.state.notes.push(note);
        NoteService.save(this.state.notes);
        this.setState({addForm: 0, notes: NoteService.getNotes()});
    }

    editForm(note) {
        NoteService.edit(this.state.notes, note);
        this.setState({
            addForm: 0,
            editForm: 0
        });
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
        let {notes, term} = this.state;
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
                        <div><i className="fa fa-search icons"/></div>
                        <SearchPanel
                            onSearchChange={this.onSearchChange}/>
                        <h1 className="Header">the notebook</h1>
                    </div>
                </div>
                <div className="todo-app flex-container">
                    <div className="first">
                        {visibleItems.map(note => (
                            <div className="field1" onClick={() => this.showItem(note.id)
                            } key={note.id}>
                                <div className="field2">{note.title}
                                </div>
                                <div>{note.date}
                                </div>
                                <i className="fa fa-pencil icons"
                                   onClick={(e) => {
                                       e.preventDefault();
                                       e.stopPropagation();
                                       this.editNote(note.id)

                                }}/>
                                <i className="fa fa-trash-o icons"
                                   onClick={() => this.removeNote(note.id)}/>
                            </div>
                        ))}
                        <div>
                            <button type="button"
                                    className='btn btn-info buttonAdd1'
                                    onClick={() => this.addNote()}>Добавить
                            </button>
                        </div>
                    </div>
                    <div className="second">
                        {this.state.active && !this.state.addForm && !this.state.editForm &&(
                            <ActiveNote activeNote1={activeNote}/>
                        )}

                        {!!this.state.addForm && (
                            <AddNote saveForm={this.saveForm.bind(this)}/>
                        )}

                            {!!this.state.editForm && (
                            <EditNote activeNote1={activeNote} editForm={this.editForm.bind(this)}/>
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
