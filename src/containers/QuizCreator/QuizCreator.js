import React from "react";
import classes from './QuizCreator.module.css'
import Button from "../../components/UI/Button/Button";

export default class QuizCreator extends React.Component {

    state = {
        quiz: [],
        formControls: {
            question: '',
            option1: '',
            option2: '',
            option3: '',
            option4: '',
        }
    }



    submitHandler = event => {
        event.preventDefault()
    }

    addQuestionHandler = () => {

    }

    createQuizHandler = () => {

    }
    render() {
        return(
            <div className={classes.QuizCreator}>
                <div>
                    <h1>Создание теста</h1>

                    <form onSubmit={this.submitHandler}>

                          <input type="text"/>
                          <hr/>
                          <input type="text"/>
                          <input type="text"/>
                          <input type="text"/>
                          <input type="text"/>




                        <select></select>

                        <div className={classes.QuizButton}>

                            <Button
                                type="primary"
                                onClick={this.addQuestionHandler}
                            >
                                Добавить вопрос
                            </Button>

                            <Button
                                type="success"
                                onClick={this.createQuizHandler }
                            >
                                Создать тест
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}