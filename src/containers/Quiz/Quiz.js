import React from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz  from "../../components/FinishedQuiz/FinishedQuiz";

class Quiz extends React.Component {
    state={
        isFinished: true,
        activeQuestion: 0,
        answerState: null, // {id: "Success", "Error"}
        quiz: [
            {
                question: "Выберите хобби Арстана",
                rightAnswerId: 2,
                id: 1,
                answers: [
                    {text: 'Чтение книг',id: 1},
                    {text: 'Играть футбол',id: 2},
                    {text: 'пение',id: 3},
                    {text: 'другое',id: 4}
                ]
            },
            {
                question: "В каком университете он учится? ",
                rightAnswerId: 4,
                id: 2,
                answers: [
                    {text: 'KTMU',id: 1},
                    {text: 'Ala-Too',id: 2},
                    {text: 'IUOK',id: 3},
                    {text: 'AUCA',id: 4}
                ]
            }
        ]
    }

    onAnswerClickHandler = (answerId) => {

        if(this.state.answerState){
            const key = Object.keys(this.state.answerState)[0]
            if(this.state.answerState[key] === 'success'){
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion]

        if(question.rightAnswerId === answerId){

            this.setState({
                answerState: {[answerId]: "success"}
            })

            const timeout = setTimeout(() => {
                if(this.isQuizFinished()){
                    this.setState({
                        isFinished: true
                    })
                }else{
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1, answerState: null
                    })
                }

                window.clearTimeout(timeout)
            },1000)


        }else{
            this.setState({
                answerState: {[answerId]: "NoRight"}
            })
        }
    }

    isQuizFinished(){
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    render() {
        return(
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>

                    {this.state.isFinished ?
                    <FinishedQuiz/> :
                        <ActiveQuiz
                            answers ={this.state.quiz[this.state.activeQuestion].answers}
                            question = {this.state.quiz[this.state.activeQuestion].question}
                            onAnswerClick={this.onAnswerClickHandler}
                            quizLength={this.state.quiz.length}
                            answerNumber={this.state.activeQuestion + 1}
                            state={this.state.answerState}
                        />}

                </div>
            </div>
        )
    }
}

export default Quiz