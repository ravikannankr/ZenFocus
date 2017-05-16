import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ProgressBar, Intent } from '@blueprintjs/core';

export default class Goal extends Component {
  render() {
    const { title } = this.props;

    return (
      <div>
        <p className="text-center">
          <span>{title.toUpperCase()} </span>
          <span>1/4</span>
        </p>
        <ProgressBar
          intent={Intent.PRIMARY}
          value={0.28}
        />
      </div>
    );
  }
}

Goal.propTypes = {
  title: PropTypes.string.isRequired
};
