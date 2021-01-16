import React from "react";
import classes from './Auth.module.css'
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default class Auth extends React.Component {

    state = {
        isFormValid: false,
        formControls: {
            email: {
                value: "",
                type: 'email',
                label: 'Email',
                errorMessage: 'Введите корректный email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: "",
                type: 'password',
                label: 'Пароль',
                errorMessage: 'Введите корректный пароль',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minlength: 6
                }
            }
        }
    }


    registerHandler = () => {

    }

    loginHandler = () => {

    }

    submitHandler = (event) => {
        event.preventDefault()
    }

    validateControl(value, validation){
        if (!validation){
            return true
        }

        let isValid = true

        if(validation.required){
            isValid = value.trim() !== '' && isValid
        }
        if(validation.email){
            isValid = validateEmail(value) && isValid
        }
        if(validation.minLength){
            isValid = value.length <= validation.minLength && isValid
        }


        return isValid
    }

    onChangeHandler = (event, controlName) =>{
        // console.log(`${controlName}: `, event.target.value)

        const formControls = {...this.state.formControls}
        const control = {...formControls[controlName]}

        control.value = event.target.value
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)

        formControls[controlName] = control

        let isFormValid = true

        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid
        })

        this.setState({formControls, isFormValid})
    }

    renderInputs() {
        return  Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return(
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    shouldValidate={!!control.validation}
                    errorMessage={control.errorMessage}
                    onChange={event => this.onChangeHandler(event, controlName)}
                />
            )
        })
    }
    render() {
        return(
            <div className={classes.Auth}>
                <div>
                    <h1>Authorization</h1>

                    <form className={classes.AuthForm}
                          onSubmit={this.submitHandler}
                    >
                        {this.renderInputs()}

                        <div className={classes.AuthButton}>
                            <Button
                                type="success"
                                onClick={this.loginHandler}
                                disabled={!this.state.isFormValid}
                            >
                                Войти
                            </Button>

                            <Button
                                type="primary"
                                onClick={this.registerHandler}
                                disabled={!this.state.isFormValid}
                            >
                                Зарегистрироваться
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}