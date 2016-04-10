import {Button, Colors} from 'react-foundation';
import uuid from 'node-uuid';
import React from 'react';
import Note from './Note.jsx';

export default class Notes extends React.Component {

  constructor(props) {
    super(props);

    this.addNote = this.addNote.bind(this);
    this.editNote = this.editNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn Webpack'
        },
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Do laundry'
        }
      ]
    };
  }

  render() {
    const notes = this.state.notes;
    return (
      <div>
        <Button onClick={this.addNote}
                color={Colors.SECONDARY}
                isHollow>+</Button>
        <ul>{notes.map(note =>
          <li key={note.id}>
            <Note
              task={note.task}
              onEdit={(task) => this.editNote(note.id, task)}
              onDelete={(task) => this.deleteNote(note.id, task)}/>
          </li>
        )}</ul>
      </div>
    );
  }

  addNote() {
    this.setState({
      notes: [...this.state.notes, {
        id: uuid.v4(),
        task: 'New task'
      }]
    });
  };

  editNote(id, task) {
    if (!task.trim()) {
      return;
    }
    const notes = this.state.notes;
    notes
      .find(note => note.id === id)
      .task = task;
    this.setState({notes});
  };

  deleteNote(id, e) {
    e.stopPropagation();
    this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    });
  };
}