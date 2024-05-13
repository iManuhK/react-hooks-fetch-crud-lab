import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questionsList, setQuestions]=useState([])

  useEffect(()=>{
    fetch('http://localhost:4000/questions')
    .then(res=>res.json()
    .then(data=>setQuestions(data))) 
  },[])
    const questionItem = questionsList.map((question)=>(
        <QuestionItem 
          key={question.id}
          question = {question}
        />
    ))
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionItem}</ul>
    </section>
  );
}

export default QuestionList;
