import React, { useState } from 'react';
import QuizQuestion from './QuizQuestion'; // Adjust the import path as necessary

function QuizCard({ questions }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    // Handle selecting an answer
    const handleAnswerSelect = (score) => {
        setSelectedAnswer(score);
    };

    // Move to the next question and handle scoring here if necessary
    const handleValidation = (score) => {
        // Example scoring logic or state update
        console.log(`Answer selected with score: ${score}`);

        // Reset selected answer for the next question
        setSelectedAnswer(null);

        // Move to the next question if there are more questions
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            // Handle quiz completion
            console.log("Quiz completed");
            // Reset or navigate to a results page, etc.
        }
    };

    const currentQuestion = questions[currentQuestionIndex];
    const options = Object.values(currentQuestion.responses).map((response) => ({
        text: response.text,
        score: response.score,
    }));

    return (
        <QuizQuestion
            key={currentQuestion.id} // Ensure this changes with each question
            question={currentQuestion.question}
            options={options}
            handleValidation={handleValidation}
            id={currentQuestion.id}
        />

    );
}

export default QuizCard;
