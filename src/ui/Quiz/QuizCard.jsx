import React, { useState } from 'react';
import QuizQuestion from './QuizQuestion';
import QuizAnswer from './QuizAnswer';

function QuizCard({ questions }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);
    const [showFeedback, setShowFeedback] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState("");

    const handleAnswerSelected = (selectedScore, feedback) => {
        if (selectedScore > 0) {
            setScore((prevScore) => prevScore + selectedScore);
        }
        setFeedbackMessage(selectedScore > 0 ? feedback.correct : feedback.incorrect);
        setShowFeedback(true);
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((currentIndex) => currentIndex + 1);
        } else {
            setQuizFinished(true);
        }
        setShowFeedback(false);
    };

    if (quizFinished) {
        return (
            <div className="score-display">
                <h2>Your Score: {score} / {questions.length}</h2>
            </div>
        );
    }

    const currentQuestion = questions[currentQuestionIndex];

    if (showFeedback) {
        return <QuizAnswer id={currentQuestion.id} feedback={feedbackMessage} onClose={handleNextQuestion} />;
    }

    return (
        <QuizQuestion
            question={currentQuestion.question}
            options={currentQuestion.responses}
            id={currentQuestion.id}
            onAnswerSelected={(selectedScore) => handleAnswerSelected(selectedScore, currentQuestion.feedback)}
        />
    );
}

export default QuizCard;
