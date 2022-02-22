import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";


function EditMemoryForm (props) {
  const { memory} = props;

  function handleEditMemoryFormSubmission(event) {
    event.preventDefault();
    props.onEditMemory ({title: event.target.title.value, description: event.target.description.value, date: event.target.date.value, id: memory.id});
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