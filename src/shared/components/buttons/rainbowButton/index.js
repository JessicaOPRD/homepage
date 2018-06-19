import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";

import 'shared/components/buttons/rainbowButton/rainbowButton.css';

class RainbowButton extends Component {

  static propTypes = {
    label: PropTypes.string,
    route: PropTypes.string
  };

  componentDidUpdate(prevProps) {

  }

  componentDidMount() {

  }

  render() {

    // const { }

    // const { children, ...other } = this.props;
    //
    // console.log(children);
    // console.log(other);

    // delete other.options;

    if (this.props.route) {

      return (
        <Link to={{ pathname: this.props.route }} className="rainbowButton">{this.props.label}</Link>
      );
    }

    return (
      <a className="rainbowButton">{ this.props.label }</a>
    );
  }
}

export default RainbowButton;
