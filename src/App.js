// @flow

import React from 'react';
import './App.css';

type Item = {
  label: string,
  children: Array<Item>,
};

type NodeProps = {
  item: Item,
};

const item: Item = {
  label: 'root',
  children: [
    {
      label: 'parent 1',
      children: [
        {
          label: 'child 1',
          children: [],
        },
        {
          label: 'child 2',
          children: [],
        },
        {
          label: 'child 3',
          children: [],
        },
      ],
    },
    {
      label: 'parent 2',
      children: [
        {
          label: 'child',
          children: [],
        },
      ],
    },
    {
      label: 'child',
      children: [],
    },
  ],
};

class Node extends React.Component {
  props: NodeProps;

  get isLeaf(): boolean {
    return this.props.item.children.length === 0;
  }

  renderParent() {
    const body = (
      <p className="simple-card">
        {this.props.item.label}
      </p>
    );

    if (this.isLeaf) {
      return body;
    }

    return (
      <div className="hv-node-parent">
        {body}
      </div>
    );
  }

  renderChildren() {
    if (this.isLeaf) {
      return null;
    }

    return (
      <div className="hv-node-children">
        {this.props.item.children.map(i => (
          <div className="hv-node-child">
            <Node item={i} />
          </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="hv-node">
        {this.renderParent()}
        {this.renderChildren()}
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="hv-wrapper">
          <Node item={item} />
        </div>
      </div>
    );
  }
}

export default App;
