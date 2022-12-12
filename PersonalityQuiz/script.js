var pandaScore = 0; 
var grizzScore = 0;
var iceScore = 0;

var questionCount = 0; 

var result = document.getElementById("result");
var restart = document.getElementById("restart");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");

restart.addEventListener("click", restartQuiz);

q1a1.addEventListener("click", panda);
q1a2.addEventListener("click", grizz);
q1a3.addEventListener("click", ice);


q2a1.addEventListener("click", panda);
q2a2.addEventListener("click", grizz);
q2a3.addEventListener("click", ice);

q3a1.addEventListener("click", panda);
q3a2.addEventListener("click", grizz);
q3a3.addEventListener("click", ice);

function restartQuiz() {
  result.innerHTML = "You are...";
  questionCount = 0;
  pandaScore = 0;
  grizzScore = 0;
  iceScore = 0;
  console.log("questionCount = " + questionCount + "\t" + "pandaScore = " + pandaScore + "\t" + "grizzScore = " + grizzScore + "\t" + "iceScore = " + iceScore);
  enableQuestions();
}

function panda() {
  pandaScore += 1; 
  questionCount += 1;

  console.log("questionCount = " + questionCount + "\t" + "pandaScore = " + pandaScore);

  if (questionCount == 3) {
    console.log("Quiz Completed")
    updateResult();
  }

}

function grizz() {
  grizzScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "\t" + "grizzScore = " + grizzScore);

  if (questionCount == 3) {
    console.log("Quiz Completed")
    updateResult();
  }

}

function ice() {
  iceScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "\t" + "iceScore = " + iceScore);

  if (questionCount == 3) {
    console.log("Quiz Completed")
    updateResult();
  }
}

function updateResult() {
  if (pandaScore >= 2) {
    result.innerHTML = "You are Panda Bear: You’re Pan Pan, the drama queen! You’re very outgoing, creative, bubbly, and caring, but you can also be sensitive and a bit of a scaredy-bear. Even though you can get upset easily, you love the people around you and will do anything for them with your assertive nature. You’re usually seen with your phone, whether you’re watching anime/K-dramas, playing video games, or taking selfies.";
    console.log("You are Panda Bear: You’re Pan Pan, the drama queen! You’re very outgoing, creative, bubbly, and caring, but you can also be sensitive and a bit of a scaredy-bear. Even though you can get upset easily, you love the people around you and will do anything for them with your assertive nature. You’re usually seen with your phone, whether you’re watching anime/K-dramas, playing video games, or taking selfies.")
  } else if (grizzScore >= 2) {
    result.innerHTML = "You are Grizzly Bear: You’re Grizz, the leader. You are always setting a good example for others, and you’re sociable and friendly. Despite the childish nature you put on for good fun, you are also very mature and have a lot of knowledge to guide and protect your loved ones with. You also tend to get emotional (occasional mood swings!), and develop sentimental attachments to some memories, people, or places.";
    console.log("You are Grizzly Bear: You’re Grizz, the leader. You are always setting a good example for others, and you’re sociable and friendly. Despite the childish nature you put on for good fun, you are also very mature and have a lot of knowledge to guide and protect your loved ones with. You also tend to get emotional (occasional mood swings!), and develop sentimental attachments to some memories, people, or places.")
  } else if (iceScore >= 2) {
    result.innerHTML = "You are Ice Bear: You’re Ice Bear, the cool one. You’re strong, clever, mature, and extremely responsible. Your loved ones can always count on you to rescue them from a life-or-death situation or do the dishes! You’re also not a big talker, but that doesn’t make you unfriendly. You always pay close attention to your surroundings and care deeply about your family. You are reserved, stoic, and introverted, and you appreciate spending alone time.";
    console.log("You are Ice Bear: You’re Ice Bear, the cool one. You’re strong, clever, mature, and extremely responsible. Your loved ones can always count on you to rescue them from a life-or-death situation or do the dishes! You’re also not a big talker, but that doesn’t make you unfriendly. You always pay close attention to your surroundings and care deeply about your family. You are reserved, stoic, and introverted, and you appreciate spending alone time.")
  } else if (pandaScore == 1 && grizzScore == 1 && iceScore == 1) {
    result.innerHTML = "Wow you're a special one! It appears you are a mix of the bears: bubbly and chaotic like Pan Pan, confident and social like Grizz, and clever and cool like Ice.";
    console.log("Wow you're a special one! It appears you are a mix of the bears: bubbly and chaotic like Pan Pan, confident and social like Grizz, and clever and cool like Ice.");
  }
}

q1a1.addEventListener("click", disableQ1);
q1a2.addEventListener("click", disableQ1);
q1a3.addEventListener("click", disableQ1);

q2a1.addEventListener("click", disableQ2);
q2a2.addEventListener("click", disableQ2);
q2a3.addEventListener("click", disableQ2);

q3a1.addEventListener("click", disableQ3);
q3a2.addEventListener("click", disableQ3);
q3a3.addEventListener("click", disableQ3);


function disableQ1() {
  q1a1.disabled = true; 
  q1a2.disabled = true; 
  q1a3.disabled = true;
}

function disableQ2() {
  q2a1.disabled = true; 
  q2a2.disabled = true; 
  q2a3.disabled = true;
}

function disableQ3() {
  q3a1.disabled = true; 
  q3a2.disabled = true; 
  q3a3.disabled = true;
}


function enableQuestions(){
  q1a1.disabled = false; 
  q1a2.disabled = false; 
  q1a3.disabled = false; 
  q2a1.disabled = false; 
  q2a2.disabled = false;
  q2a3.disabled = false; 
  q3a1.disabled = false; 
  q3a2.disabled = false;
  q3a3.disabled = false; 
}




