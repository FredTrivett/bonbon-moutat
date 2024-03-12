import React, { useState, useEffect } from 'react';
import { fetchQuizData } from '../../lib/fetchQuizData'; // Adjust this path
import Button from './Button'; // Assuming this is the correct path

function QuizCard() {
    const [quizData, setQuizData] = useState({ questions: [] });

    useEffect(() => {
        const loadData = async () => {
            const data = await fetchQuizData();
            setQuizData(data);
        };

        loadData().catch(console.error);
    }, []);

    return (
        <div>
            {quizData.questions.map((question, index) => (
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
