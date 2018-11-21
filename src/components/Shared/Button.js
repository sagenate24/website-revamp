import React from 'react';

export const Button = (props) => {
  return (
    <div
      onClick={props.onClickEvent}
      style={{
        width: `${props.width ? props.width : '150px'}`,
        border: `2px solid ${props.bColor ? props.bColor : '#F03C3C'}`,
        background: '#fff',
        padding: '5px 8px 5px 8px',
      }}
    >
      <span style={styles.text}>{props.children}</span>
    </div>
  );
}

const styles = {
  text: {
    fontSize: '18px'
  }
}