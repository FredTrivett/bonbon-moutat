import { useLoaderData } from 'react-router-dom';
import QuizCard from '../ui/Quiz/QuizCard.jsx';
import { fetchQuizData } from '../lib/loaders.js'; // Correctly import fetchQuizData

export async function loader() {
    let QuizData = await fetchQuizData();
    return QuizData;
}

export default function Quiz() {
    const data = useLoaderData();

    return (
        <>
            <QuizCard {...data} />
        </>
    );
}
