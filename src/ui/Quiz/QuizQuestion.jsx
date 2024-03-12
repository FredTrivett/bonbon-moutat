import React, { useState } from 'react';

export default function QuizQuestion({ question, options, handleAnswer, id, handleValidation }) {
    // State to track the selected option
    const [selectedOption, setSelectedOption] = useState(null);

    // Handle selecting an option
    const selectOption = (index, score) => {
        setSelectedOption({ index, score });
    };

    return (
        <div className="flex flex-col items-center justify-between relative h-full">
            <img src="/bg-gradiant.png" className="absolute z-0" alt="" />
            <div className="bg-indigo-400 w-full z-10 flex align-center justify-center p-6 rounded-b-[30px] flex-col">
                <h2 className="font-light text-indigo-50 text-center">Le Quizz de Pompon</h2>
                <h3 className="text-indigo-50 text-xl font-medium text-center">Question {id}</h3>
            </div>
            <div className="px-6 z-10">
                <h4 className="text-center text-xl font-semibold">{question}</h4>
                <ul className="flex flex-col gap-3 pt-6">
                    {options.map((option, index) => (
                        <li key={index}>
                            <button
                                onClick={() => selectOption(index, option.score)}
                                className={`w-full rounded-full p-3 shadow-[0_0_50px_-30px_rgba(0,0,0,0.1)] ${selectedOption?.index === index ? 'bg-indigo-500 text-white' : 'bg-white text-indigo-900'
                                    }`}
                            >
                                {option.text}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div
                className={`${selectedOption ? 'bg-indigo-500' : 'bg-indigo-300'
                    } z-10 w-full flex align-center justify-center p-6 rounded-t-[30px] flex-col`}
            >
                <button
                    className="font-normal text-indigo-50 text-center w-full"
                    onClick={() => selectedOption && handleValidation(selectedOption.score)}
                    disabled={!selectedOption} // Disable button if no option is selected
                >
                    Valider
                </button>
            </div>

        </div>
    );
}
