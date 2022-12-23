import React from "react";

import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/util/validators";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import useForm from "../../shared/hooks/form-hook";
import './PlaceForm.css'

const NewPlace = () =>{
    const [formState, InputHandler] = useForm({
        title: {
            value: '',
            isValid: false
        },
        description: {
            value: '',
            isValid: false
        },
        address:{
            value: '',
            isValid: false
        }}
        ,false)


    const newPlaceSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs)
    }

    return(
        <form className="place-form" onSubmit={newPlaceSubmitHandler}>
            <Input
                id='title'
                element='input'
                type='text'
                label='Title'
                validators={[VALIDATOR_REQUIRE()]}
                errorText='Please enter a valid text!'
                onInput={InputHandler}>
            </Input>
            <Input
                id='description'
                element='textarea'
                label='Description'
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText='Please enter a valid description (at least 5 characters).'
                onInput={InputHandler}>
            </Input>
            <Input
                id='address'
                element='input'
                label='Adress'
                validators={[VALIDATOR_REQUIRE()]}
                errorText='Please enter a valid adress .'
                onInput={InputHandler}>
            </Input>
            <Button type="submit" disabled={!formState.isValid}>POST SPOT</Button>
        </form>
    )
}

export default NewPlace;