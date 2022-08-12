window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    const q1 = document.querySelector("input[name='question1']:checked".value);
    const q2 = document.querySelector("input[name='question2']:checked".value);
    const q3 = document.querySelector("input[name='question3']:checked".value);
    const q4 = document.querySelector("input[name='question4']:checked".value);
    const q5 = document.querySelector("input[name='question5']:checked".value);
  };
};