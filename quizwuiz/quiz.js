

//Question bank
let questionBank = [
    {
        question: 'Eritrea, which became the 182nd member of the UN in 1993, is in the continent of',
        option: ['Asia', 'Africa', 'Europe', 'Australia'],
        answer: 'Africa'
    },
    {
        question: 'Garampani sanctuary is located at',
        option: ['Junagarh, Gujarat', 'Diphu, Assam', 'Kohima, Nagaland', 'Gangtok, Sikkim'],
        answer: 'Diphu, Assam'
    },
    {
        question: 'For which of the following disciplines is Nobel Prize awarded?',
        option: ['Physics and Chemistry', 'Physiology or Medicine', 'Literature, Peace and Economics', 'All of the above'],
        answer: 'All of the above'
    },
    {
        question: 'Hitler party which came into power in 1933 is known as',
        option: ['Labour Party', 'Nazi Party', 'Ku-Klux-Klan', 'Democratic Party'],
        answer: 'Nazi Party'
    },
    {
        question: 'First human heart transplant operation conducted by Dr. Christiaan Barnard on Louis Washkansky, was conducted in',
        option: ['1967', '1968', '1958', '1922'],
        answer: '1967'
    }
]

const question = document.getElementById('question');
const quizContainer = document.getElementById('quiz-container');
const scorecard = document.getElementById('scorecard');
const option0 = document.getElementById('option0');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const next = document.querySelector('.next');
const points = document.getElementById('score');
const span = document.querySelectorAll('span');
let i = 0;
let score = 0;


//Shuffle the option array
const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
};

//function to display questions
const displayQuestion = (questionBank) => {


    span.forEach(x => {
        x.style.background = 'none'
    })
    const optionarray = [...questionBank[i].incorrect_answers]
    optionarray.push(questionBank[i].correct_answer)  // inserting the correct answer in the array

    const shuffleOption = shuffle(optionarray) //shuffling the array


    question.innerHTML = 'Q.' + (i + 1) + ' ' + questionBank[i].question;
    option0.innerHTML = shuffleOption[0];
    option1.innerHTML = shuffleOption[1];
    option2.innerHTML = shuffleOption[2];
    option3.innerHTML = shuffleOption[3];
    stat.innerHTML = "Question" + ' ' + (i + 1) + ' ' + 'of' + ' ' + questionBank.length;


}
const currObj = {
    'name': localStorage.getItem('name'),
    'score': 0
}
//storing the users
const userinfo = localStorage.getItem('leaderboard')
const users = JSON.parse(userinfo); //string to JSON

//function to calculate scores
function calcScore(e) {
    if (e.innerHTML === questionBank[i].correct_answer && score < questionBank.length) {
        score = score + 1;
        currObj.score = score;
        document.getElementById(e.id).style.background = 'limegreen';
    }
    else {
        document.getElementById(e.id).style.background = 'tomato';
    }
    setTimeout(nextQuestion, 300);
}

//function to display next question
function nextQuestion() {
    if (i < questionBank.length - 1) {
        i = i + 1;
        displayQuestion(questionBank);
    }
    else {
        points.innerHTML = score + '/' + questionBank.length;
        quizContainer.style.display = 'none';
        scoreboard.style.display = 'block'
        users.push(currObj) //push current user into the leaderboard array
        const jsonarray = JSON.stringify(users) // stringify it to change it to string format for storing it in local storage
        localStorage.setItem('leaderboard', jsonarray) //seting the array as value for leaderboard key in local storage
    }
}

//click events to next button
next.addEventListener('click', nextQuestion);

//Back to Quiz button event
function backToQuiz() {

    localStorage.setItem('name', 0)
    window.location.href = "./index.html";
}

//function to check Answers
function checkAnswer() {
    const answerBank = document.getElementById('answerBank');
    const answers = document.getElementById('answers');
    answerBank.style.display = 'block';
    scoreboard.style.display = 'none';


    questionBank.forEach(x => {
        let list = document.createElement('li');
        list.innerHTML = x.correct_answer;
        answers.appendChild(list);
    })

    const lead = document.getElementById('LeaderBoard');
    const rawArray = localStorage.getItem('leaderboard') //getting the leaderboard array from localstorage
    const parsedArray = JSON.parse(rawArray); //converting it to JSON

    parsedArray.sort((a, b) => b.score - a.score); //sorting the leaderboard array

    //   console.log(parsedArray)
    parsedArray.forEach((x) => {
        lead.innerHTML += `<li>${x.name} -- ${x.score}</li>`

    })

    console.log(localStorage.getItem('leaderboard'))
}




//function to call questions api
const ques = () => {
    fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data)
            questionBank = []
            questionBank = [...data.results]

            // console.log(questionBank)
            displayQuestion(questionBank)
        })
}




ques();