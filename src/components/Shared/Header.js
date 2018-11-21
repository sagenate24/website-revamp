import React from 'react'

export const Header = (props) => {
  return (
    <div style={styles.header}>
      <h1
        style={{
          color: `${props.color ? props.color : '#3A3A3A'}`,
          fontSize: '36px',
          fontWeight: '100',
          padding: 0,
          margin: 0,
        }}
      >{props.children}</h1>
      <div
        style={{
          width: '80px',
          height: '5px',
          background: `${props.bgColor ? props.bgColor : '#F03C3C'}`
        }}
      ></div>
    </div>
  );
}

const styles = {
  header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '100px 0 100px 0',
  }
}
