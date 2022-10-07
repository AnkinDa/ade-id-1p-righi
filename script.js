const contentControlDiv = document.querySelector(".rules-control"),
      ButtonA = document.querySelector(".ca"),
      ButtonB = document.querySelector(".cb"),
      ButtonC = document.querySelector(".cc"),
      ContentA = document.querySelector(".a"),
      ContentB = document.querySelector(".b"),
      ContentC = document.querySelector(".c");


ButtonA.addEventListener('click', () => {
    ContentA.classList.replace("hide","show");
    ContentB.classList.replace("show","hide");
    ContentC.classList.replace("show","hide");
})

ButtonB.addEventListener('click', () => {
    ContentA.classList.replace("show","hide");
    ContentB.classList.replace("hide","show");
    ContentC.classList.replace("show","hide");
})

ButtonC.addEventListener('click', () => {
    ContentA.classList.replace("show","hide");
    ContentB.classList.replace("show","hide");
    ContentC.classList.replace("hide","show");
})

// buttonRuleVRC.addEventListener('click', () => {
//     rulesContainer.classList.remove("active");
//     buttonRuleVRC.classList.add("active");
//     buttonRuleDs.classList.remove("active");
// });

// buttonRuleDs.addEventListener('click', () => {
//     rulesContainer.classList.add("active");
//     buttonRuleVRC.classList.remove("active");
//     buttonRuleDs.classList.add("active");
// });