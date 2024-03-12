import { useLoaderData } from 'react-router-dom';
import QuizCard from '../ui/Quiz/QuizCard.jsx';
import { fetchQuizData } from '../lib/loaders.js';

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
