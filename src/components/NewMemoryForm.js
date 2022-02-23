import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';
import { useFirestore } from 'react-redux-firebase';

function NewMemoryForm(props) {

  const firestore = useFirestore();

  function addMemoryToFirestore(event) {
    event.preventDefault();
    props.onNewMemoryCreation();
    return firestore.collection('memories').add(
      {
        title: event.target.title.value,
        description: event.target.description.value,
        date: event.target.date.value,
      }
    );
  }

  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={addMemoryToFirestore}
      buttonText="Add" />
    </React.Fragment>
  );
}

NewMemoryForm.propTypes = {
  onNewMemoryCreation: PropTypes.func
};

export default NewMemoryForm;
