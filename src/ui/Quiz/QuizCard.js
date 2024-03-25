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
            <div className="flex flex-col items-center justify-between relative h-full">
                <img src="/bg-gradiant.png" className="absolute z-0" alt="" />
                <div className="bg-indigo-400 w-full z-10 flex align-center justify-center p-6 rounded-b-[30px] flex-col">
                    <h2 className="font-light text-indigo-50 text-center">Le Quizz de Pompon</h2>
                    <h3 className="text-indigo-50 text-xl font-medium text-center"></h3>
                </div>
                <div className="px-6 z-10 flex flex-col h-full pt-6 pb-10">
                    <h4 className="text-center text-xl font-semibold">{score}</h4>

                </div>
                <div className={`${selectedOption ? 'bg-indigo-500' : 'bg-indigo-300'} z-10 w-full flex align-center justify-center p-6 rounded-t-[30px] flex-col`}>

                </div>
            </div>
        );
    }

    const currentQuestion = questions[currentQuestionIndex];

    if (showFeedback) {
        return <QuizAnswer id={currentQuestion.id} question={currentQuestion.question} feedback={feedbackMessage} onClose={handleNextQuestion} />;
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
