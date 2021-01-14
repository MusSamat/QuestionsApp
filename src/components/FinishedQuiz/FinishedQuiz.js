import  React from 'react'
import classes from "./Finished.module.css"

const FinishedQuiz = (props) => {
    return(
        <div className={classes.FinishedQuiz}>
            <ul>
                <li>
                    <strong> 1. </strong>
                    Ne kylyp jatasyn
                    <i className={'fa fa-times ' + classes.success}/>
                </li>
                <li>
                    <strong> 2. </strong>
                    Ne kylyp jatasyn
                    <i className={'fa fa-check ' + classes.NoRight}/>
                </li>
            </ul>

            <p> Правильно 4 из 10 </p>
            <div>
                <button>Повторить</button>
            </div>
        </div>
    )
}

export default FinishedQuiz