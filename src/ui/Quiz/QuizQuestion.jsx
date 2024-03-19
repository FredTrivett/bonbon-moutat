import React, { useState, useEffect } from 'react';

export default function QuizQuestion({ question, options, id, onAnswerSelected }) {
    const [selectedOption, setSelectedOption] = useState(null);
    const [shuffledOptions, setShuffledOptions] = useState([]);

    useEffect(() => {
        // Function to shuffle options
        const shuffleOptions = (options) => {
            const entries = Object.entries(options);
            for (let i = entries.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [entries[i], entries[j]] = [entries[j], entries[i]];
            }
            return entries;
        };

        setShuffledOptions(shuffleOptions(options));
    }, [options, question]); // Re-shuffle when question changes

    const selectOption = (score, index) => {
        setSelectedOption({ score, index });
    };

    const handleButtonClick = () => {
        if (selectedOption !== null) {
            onAnswerSelected(selectedOption.score);
        }
    };

    return (
        <div className="flex flex-col items-center justify-between relative h-full">
            <img src="/bg-gradiant.png" className="absolute z-0" alt="" />
            <div className="bg-indigo-400 w-full z-10 flex align-center justify-center p-6 rounded-b-[30px] flex-col">
                <h2 className="font-light text-indigo-50 text-center">Le Quizz de Pompon</h2>
                <h3 className="text-indigo-50 text-xl font-medium text-center">Question {id}</h3>
            </div>
            <div className="px-6 z-10 flex flex-col h-full pt-6 pb-10">
                <h4 className="text-center text-xl font-semibold">{question}</h4>
                <ul className="flex flex-col gap-3 pt-6">
                    {shuffledOptions.map(([key, { text, score }], index) => (
                        <li key={key}>
                            <button
                                onClick={() => selectOption(score, index)}
                                className={`w-full rounded-full p-3 shadow-[0_0_50px_-30px_rgba(0,0,0,0.1)] ${selectedOption?.index === index ? 'bg-indigo-500 text-white' : 'bg-white text-indigo-900'}`}>
                                {text}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={`${selectedOption ? 'bg-indigo-500' : 'bg-indigo-300'} z-10 w-full flex align-center justify-center p-6 rounded-t-[30px] flex-col`}>
                <button
                    className="font-normal text-indigo-50 text-center w-full"
                    onClick={handleButtonClick}
                    disabled={selectedOption === null}>
                    Valider
                </button>
            </div>
        </div>
    );
}
