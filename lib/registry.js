'use babel';

import EventEmitter from 'events';

export default class Registry extends EventEmitter {
  constructor() {
    super();
    this.tasks = [];
  }

  begin(id, description) {
    this.tasks.push({ id, description });
    this.emit('begin');
  }

  end(id) {
    const index = this.tasks.findIndex(task => task.id === id);
    if (-1 === index) {
      return;
    }

    this.tasks.splice(index, 1);
    this.emit('end');
  }

  _getTasks() {
    return this.tasks;
  }
}
