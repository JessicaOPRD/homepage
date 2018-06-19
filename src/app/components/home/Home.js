import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Emoji from 'shared/components/emoji/Emoji';
import RainbowButton from 'shared/components/buttons/rainbowButton';

import logo from 'app/logo.svg';
import 'app/components/home/home.css';

// import './App.css';

class Home extends Component {
  render() {
    return (
      <div className="home">

        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <h1 className="title">Jessica&rsquo;s Inclusion Home Page</h1>
        </header>

        <RainbowButton label="Home" route="/home"></RainbowButton>
        <RainbowButton label="About" route="/about"></RainbowButton>

        <p>
          <Emoji randomHexCodes={[
            '1f468-1f3fb-200d-1f680',
            '1f468-1f3fc-200d-1f680',
            '1f468-1f3fd-200d-1f680',
            '1f468-1f3fe-200d-1f680',
            '1f468-1f3ff-200d-1f680',
            '1f469-1f3fb-200d-1f680',
            '1f469-1f3fc-200d-1f680',
            '1f469-1f3fd-200d-1f680',
            '1f469-1f3fe-200d-1f680',
            '1f469-1f3ff-200d-1f680'
          ]}></Emoji>
          <Emoji randomHexCodes={[
            '1f468-1f3fb-200d-1f3a4',
            '1f468-1f3fc-200d-1f3a4',
            '1f468-1f3fd-200d-1f3a4',
            '1f468-1f3fe-200d-1f3a4',
            '1f468-1f3ff-200d-1f3a4',
            '1f469-1f3fb-200d-1f3a4',
            '1f469-1f3fc-200d-1f3a4',
            '1f469-1f3fd-200d-1f3a4',
            '1f469-1f3fe-200d-1f3a4',
            '1f469-1f3ff-200d-1f3a4'
          ]}></Emoji>
          <Emoji randomHexCodes={[
            '1f9d9-1f3fb',
            '1f9d9-1f3fc',
            '1f9d9-1f3fd',
            '1f9d9-1f3fe',
            '1f9d9-1f3ff-200d-2642-fe0f',
            '1f9d9-1f3fb-200d-2640-fe0f',
            '1f9d9-1f3fc-200d-2640-fe0f',
            '1f9d9-1f3fd-200d-2640-fe0f',
            '1f9d9-1f3fe-200d-2640-fe0f',
            '1f9d9-1f3ff-200d-2640-fe0f'
          ]}></Emoji>
          <Emoji randomHexCodes={[
            '1f468-1f3fb-200d-1f4bb',
            '1f468-1f3fc-200d-1f4bb',
            '1f468-1f3fd-200d-1f4bb',
            '1f468-1f3fe-200d-1f4bb',
            '1f468-1f3ff-200d-1f4bb',
            '1f469-1f3fb-200d-1f4bb',
            '1f469-1f3fc-200d-1f4bb',
            '1f469-1f3fd-200d-1f4bb',
            '1f469-1f3fe-200d-1f4bb',
            '1f469-1f3ff-200d-1f4bb'
          ]}></Emoji>
          <Emoji randomHexCodes={[
            '1f9da-1f3fb-200d-2642-fe0f',
            '1f9da-1f3fc-200d-2642-fe0f',
            '1f9da-1f3fd-200d-2642-fe0f',
            '1f9da-1f3fe-200d-2642-fe0f',
            '1f9da-1f3ff-200d-2642-fe0f',
            '1f9da-1f3fb',
            '1f9da-1f3fc',
            '1f9da-1f3fd',
            '1f9da-1f3fe',
            '1f9da-1f3ff'
          ]}></Emoji>
          <Emoji randomHexCodes={[
            '1f9df-200d-2642-fe0f',
            '1f9df-200d-2640-fe0f'
          ]}></Emoji>
        </p>
      </div>
    );
  }
}

export default Home;
