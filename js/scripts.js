function hideResults (){
  document.getElementById("javascript").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("ruby").setAttribute("class", "hidden");
}

window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = function(event){
    event.preventDefault()
    hideResults();
    let javaScriptOutput = document.getElementById("javascript");
    javaScriptOutput.setAttribute("class", "hidden");
    let pythonOutput = document.getElementById("python");
    pythonOutput.setAttribute("class", "hidden");
    let rubyOutput = document.getElementById("ruby");
    rubyOutput.setAttribute("class", "hidden");

    const q1 = document.querySelector("input[name='question1']:checked".value);
    const q2 = document.querySelector("input[name='question2']:checked".value);
    const q3 = document.querySelector("input[name='question3']:checked".value);
    const q4 = document.querySelector("input[name='question4']:checked".value);
    const q5 = document.querySelector("input[name='question5']:checked".value);

    if (q1 === "Webpages" && q2 === "None at all" && q3 === "Yes" && q4 === "Alright" && q5 === "I love computers"){
      javaScriptOutput.removeAttribute("class");
      console.log ("javaWorking");
    } else if (q1 === "Data compilers" && q2 === "A good amount" && q3 === "Yes" && q4 === "Good" && q5 === "Trying new things"){
      pythonOutput.removeAttribute("class");
      console.log("pythonWorking");
    } else if (q1 === "Games" && q2 === "A little bit" && q3 === "Yes" && q4 === "Terrible" && q5 === "To make money"){
      rubyOutput.removeAttribute("class")
      console.log("rubyWorking");
    } else {
      window.alert("Uh Oh, looks like coding isn't for you.")
      }
  };
};