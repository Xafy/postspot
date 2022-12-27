import React from "react";

import useForm from "../../shared/hooks/form-hook";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card"
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/util/validators";

import './Auth.css'

const Auth = () =>{
    const [formState, inputHandler] = useForm(
        { 
            username:{
                value:'',
                isValid : false
            },
            email:{
                value : '',
                isValid : false
            },
            password:{
                value : '',
                isValid : false
            }
        }
        , false)

        const authSubmitHandler = event =>{
            event.preventDefault();
            console.log(formState)
        }

    return(
        <Card className="authentication">
            <h2>Login required</h2>
        <form onSubmit={authSubmitHandler}>
            <Input
            id='usernsme'
            element='input'
            type='text'
            label='Username'
            errorText='Please Enter a valid username '
            onInput ={inputHandler}
            validators={[VALIDATOR_REQUIRE()]}/>
            <Input
            id='email'
            element='input'
            type='email'
            label ="E-Mail"
            placeholder='example@mail.com'
            errorText='Please Enter a valid '
            onInput ={inputHandler}
            validators={[VALIDATOR_EMAIL()]}/>            
            <Input
            id='password'
            element='input'
            type='password'
            label='Password'
            errorText='Please Enter a valid password'
            onInput ={inputHandler}
            validators={[VALIDATOR_MINLENGTH(6)]}/>
            <Button type="submit" disabled={!formState.isValid}>Register</Button>
        </form>
        <Button inverse onClick={switchModeHandler} >Switch to login</Button>
        </Card>

    )
};

export default Auth;