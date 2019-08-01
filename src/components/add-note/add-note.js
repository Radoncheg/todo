import React, {Component} from 'react';
import './add-note.css';

export default class AddNote extends Component {
 
  render() {
    return(
        <div> 
        <input className="form-control inputAdd" placeholder="Введите id"        ref={el=>this.id=el} />
        <input className="form-control inputAdd" placeholder="Введите заголовок" ref={el=>this.title=el}/>
        <input type="date" className="form-control inputAdd" placeholder="Введите дату"      ref={el=>this.date=el}/>
        <textarea className="form-control inputAdd1" placeholder="Введите заметку"   ref={el=>this.content=el}/>
        <button className='btn btn-info buttonAdd2' onClick={this.saveMyForm.bind(this)}>Сохранить</button>
        </div>
        );
  }
  saveMyForm() {
  //функция в этом же конмоненте, чтобы иметь доступ к рефам
        const newNote={
          id:this.id.value,
          title:this.title.value,
          content:this.content.value,
          date:this.date.value
      };
  
    this.props.saveForm(newNote)
  }
}
