import React, { useState, useEffect } from "react";
import Form from "./Components/Form";
import axios from "axios";
import * as yup from "yup";

//////////////// INITIAL STATES ////////////////

const initialFormValues = {
  username: "",
  email: "",
  password: "",
  terms: "",
};
const initialFormErrors = {
  username: "",
  email: "",
  password: "",
  terms: "",
};

const initialUsers = [];
const initialDisabled = true;


export default function App () {

//////////////// STATES ////////////////
  const [ users, setUsers ] = useState( initialUsers );
  const [ formValues, setFormValues ] = useState( initialFormValues );
  const [ errors, setErrors ] = useState( initialFormErrors );
  const [ disabled, setDisabled ] = useState( initialDisabled );

  //////////////// HELPERS ////////////////
  const getUsers = () => {

    axios // putting users in state
      .get( "https://reqres.in/api/users" ) 
      .then(( res ) => {
        setUsers( [ res.data, ...users ] );
      })
      .catch(( err ) => {
        console.log( err, "Hey dude, you messed up here!" );
      })
  };

  const postNewUser = newUser => {
    axios
      .get( "https://reqres.in/api/users", newUser ) // this always take on 2 args
      .then(( res ) => {
        setUsers( [ res.data, ...newUser ] );
      })
      .catch(( err ) => {
        console.log( err, "Ummmm, what are you doing?" ); 
      })
    setFormValues( initialFormValues );
  };

//////////////// EVENT HANDLERS ////////////////
  const inputChange = ( name, value ) => {

  }

  const formSubmit = () => {

  }

//////////////// SIDE EFFECTS ////////////////
  useEffect(() => {
    getUsers()
  }, [] );

  useEffect(() => {

  }, [] );

  return (
    <div className = "container">
      <header><h1>Apple N Oranges</h1></header>

      <Form
        values = { formValues }
        change = { onchange }
        submit = { formSubmit }
        disabled = { disabled }
        errors = { formErrors }
      />

      {
        users.map( user => {
          return (
            <User  key = { user.id }  details = { user } />      
          );
        })
      }
    </div>
  )




} // this is the end, pls dont delete Timmy