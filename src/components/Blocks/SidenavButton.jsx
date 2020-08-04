import React from 'react';

const SidenavButton = (props) => {
  return <button onClick={props.addBlock}>{props.buttonName}</button>;
};

export default SidenavButton;
