'use babel';

import StatusBarView from './status-bar-view';

export default {
  activate() {
    this.views = [];
  },

  consumeStatusBar(statusBar) {
    const view = new StatusBarView();
    this.views.push(view);
    statusBar.addRightTile({ item: view.getElement(), priority: 100 });
  }
};
