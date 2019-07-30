import React, {Component} from 'react';                    //подключаем react

import ActiveNote from '../active-note';
import NoteService from '../note-service';
import AddNote from '../add-note';
import SearchPanel from "../search-panel";

import './app.css';                           //стили и внешнее оформление

let note1 =
    {
        id: 1,
        author_id: 1,
        content: "Hello",
        title: "first",
        date: "2019-07-12"
    };

let note2 =
    {
        id: 2,
        author_id: 2,
        content: "world",
        title: "second",
        date: "2013-04-11"
    };

let note3 =
    {
        id: 3,
        author_id: 3,
        content: "qwerty",
        title: "qwerty",
        date: "2012-04-11"
    };

let notes = [note1, note2, note3];
localStorage.setItem("notebook",JSON.stringify(notes));



export default class App extends Component {



    state = {
        search: ''
    };
    state = {
        notes: NoteService.getNotes()
        //c помощью функции getNotes() берем массив из LocalStorage
    }


    onSearchChange = (search) => {
        this.setState({search});
    };

    searchItems(items, search) {
        if (search.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
        });
    }

    addNote() {
        //функция добавления новой записи в LocalStorage
        this.setState({addForm: 1});
        //форма для добавления новой записи если 1
    }

    removeNote(id) {
        //Функция удаления записи по id выбранного элемента
        NoteService.remove(this.state.notes, id);
        this.setState({notes: NoteService.getNotes()});
    }

    editNote(note) {
        //Функция редактирования записи
        //NoteService.edit(this.state.notes, id);
        //this.setState({notes:NoteService.getNotes()});
    }

    showItem(id) {
        //Функция которая показывает в свободном поле активную запись
        this.setState({
            active: id,
            addForm: 0
            //форма для добавления новой записи не появляется при 0
        });
    }

    saveForm(note) {
        //Функция сохранения записи в LocalStorage
        this.state.notes.push(note);
        NoteService.save(this.state.notes);
        this.setState({addForm: 0, notes: NoteService.getNotes()});
    }

    render() {
        let notes = this.state.notes
        //дальше мы вызываем переменную, которую должны сначала объявить
        if (!notes) {
            notes = [];
        }

        let activeNote = notes.find(note => note.id === this.state.active);
        //как в map перебираем объекты
        if (!activeNote) {
            //проверка на пустоту
            activeNote = [];
        }

        return (
            <div>
                <div className="topheader">
                    <div className="search-panel d-flex">
                        <SearchPanel
                            onSearchChange={this.onSearchChange}/>
                        <h1>the notebook</h1>
                    </div>
                </div>
                <div className="flex-container">
                    <div className="first">
                        {notes.map(note => (
                            <div className="field1" onClick={this.showItem.bind(this, note.id)
                            } key={note.id}>
                                <div className="field2">{note.title}</div>
                                <div>{note.data}</div>
                                <button type="button"
                                        className="btn btn-outline-secondary btn-sm float-right"
                                        onClick={this.editNote.bind(this)}>
                                    <i className="fa fa-pencil"></i>
                                </button>
                                <button type="button"
                                        className="btn btn-outline-secondary  btn-sm float-right"
                                        onClick={this.removeNote.bind(this, note.id)}>
                                    <i className="fa fa-trash-o"></i>
                                </button>
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
                <div className="basement">
                    <h5 className="basement">Copyright © all rights reserved 2019 by Radoncheg</h5>
                </div>
            </div>
        );
    }
}
