// importer le boutton
import Button from './Button.js';

function Quizz() {
    return (
        <>
    <div className="flex-col items-center justify-center h-fit w-full bg-indigo-400 p-4 rounded-b-3xl">
        <p className="flex justify-center">Le Quizz de Pompon </p>
        <h2 className="flex justify-center">Question 1</h2>
    </div>
    <h1 className=" flex justify-center mt-16 text-xl font-extrabold text-center px-8">As-tu déjà brosse tes dents pendant 4heures ?</h1>
    <ul>
        <Button/>
    </ul>
    </>
    )
  }
  
  export default Quizz;