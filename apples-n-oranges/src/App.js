import React, { useState, useEffect } from "react";
import Form from "./Components/Form";
import axios from "axios";
import * as yup from "yup";
import formSchema from "./Components/formSchema";
import User from "./Components/User";

//////////////// INITIAL STATES ////////////////

const initialFormValues = {
  username: "",
  email: "",
  password: "",
  terms: false,
};
const initialFormErrors = {
  username: "",
  email: "",
  password: "",
  terms: false,
};

const initialUsers = [];
const initialDisabled = true;


export default function App () {

//////////////// STATES ////////////////
  const [ users, setUsers ] = useState( initialUsers );
  const [ formValues, setFormValues ] = useState( initialFormValues );
  const [ formErrors, setFormErrors ] = useState( initialFormErrors );
  const [ disabled, setDisabled ] = useState( initialDisabled );

  //////////////// HELPERS ////////////////
  const getUsers = () => {
    axios // putting users in state
      .get( "https://reqres.in/api/users" ) 
      .then(( res ) => {
        setUsers( res.data.data );
      })
      .catch(( err ) => {
        console.log( err, "Hey dude, you messed up here!" );
      })
  };

  const postNewUser = newUser => {
    axios
      .post( "https://reqres.in/api/users", newUser ) // this always take on 2 args
      .then(( res ) => {
        setUsers( [ res.data, ...users ] );
      })
      .catch(( err ) => {
        console.log( err, "Ummmm, what are you doing?" ); 
      })
      .finally(() => {
        setFormValues( initialFormValues );
      })
  };

//////////////// EVENT HANDLERS ////////////////
  const inputChange = ( name, value ) => {
    yup
      .reach( formSchema, name )
      .validate( value )
      .then(() => {
        setFormErrors({ ...formErrors, [ name ]: "" })
      })
      .catch(( err ) => {
        setFormErrors({ ...formErrors,[ name ]: err.errors( 0 ) })
      })
    setFormValues({
      ...formValues, [ name ]: value // this is not an array Timmy!
    })
  };

  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password,
      terms: formValues.terms,
    };

  postNewUser( newUser );

  };

//////////////// SIDE EFFECTS ////////////////
  useEffect(() => {
    getUsers()
  }, [] );

  useEffect(() => {
    formSchema
      .isValid( formValues )
      .then( valid => {
        setDisabled( !valid )
      })
  }, [ formValues ] );

  return (
    <div className = "container">
      <header><h1>Apple N Oranges</h1></header>

      <Form
        values = { formValues }
        change = { inputChange }
        submit = { formSubmit }
        disabled = { disabled }
        errors = { formErrors }
      />

      {
        users.map( user => {
          return (
            <User key = { user.id }  details = { user } />      
          );
        })
      }
    </div>
  )

} // this is the end, pls dont delete Timmy