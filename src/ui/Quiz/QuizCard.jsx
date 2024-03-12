import React from 'react';
// import { fetchQuizData } from '../../lib/loader'; // Remove this if you're passing data as props
import Button from './Button'; // Verify the correct path

function QuizCard({ questions }) { // Assume questions are passed as props
    return (
        <div>
            {questions.map((question, index) => (
                <div key={question.id} className="question">
                    <h2>{`Question ${index + 1}: ${question.question}`}</h2>
                    <ul>
                        {Object.entries(question.responses).map(([key, response]) => (
                            <li key={key}>
                                <button>{response.text}</button>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default QuizCard;
