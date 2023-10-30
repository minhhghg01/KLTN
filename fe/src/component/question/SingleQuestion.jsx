import useQuestionStore from "../../store/zustand";
import { useNavigate, useParams } from "react-router-dom";
// import TimeStamp from "../../components/TimeStamp/TimeStamp";
import { useEffect, useState } from "react";
import Question from "./Question";
import Default from "../../layout/Default";
import { Types, Level } from "../../constant";

function SingleQuestion() {
  const navigate = useNavigate();
  const {
    question: allQuestion,
    trueAction,
    falseAction,
    addAnswer,
    page,
    nextPage,
    resetQuestion
  } = useQuestionStore();

  const { id } = useParams();
  const { fetchQuestion, question: questionData } = useQuestionStore();
  const [type, setType] = useState(Types[0].id);
  const [level, setLevel] = useState(Level[0]);

//   useEffect(() => {
//     if(allQuestion.length < page) {
//         navigate('/question/1');
//         page = 1;
//         console.log('ma');
//     }

//     },[id, page]);
// resetQuestion();
useEffect(() => {
    console.log(page);
}, [])

  useEffect(() => {
    if (Number(id) < page) {
      navigate(`/question/${page}`);
    }
  }, [id]);

//   useEffect(() => {
//     const query = `amount=5&category=${type}&difficulty=${level}&type=multiple`;
//     fetchQuestion(`?${query}`)
//     console.log('mi');
//   }, [id]);

  console.log(allQuestion);
  const singleQuestion = allQuestion?.[id - 1];
  console.log(page);
  const { correct_answer } = singleQuestion;
  if(allQuestion.length < page) {resetQuestion();}
  const handleClick = (value) => {
    //Add answer
    addAnswer({ question: singleQuestion.question, answer: value });

    //Verify Answer
    if (value === correct_answer) {
      trueAction();
    } else {
      falseAction();
    }

    nextPage();

    navigate(
      page === allQuestion.length ? "/finish" : `/question/${Number(id) + 1}`
    );
  };

  return (
    <Default>
      <div className="flex max-w-fit flex-col ml-auto space-x-3 mb-10">
        {/* <TimeStamp /> */}
      </div>

      <Question
        id={page}
        handleClick={handleClick}
        singleQuestion={singleQuestion}
      />
    </Default>
  );
}

export default SingleQuestion;
