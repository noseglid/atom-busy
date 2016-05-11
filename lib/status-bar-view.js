'use babel';

export default class StatusBarView {

  constructor(statusBar) {
    this.statusBar = statusBar;
    this.elements = {
      root: document.createElement('div'),
      gear: document.createElement('span')
    };
    this.elements.root.classList.add('inline-block', 'busy');
    this.elements.gear.classList.add('icon-gear');

    this.elements.root.appendChild(this.elements.gear);

    this.tile = this.statusBar.addRightTile({ item: this.elements.root, priority: -1000 });
  }

  dispose() {
    this.tile.destroy();
    this.tooltip && this.tooltip.dispose();
  }

  setTasks(tasks) {
    if (tasks.length === 0) {
      this.setTooltip('Idle. How nice.');
      this.elements.gear.classList.remove('is-busy');
      return;
    }

    this.setTooltip(tasks.map(task => `\u23f1 ${task.description}`).join('<br />'));
    this.elements.gear.classList.add('is-busy');
  }

  setTooltip(title) {
    this.tooltip && this.tooltip.dispose();
    this.tooltip = atom.tooltips.add(this.elements.root, { title });
  }
}
