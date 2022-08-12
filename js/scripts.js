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
    //javaScriptOutput.setAttribute("class", "hidden");
    let pythonOutput = document.getElementById("python");
   // pythonOutput.setAttribute("class", "hidden");
    let rubyOutput = document.getElementById("ruby");
    //rubyOutput.setAttribute("class", "hidden");

    const q1 = document.querySelector("input[name='question1']:checked".value);
    const q2 = document.querySelector("input[name='question2']:checked".value);
    const q3 = document.querySelector("input[name='question3']:checked".value);
    const q4 = document.querySelector("input[name='question4']:checked".value);
    const q5 = document.querySelector("input[name='question5']:checked".value);

    if (document.getElementById("dataCompilers").checked && document.getElementById("aGoodAmount").checked && document.getElementById("yes").checked && document.getElementById("good").checked && document.getElementById("tryingNewThings").checked){
      pythonOutput.removeAttribute("class");
      console.log("pythonWorking");

    } else if (document.getElementById("webpages").checked && document.getElementById("noneAtAll").checked && document.getElementById("yes").checked && document.getElementById("alright").checked && document.getElementById("iLoveComputers").checked){
      javaScriptOutput.removeAttribute("class");
      console.log ("javaWorking");

    } else if (document.getElementById("games").checked && document.getElementById("aLittleBit").checked && document.getElementById("yes").checked && document.getElementById("terrible").checked && document.getElementById("toMakeMoney").checked){
      rubyOutput.removeAttribute("class")
      console.log("rubyWorking");

    } else {
      window.alert("Uh Oh, looks like coding isn't for you.")
      }
  };
};