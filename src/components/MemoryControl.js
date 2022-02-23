import React from 'react';
import NewMemoryForm from './NewMemoryForm';
import MemoryList from './MemoryList';
import MemoryDetail from './MemoryDetail';
import EditMemoryForm from './EditMemoryForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';

class MemoryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMemory: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedMemory != null) {
      this.setState({
        selectedMemory: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewMemoryToList = (newMemory) => {
    const { dispatch } = this.props;
    const action = a.addMemory(newMemory);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedMemory = (id) => {
    const selectedMemory = this.props.mainMemoryList[id];
    this.setState({selectedMemory: selectedMemory});
  }

  HandleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingMemoryInList =(memoryToEdit) => {
    const { dispatch } =this.props;
    const action = a.addMemory(memoryToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedMemory: null
    });
  }

  handleDeletingMemory = (id) => {
    const  { dispatch } = this.props;
    const action = a.deleteMemory(id);
    dispatch(action);
    this.setState({selectedMemory: null});
  }

  render() {
    let currentVisibleState = null;
    let buttonText = null;
    if( this.state.editing) {
      currentVisibleState = <EditMemoryForm memory = {this.state.selectedMemory} onEditMemory = {this.handleEditingMemoryInList} />
      buttonText = "Return to Memory List ( All memories)";
    } else if (this.state.selectedMemory != null) {
      currentVisibleState = <MemoryDetail
        memory = {this.state.selectedMemory}
        onClickingDelete = {this.handleDeletingMemory}
        onClickingEdit = {this.HandleEditClick} />
      buttonText = "Return to Memory List ( All memories)";
    } else if (this.props.formVisibleOnPage) {
      currentVisibleState = <NewMemoryForm onNewMemoryCreation = {this.handleAddingNewMemoryToList} />;
      buttonText = "Return to Memory List ( All memories)";
    } else {
      currentVisibleState = <MemoryList memoryList = {this.props.mainMemoryList} onMemorySelection = {this.handleChangingSelectedMemory} />;
      buttonText = " Add New Memory";
    }
    return (
      <React.Fragment>
        {currentVisibleState}
        <button className="btn shadow" onClick= {this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
  
}

MemoryControl.propTypes = {
  mainMemoryList :  PropTypes.object
};

const mapStateToProps = state => {
  return {
    mainMemoryList: state.mainMemoryList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

MemoryControl = connect(mapStateToProps)(MemoryControl);
export default MemoryControl;