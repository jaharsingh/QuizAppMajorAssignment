const quizData = [
    {
      question: 'What is the capital of France?',
      choices: ['Paris', 'London', 'Berlin', 'Madrid'],
      answer: 'Paris'
    },
    {
      question: 'What is the largest planet in our solar system?',
      choices: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
      answer: 'Jupiter'
    },
    {
      question: 'Who invented the telephone?',
      choices: ['Alexander Graham Bell', 'Thomas Edison', 'Nikola Tesla', 'Guglielmo Marconi'],
      answer: 'Alexander Graham Bell'
    }
  ];
  
  const questionEl = document.getElementById('question');
  const choicesEl = document.getElementById('choices');
  const submitBtn = document.getElementById('submit');
  const resultEl = document.getElementById('result');
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const quizItem = quizData[currentQuestion];
    questionEl.innerHTML = quizItem.question;
    choicesEl.innerHTML = quizItem.choices
      .map(choice => `<div class="choice" data-answer="${choice}">${choice}</div>`)
      .join('');
  }
  
  function selectAnswer(event) {
    const selectedChoice = event.target;
    const selectedAnswer = selectedChoice.dataset.answer;
    const quizItem = quizData[currentQuestion];
    
    if (selectedAnswer === quizItem.answer) {
      score++;
    }
    
    currentQuestion++;
    
    if (currentQuestion >= quizData.length) {
      showResult();
    } else {
      showQuestion();
    }
  }
  
  function showResult() {
    questionEl.innerHTML = '';
    choicesEl.innerHTML = '';
    submitBtn.style.display = 'none';
    
    resultEl.innerHTML = `You scored ${score} out of ${quizData.length}!`;
  }
  
  showQuestion();
  submitBtn.addEventListener('click', selectAnswer);

  