import React, { Component } from 'react';
import * as water from '../../Images/water.jpg';
import * as avatar from '../../Images/avatar.JPG';
import downArrow from '../../Images/downArrow.svg'
import { Parallax, Background } from 'react-parallax';

class IntroLanding extends Component {
  componentDidMount() {
    console.log(window.innerHeight);
  }
  render() {
    return (
      <div style={{ backgroundColor: '#46A5E1' }}>
        <Parallax strength={300}>
          <div style={styles.meContainer}>
            <img style={styles.avatar} src={avatar} />
            <p style={styles.name}>Front End Developer</p>
            <div style={styles.dropDownContainer}>
              <img style={styles.downArrow} src={downArrow} alt='down arrow' />
            </div>
          </div>
          <Background className="custom-bg">
            <img style={styles.img} src={water} alt="fill murray" />
          </Background>
        </Parallax>
      </div>
    );
  }
}

const styles = {
  img: {
    height: window.innerHeight + 200,
    opacity: 0.3,
  },
  meContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: window.innerHeight,
    overflow: 'hidden'
  },
  avatar: {
    width: 125,
    borderRadius: 100,
    border: '3px solid #fff',
  },
  name: {
    color: '#fff',
    fontSize: '24px',
    textShadow: '1px 1px 1px #000'
  },
  dropDownContainer: {
    position: 'absolute',
    left: 'auto',
    right: 'auto',
    bottom: 10,
    display: 'flex',
    justifyContent: 'center',
  },
  downArrow: {
    width: '25px',
  },
  downArrowText: {
    marginLeft: 10,
    color: '#fff',
  }
}

export default IntroLanding;
