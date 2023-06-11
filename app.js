const adviceID = document.querySelector(".advice-id");
const advice = document.querySelector(".advice");
const button = document.querySelector(".dice");

async function getAdvice() {
  try {
    let response = await fetch("https://api.adviceslip.com/advice");
    let adviceData = await response.json();
    advice.innerText = adviceData.slip.advice;
    adviceID.innerText = adviceData.slip.id;
  } catch (error) {
    console.log("error:", error);
  }
}
window.onload = getAdvice();
button.addEventListener("click", getAdvice);
