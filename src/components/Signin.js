import React from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

function Signin() {
  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password).then(function () {
      alert("Successfully signed up!");
    }).catch(function (error) {
      alert(error.message);
    });
  }

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then(function () {
      alert("Successfully signed in!");
    }).catch(function (error) {
      alert(error.message);
    });
  }

  function doSignOut() {
    const auth = getAuth();
    signOut(auth).then(function() {
      alert("Successfully signed out!");
    }).catch(function(error) {
      alert(error.message);
    });
  }

  return (
    <React.Fragment>
    <h1>Sign up</h1>
    <form onSubmit={doSignUp}>
      <input
        type='text'
        name='email'
        placeholder='email' 
        className='form-control'/>
        <br />
      <input
        type='password'
        name='password'
        placeholder='Password' 
        className='form-control'/>
        <br />
      <button type='submit' className="btn btn-dark">Sign up</button>
    </form>
    <h1>Sign In</h1>
    <form onSubmit={doSignIn}>
      <input
        type='text'
        name='signinEmail'
        placeholder='email' 
        className='form-control'/>
        <br />
      <input
        type='password'
        name='signinPassword'
        placeholder='Password' 
        className='form-control'/>
        <br />
      <button type='submit' className="btn btn-dark">Sign In</button>
    </form>
    <br />
      <h1>Sign Out</h1>
      <button onClick={doSignOut} className="btn btn-dark">Sign out</button>
    <br />
  </React.Fragment>
  )
}

export default Signin;
