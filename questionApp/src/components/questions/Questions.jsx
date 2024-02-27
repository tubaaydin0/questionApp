

import React, { useState, useEffect } from 'react';
import { questions } from "../../api/questions.js";
import './Questions.css'
import Result from '../result/Result.jsx';
import queryMedia from '../../assets/images/index.js'


function Questions() {
    const [index, setIndex] = useState(0);
    const [query, setQuery] = useState(questions[index]);
    const [showOptions, setShowOptions] = useState(false)
    const [trueAnswerCount, setTrueAnswerCount] = useState(0)
    const [falseAnswerCount, setFalseAnswerCount] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState([])
    const [timer, setTimer] = useState(30)
    const [isFinish, setIsFinish] = useState(false);
    const [lockAnswer, setLockAnswer] = useState(false);




    //After 10 seconds the options appear on the screen.



    useEffect(() => {

        console.log(index)
        const timer = setTimeout(() => {
            setShowOptions(true);
        }, 10000);

        return () => clearTimeout(timer);
    }, [index]);

    //Moves to another question after 30 seconds.
    useEffect(() => {
        const answerTime = setInterval(() => {
            if (timer > 0) {
                setTimer(timer - 1)
            }

            if (timer == 0 && (index + 1) <= 10) {

                nextQuery();

            } else if (timer == 0) {
                setIsFinish(true)
            }
        }, 1000)

        return () => clearInterval(answerTime);
    }, [timer])




    const checkAnswer = (e) => {


        if (lockAnswer == false) {

            let answerLog = { answer: e.currentTarget.value, isTrueAnswer: false };

            if (query.answer === e.currentTarget.value) {
                e.target.classList.add("trueAnswer");
                answerLog.isTrueAnswer = true;
                setTrueAnswerCount(trueAnswerCount + 1);


            } else {
                e.target.classList.add("falseAnswer");
                answerLog.isTrueAnswer = false;
                setFalseAnswerCount(falseAnswerCount + 1);
            }

            setSelectedAnswer([...selectedAnswer, { ...answerLog, selectedOption: e.currentTarget.value }]);
        }
        setLockAnswer(true);


        setTimeout(nextQuery, 1000);
    }
    const nextQuery = () => {
        if (index + 1 < 10) {
            setQuery(questions[index + 1])
            setIndex(index + 1);

            setTimer(30);
            setLockAnswer(false)
            setShowOptions(false);

        } else {
            setIsFinish(true);

        }
    }

    return (
        <div className="container">

            {isFinish ? (
                <Result
                    trueAnswerCount={trueAnswerCount}
                    falseAnswerCount={falseAnswerCount}
                    selectedAnswer={selectedAnswer}
                    setIsFinish={setIsFinish} // Pass setIsFinish here
                    setIndex={setIndex}
                    setTrueAnswerCount={setTrueAnswerCount}
                    setFalseAnswerCount={setFalseAnswerCount}
                    setSelectedAnswer={setSelectedAnswer}
                    setTimer={setTimer}
                    setQuery={setQuery}
                />

            ) :
                (
                    <>

                        <div className="questions">
                            <div className="timer">{timer}</div>
                            <div className="question-card">
                                <img src={queryMedia[query.media]} alt="question-image" />
                                <div className='query'><span>{index + 1}/10- </span>{query.question}</div>
                                <div className='options'>
                                    {showOptions && (
                                        query.options.map((option, idx) => (
                                            <button onClick={lockAnswer ? null : checkAnswer} key={idx} value={option}>{option}</button>
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>


                    </>
                )

            }

        </div >
    )
}

export default Questions