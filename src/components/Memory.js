import React from 'react';
import PropTypes from "prop-types";

function Memory(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenMemoryClicked(props.id)}>
        <h3><strong>{props.title}</strong></h3>
        <h4>{props.description}</h4>
        <h4>{props.date}</h4>
      </div>
      <hr/>
    </React.Fragment>
  );
}

Memory.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  id: PropTypes.string
}

export default Memory;