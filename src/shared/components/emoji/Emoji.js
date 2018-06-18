import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';

import isEqual from 'lodash/isEqual';
import isUndefined from 'lodash/isUndefined';
import twemoji from 'twemoji';

import 'shared/components/emoji/Emoji.css';

class Emoji extends Component {

  // static propTypes = {
  // 	children: PropTypes.node,
  // 	options: PropTypes.object,
  // }

  static propTypes = {
    hexCode: PropTypes.string,
    randomHexCodes: PropTypes.array
  };

  static defaultProps = {
    randomHexCodes: []
  }

  parse() {

    if (this.props.randomHexCodes.length > 0) {

      return this.getRandomByHexCode();
    }
    else {

      return this.getByHexCode(this.props.hexCode);
    }
  }

  getRandomByHexCode() {

    var arrayOfCodes = this.props.randomHexCodes;

    var randomIndex = Math.floor(Math.random() * arrayOfCodes.length);

    return this.getByHexCode(arrayOfCodes[randomIndex]);
  }

  getByHexCode(code) {

    // const node = ReactDOM.findDOMNode(this);

    // console.log(node);

    // twemoji.parse(node, this.props.options);

    var normalizedCode = code.toLowerCase();

    var utf16SurrogatePairs;

    if (code.indexOf('-') > 0) {

      utf16SurrogatePairs = code.split('-')
      .map(
        twemoji.convert.fromCodePoint
      ).join('');
    }
    else {

      utf16SurrogatePairs = twemoji.convert.fromCodePoint(normalizedCode);
    }

    return {
      __html: twemoji.parse(utf16SurrogatePairs)
    };
  }

  componentDidUpdate(prevProps) {

    if ( ! isEqual(this.props, prevProps)) {

      this.parse();
    }
  }

  componentDidMount() {

    this.parse();
  }

  render() {

    // const { }

    // const { children, ...other } = this.props;
    //
    // console.log(children);
    // console.log(other);

    // delete other.options;

    // return (
    //   <div {...other}>{children}</div>
    // );

    // Works
    return (
      <span dangerouslySetInnerHTML={ this.parse() }></span>
    );
  }
}

export default Emoji;
