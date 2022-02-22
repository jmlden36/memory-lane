import React from "react";
import PropTypes from "prop-types";
import Memory from "./Memory";


function MemoryList(props) {
  return (
    <React.Fragment>
      <hr/>
      {Object.values(props.memoryList).map((memory) => {
        return < Memory 
          whenMemoryClicked = { props.onMemorySelection}
          title = {memory.title}
          description = {memory.description}
          date = {memory.date}
          id = {memory.id}
          key={memory.id} />
      })}
    </React.Fragment>
  );
}


MemoryList.propTypes = {
  memoryList : PropTypes.object,
  onMemorySelection: PropTypes.func
};


export default MemoryList;