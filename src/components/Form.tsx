import {FC, FormEvent, useEffect, useState} from "react";
import styled from "styled-components";
import {useForm} from "../hooks/useForm.ts";
import {stateSetter} from "../hooks/useStateSetter.ts";
import {FormPropsType} from "../vite-env";
import {ShowPassword} from "./ShowPassword.tsx";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 10px;

  input {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid silver;
    display: block;
    font-size: 16px;

    &:focus {
      outline: 2px solid #53aacd;
    }


  }

  button {
    width: 200px;
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: deepskyblue;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s all ease;

    &:hover {
      background-color: #05a7de;
      transition: 0.3s all ease;
    }
    
    &:disabled {
      opacity: 0.5;
    }
  }
`

export const Form: FC<FormPropsType> = ({name, onSubmitHandler}) => {

    const [isShown, setShow] = useState<boolean>(true)

    const email = useForm({name: 'email'}, {
        maxLength: 25,
        minLength: 5
    })
    const password = useForm({name: 'password'}, {
        maxLength: 10,
        minLength: 3
    })
    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!email.value || !password.value){
            return
        }

        const submitter = onSubmitHandler()
        submitter({
             email: email.value,
            password: password.value
        })

        stateSetter(
            [{email: ''},
                {password: ''}],
            email.setState,
            password.setState
        )
    }

    useEffect(() => {
        password.requireField()
        email.requireField()
    }, [password.value, email.value])

    return (

        <StyledForm onSubmit={submitForm}>

            <div>
                <input
                    onChange={email.OnChangeValue}
                    onBlur={email.OnChangeBlurDirty}
                    name={'email'}
                    placeholder={`Enter ${email.name}`}
                    value={email.value}
                    type="email"
                />

            </div>
            <span style={{color: 'red'}}>{email.isDirty && email.errorFieldsMessage}</span>


            <div>
                <input
                    onChange={password.OnChangeValue}
                    onBlur={password.OnChangeBlurDirty}
                    name={'password'}
                    placeholder={`Enter ${password.name}`}
                    value={password.value}
                    type={isShown ? 'text' : 'password'}
                />

                <ShowPassword show={isShown} setVisibililty={setShow} />

            </div>
            <span style={{color: 'red'}}>{password.isDirty && password.errorFieldsMessage}</span>


            <div>
                <button
                    type={'submit'}
                    disabled={password.isFormDisabled || email.isFormDisabled}>
                    {name}
                </button>
            </div>

        </StyledForm>
    )
}