import React from 'react';
import { Button } from '../Shared/Button';

export const Card = (props) => {
  console.log(props.IconWidth)
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: 250,
        height: 300,
        margin: '20px 20px 100px 20px',
        background: `${props.bgColor}`,
      }}>
      <div
        style={{
          flexBasis: '80%',
          width: '100%'
        }}>
        <p style={styles.text}>{props.title}</p>
        <img
          style={{
            color: '#fff',
            paddingTop: 20,
            margin: '0 auto',
          }}
          src={props.icon}
          alt={props.alt}
        />
      </div>
      <div
        style={{
          flexBasis: '20%',
          background: '#fff',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Button>LEARN MORE</Button>
      </div>
    </div>
  )
}

const black = '#000000'
const styles = {
  icon: {
    width: 120,
    color: '#fff',
    padding: 20,
    boxShadow: `21px 21px  5px ${black}`,
  },
  text: {
    color: '#fff',
    textAlign: 'left',
    paddingLeft: 15,
    textShadow: '1px 1px 1px gray'
  }
}