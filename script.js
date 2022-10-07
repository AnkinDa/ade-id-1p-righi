const contentControlDiv = document.querySelector(".rules-control"),
      ButtonA = document.querySelector(".ca"),
      ButtonB = document.querySelector(".cb"),
      ButtonC = document.querySelector(".cc"),
      ButtonD = document.querySelector(".cd"),
      ButtonE = document.querySelector(".ce"),
      ContentA = document.querySelector(".a"),
      ContentB = document.querySelector(".b"),
      ContentC = document.querySelector(".c"),
      ContentD = document.querySelector(".d"),
      ContentE = document.querySelector(".e");


ButtonA.addEventListener('click', () => {
    ContentA.classList.replace("hide","show");
    ContentB.classList.replace("show","hide");
    ContentC.classList.replace("show","hide");
    ContentD.classList.replace("show","hide");
    ContentE.classList.replace("show","hide");
})

ButtonB.addEventListener('click', () => {
    ContentA.classList.replace("show","hide");
    ContentB.classList.replace("hide","show");
    ContentC.classList.replace("show","hide");
    ContentD.classList.replace("show","hide");
    ContentE.classList.replace("show","hide");
})

ButtonC.addEventListener('click', () => {
    ContentA.classList.replace("show","hide");
    ContentB.classList.replace("show","hide");
    ContentC.classList.replace("hide","show");
    ContentD.classList.replace("show","hide");
    ContentE.classList.replace("show","hide");
})

ButtonD.addEventListener('click', () => {
    ContentA.classList.replace("show","hide");
    ContentB.classList.replace("show","hide");
    ContentC.classList.replace("show","hide");
    ContentD.classList.replace("hide","show");
    ContentE.classList.replace("show","hide");
})

ButtonE.addEventListener('click', () => {
    ContentA.classList.replace("show","hide");
    ContentB.classList.replace("show","hide");
    ContentC.classList.replace("show","hide");
    ContentD.classList.replace("show","hide");
    ContentE.classList.replace("hide","show");
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