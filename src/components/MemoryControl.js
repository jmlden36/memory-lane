import React from 'react';
import NewMemoryForm from './NewMemoryForm';
import MemoryList from './MemoryList';
import MemoryDetail from './MemoryDetail';
import EditMemoryForm from './EditMemoryForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';
import { withFirestore, isLoaded } from 'react-redux-firebase';

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

  handleAddingNewMemoryToList = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }

  handleChangingSelectedMemory = (id) => {
    this.props.firestore.get({collection: 'memories', doc: id}).then((memory) => {
      const firestoreMemory = {
        title: memory.get("title"),
        description: memory.get("description"),
        date: memory.get("date"),
        id: memory.id
      }
      this.setState({selectedMemory: firestoreMemory });
    });
  }

  HandleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingMemoryInList =() => {
    this.setState({
      editing: false,
      selectedMemory: null
    });
  }

  handleDeletingMemory = (id) => {
    this.props.firestore.delete({collection: 'memories', doc: id});
    this.setState({selectedMemory: null});
  }

  render(){
    console.log(this.props);
    const auth = this.props.firebase.auth();
    
    if (!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h1>Loading...</h1>
        </React.Fragment>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser == null)) {
      return (
        <React.Fragment>
          <h1>You must be signed in to access memories.</h1>
        </React.Fragment>
      )
    } 
    if ((isLoaded(auth)) && (auth.currentUser != null)) {
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
export default withFirestore(MemoryControl);