'use babel';

export default class StatusBarView {

  constructor(statusBar) {
    this.statusBar = statusBar;
    this.elements = {
      root: document.createElement('div'),
      gear: document.createElement('span')
    };
    this.elements.root.classList.add('inline-block', 'busy');
    this.elements.gear.classList.add('spin', 'icon-gear');

    this.elements.root.appendChild(this.elements.gear);
  }

  setTasks(tasks) {
    if (tasks.length === 0) {
      this.detach();
      return;
    }

    this.tooltip = atom.tooltips.add(this.elements.root, {
      title: tasks.map(task => task.description).join('<br />')
    });

    this.attach();
  }

  attach() {
    this.tile && this.tile.destroy();
    this.tile = this.statusBar.addRightTile({ item: this.elements.root, priority: -1000 });
  }

  detach() {
    this.tile && this.tile.destroy();
    this.tooltip && this.tooltip.dispose();
    this.tile = null;
  }
}
