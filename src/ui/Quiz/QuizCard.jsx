import React, { useState } from 'react';
import QuizQuestion from './QuizQuestion'; // Adjust the import path as necessary

function QuizCard({ questions }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0); // Step 1: Initialize score state
    const [quizFinished, setQuizFinished] = useState(false); // Track if the quiz is finished

    const handleValidation = (selectedScore) => {
        // Update the score based on the selected option's score
        setScore(prevScore => prevScore + selectedScore); // Step 2: Update score

        // Check if this is the last question
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            // Mark the quiz as finished
            setQuizFinished(true);
        }
    };

    if (quizFinished) {
        // Step 3: Display final score
        return (
            <div className="score-display">
                <h2>Your Score: {score} / {questions.length}</h2>
                {/* You can add a button or link here to restart the quiz or go back to the main menu */}
            </div>
        );
    }

    const currentQuestion = questions[currentQuestionIndex];
    const options = Object.values(currentQuestion.responses).map(response => ({
        text: response.text,
        score: response.score, // Ensure this is a number
    }));

    return (
        <QuizQuestion
            key={currentQuestion.id} // Force component reset on question change
            question={currentQuestion.question}
            options={options}
            handleValidation={handleValidation}
            id={currentQuestion.id}
        />
    );
}

export default QuizCard;
