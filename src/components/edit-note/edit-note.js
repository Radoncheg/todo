import React, {Component} from 'react';

export default class EditNote extends Component {

    render() {
        return (
            <div>
                <input readOnly className="form-control inputAdd" value={this.props.activeNote1.id}
                       ref={el => this.id = el}/>
                <input className="form-control inputAdd" defaultValue={this.props.activeNote1.title}
                       ref={el => this.title = el}/>
                <input className="form-control inputAdd" defaultValue={this.props.activeNote1.date}
                       ref={el => this.date = el}/>
                <textarea className="form-control inputAdd1" defaultValue={this.props.activeNote1.content}
                          ref={el => this.content = el}/>
                <button className='btn btn-info buttonAdd2' onClick={this.editMyForm.bind(this)}>Изменить</button>
            </div>
        );
    }

    editMyForm() {
        //функция в этом же конмоненте, чтобы иметь доступ к рефам
        const newNote = {
            id: this.id.value,
            title: this.title.value,
            content: this.content.value,
            date: this.date.value

        };
           this.props.editForm(newNote)
    }
}
