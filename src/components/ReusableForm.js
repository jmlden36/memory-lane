import React from 'react';
import PropTypes from "prop-types";


function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <h1 className="text-center mb-4">Add a New Memory</h1>
        <div className="mb-3">
          <input className="form-control"
            type='text'
            name='title'
            placeholder='Title' autoFocus required/>
        </div><br/>
        <div className="mb-3">
          <input className="form-control"
            type='text'
            name='description'
            placeholder='Description' required/>
        </div><br/>
        <div className="mb-3">
          <input className="form-control"
            type='date'
            name='date'
            placeholder='Date' required/>
        </div><br/>
        <button className='btn' type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;