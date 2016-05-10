'use babel';

import StatusBarView from './status-bar-view';
import Registry from './registry';

export default {
  activate() {
    this.registry = new Registry();
    this.views = [];

    this.registry.on('begin', this.process.bind(this));
    this.registry.on('end', this.process.bind(this));
  },

  provideRegistry() {
    return this.registry;
  },

  process() {
    this.views.forEach(view => view.setTasks(this.registry._getTasks()));
  },

  consumeStatusBar(statusBar) {
    const view = new StatusBarView(statusBar);
    this.views.push(view);
  }
};
