var questionBank= [
    {
        question : 'aluminium',
        option : ['A','Al','Au','G'],
        answer : 'Al'
    },

    {
        question : 'argon',
        option : ['Ag','As','Ar','A'],
        answer : 'Ar'
    },

    {
        question : 'zwavel',
        option : ['S','Zw','Z','Za'],
        answer : 'S'
    },

    {
        question : 'zuurstof',
        option : ['Zu','Ox','Z','O'],
        answer : 'O'
    },

    {
        question : 'As',
        option : ['Argon','Arseen','Aluminius','Lithium'],
        answer : 'Arseen'
    },

    {
        question : 'Ba',
        option : ['Beryllium','Broom','Barium','Boor'],
        answer : 'Barium'
    },

    {
        question : 'Be',
        option : ['Barium','Fosfor','Fluor','Beryllium'],
        answer : 'Beryllium'
    },

    {
        question : 'Zn',
        option : ['Zilver','Zink','Goud','Neon'],
        answer : 'Zink'
    },

    {
        question : 'cadmium',
        option : ['Cd','Ca','Cm','R'],
        answer : 'Cd'
    },

    {
        question : 'Mg',
        option : ['Mangaan','Magnesium','Jood','Natrium'],
        answer : 'Magnesium'
    },

    {
        question : 'krypton',
        option : ['Kr','Hg','Cr','Y'],
        answer : 'Kr'
    },

    {
        question : 'Cl',
        option : ['Celycium','Chloor','Calium','Lood'],
        answer : 'Chloor'
    },

    {
        question : 'P',
        option : ['Fosfor','Platina','Xenon','Tin'],
        answer : 'Fosfor'
    },

    {
        question : 'K',
        option : ['Cadmium','Koper','Krypton','Kalium'],
        answer : 'Kalium'
    },

    {
        question : 'Br',
        option : ['Boor','Broom','Berylium','Barium'],
        answer : 'Broom'
    },

    {
        question : 'zilver',
        option : ['Zn','Hg','Ag','S'],
        answer : 'Ag'
    },

    {
        question : 'kobalt',
        option : ['Ko','K','Co','C'],
        answer : 'Co'
    },

    {
        question : 'Xe',
        option : ['Xenon','Neon','Stikstof','Nikkel'],
        answer : 'Xenon'
    },

    {
        question : 'Cu',
        option : ['Chloor','Calcium','Koper','Cadmium'],
        answer : 'Koper'
    },

    {
        question : 'ijzer',
        option : ['Ij','F','Iz','Fe'],
        answer : 'Fe'
    },

    {
        question : 'Mn',
        option : ['Mangaan','Magnesium','Platina','Nikkel'],
        answer : 'Mangaan'
    },

    {
        question : 'natrium',
        option : ['N','Nt','Na','E'],
        answer : 'Na'
    },

    {
        question : 'tin',
        option : ['Rn','T','Ti','Sn'],
        answer : 'Sn'
    },

    {
        question : 'Pb',
        option : ['Platina','Jood','Lood','Lithium'],
        answer : 'Lood'
    },

    {
        question : 'H',
        option : ['Waterstof','Helium','Ijzer','Goud'],
        answer : 'Waterstof'
    },

    {
        question : 'calcium',
        option : ['Ca','Cl','Ka','K'],
        answer : 'Ca'
    },

    {
        question : 'F',
        option : ['Fosfor','Ijzer','Zwavel','Fluor'],
        answer : 'Fluor'
    },

    {
        question : 'goud',
        option : ['Go','Au','Gl','Db'],
        answer : 'Au'
    },

    {
        question : 'Fe',
        option : ['Beryllium','Ijzer','Xenon','Zuurstof'],
        answer : 'Ijzer'
    },

    {
        question : 'I',
        option : ['Ijzer','Lood','Jood','Radon'],
        answer : 'Jood'
    },

    {
        question : 'Co',
        option : ['Kobalt','Chloor','Cadmium','Kalium'],
        answer : 'Kobalt'
    },

    {
        question : 'koolstof',
        option : ['H','O','Ko','C'],
        answer : 'C'
    },

    {
        question : 'Hg',
        option : ['Zilver','Ijzer','Zink','Kwik'],
        answer : 'Kwik'
    },

    {
        question : 'lithium',
        option : ['Li','Lt','Lh','Lu'],
        answer : 'Li'
    },

    
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= (i+1)+'. '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();
