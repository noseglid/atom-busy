'use babel';

export default class StatusBarView {
  constructor() {
    this.elements = {
      root: document.createElement('div'),
      gear: document.createElement('span')
    };
    this.elements.root.classList.add('inline-block', 'busy');
    this.elements.gear.classList.add('spin', 'icon-gear');

    this.elements.root.appendChild(this.elements.gear);
  }

  getElement() {
    return this.elements.root;
  }
}
