import React, { Component } from 'react';

import { withLogView } from '@wirelineio/appkit';

import ProsemirrorPad from './ProsemirrorPad';

import { view } from './defs';

class Pad extends Component {

  render() {
    const { itemId, appendChange, logs } = this.props;

    return <ProsemirrorPad itemId={itemId} appendChange={appendChange} logs={logs} />;
  }
}

export default withLogView({ view })(Pad);
