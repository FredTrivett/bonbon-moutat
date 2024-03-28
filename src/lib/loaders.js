export async function fetchQuizData() {
    let answer = await fetch('/lib/data/quiz-data.json');
    let data = await answer.json();
    return data;
}