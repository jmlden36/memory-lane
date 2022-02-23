import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';


function EditMemoryForm (props) {
  const firestore = useFirestore();
  const { memory} = props;

  function handleEditMemoryFormSubmission(event) {
    event.preventDefault();
  
    props.onEditMemory ();
    const propertiesToUpdate = {
      title: event.target.title.value, 
      description: event.target.description.value, 
      date: event.target.date.value, 
      id: memory.id
    }
    return firestore.update({collection: 'memories', doc: memory.id }, propertiesToUpdate)
  }

  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleEditMemoryFormSubmission}
      buttonText="Update the memory"/>
    </React.Fragment>
  );
}

EditMemoryForm.propTypes = {
  onEditMemory: PropTypes.func
};

export default EditMemoryForm;