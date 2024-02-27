import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Result.css'


function Result({ trueAnswerCount, falseAnswerCount, selectedAnswer }) {
    let blankAnswer = 10 - trueAnswerCount - falseAnswerCount;

    const navigate = useNavigate();

    const showResult = () => {
        return selectedAnswer.map((userAnswer, index) => (
            <p key={index}>
                {userAnswer.isTrueAnswer ? "(D)" : "(Y)"} {index + 1}.  {userAnswer.answer}
            </p>
        ));
    }

    const handleAgainButton = () => {
        window.location = ("/");
    }

    return (
        <div className="container">
            < div className="result">
                <h2>TEST BİTTİ</h2>
                <button onClick={handleAgainButton}>Tekrar Dene</button>
                <div className="result-card">
                    <div className="result-data">

                        <h3>Sonuç:</h3>


                        <p> <span className='result-d'>Doğru</span> <span className='result-numbers'>{trueAnswerCount}</span>   </p>
                        <p><span className='result-d'>Yanlış </span> <span className='result-numbers'>{falseAnswerCount}</span> </p>
                        <p><span className='result-d'>Boş </span> <span className='result-numbers'>{blankAnswer}</span>  </p>

                    </div>
                    <div className='show-result'>
                        <h3>Sorulara Verdiğiniz Yanıtlar: </h3>
                        <span>{showResult()}</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Result