import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';
import { v4 } from 'uuid';

function NewMemoryForm(props) {
  function handleNewMemoryFormSubmission(e) {
    e.preventDefault();
    props.onNewMemoryCreation({
      title: e.target.title.value,
      description: e.target.description.value,
      date: e.target.date.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleNewMemoryFormSubmission}
      buttonText="Add" />
    </React.Fragment>
  );

}

NewMemoryForm.propTypes = {
  onNewMemoryCreation: PropTypes.func
};

export default NewMemoryForm;
