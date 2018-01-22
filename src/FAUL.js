import React from 'react';

// TODO: Might still need custom className addition
const faul = (props) => {
  return (
    <ul className="fa-ul">
      { props.children }
    </ul>
  );
};

export default faul;