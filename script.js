const questions=[
    {
        question :"Which is the smallest (in area) of the following Union Territories ?",
        answers :[
            {text:"Chandigarh" , correct:false},
            {text:"Dadra and Nagar Haveli" , correct:true},
            {text:"Daman and Diu" , correct:false},
            {text:"Lakshadweep" , correct:false},
        ]
    },
    {
        question :"Which is the largest animal in the world ?",
        answers :[
            {text:"Shark" , correct:false},
            {text:"Blue Whale" , correct:true},
            {text:"Elephant" , correct:false},
            {text:"Giraffe" , correct:false},
        ]
    },
    {  
    question :"The Sundarbans or the Mangrove forests are found in ?",
        answers :[
            {text:"Kutch Peninsula" , correct:false},
            {text:"Western Ghats" , correct:false},
            {text:"Konkan Coast" , correct:false},
            {text:"Deltaic West Bengal" , correct:true},
        ]
    },
    {
    question :"On which river has the Hirakud Dam been built ?",
        answers :[
            {text:"Mahanadi" , correct:true},
            {text:"Godavari" , correct:false},
            {text:"Cauvery" , correct:false},
            {text:"Periyar" , correct:false},
        ]
    },
    {
        question :"The highest multipurpose dam built on the river Ravi is ?",
            answers :[
                {text:"Bhakra Nagal" , correct:false},
                {text:"Kahalgaon" , correct:false},
                {text:"Ranjit Sagar Dam" , correct:true},
                {text:"Rihand Dam" , correct:false},
            ]
        },
        {
            question :"The longest river is ?",
                answers :[
                    {text:"Nile" , correct:true},
                    {text:"Amazon" , correct:false},
                    {text:"Missisippi- Missouri" , correct:false},
                    {text:"Yangtze" , correct:false},
                ]
            }
];

const questionElement =document.getElementById("question");
const answerButtons =document.getElementById("answer-button");
const nextButton =document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;
let n=0;
 function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
 }
 function showQuestion()
 {
    n=0;
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo +". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer=>
        {
            const button= document.createElement("button");
            var chr = String.fromCharCode(97 + n);
            button.innerHTML= chr +") " +answer.text;
            n++;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if(answer.correct)
            {
                button.dataset.correct=answer.correct;
            }
            button.addEventListener("click" , selectAnswer);

        });
 }
 function resetState()
 {
    nextButton.style.display="none";
    while(answerButtons.firstChild)
    {
        answerButtons.removeChild(answerButtons.firstChild);
    }
 }
 function selectAnswer(e)
 {
    const selectedBtn=e.target;
    const isCorrect =selectedBtn.dataset.correct==="true";
    if(isCorrect)
    {
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>
        {
            if(button.dataset.correct==="true")
            {
                button.classList.add("correct");
            }
            button.disabled = true;
        });
        nextButton.style.display="block";

 }
 function showScore(){
     resetState();
     questionElement.innerHTML=`You scored ${score} out of ${questions.length}`;
     nextButton.innerHTML="Play Again";
     nextButton.style.display="block";
 }
 function  handleNextButton()
 {
    currentQuestionIndex++;
    if(currentQuestionIndex <questions.length)
    {
        showQuestion();
    }
    else{
        showScore();
    }
 }
 nextButton.addEventListener("click" , ()=>{
    if(currentQuestionIndex <questions.length)
    {
        handleNextButton();
    }
    else{
        startQuiz();
    }
 })
startQuiz();


 