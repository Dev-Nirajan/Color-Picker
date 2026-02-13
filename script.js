const colorDiv = document.querySelector(".colors");
const colorText = document.querySelector(".text");
const colorInput = document.querySelector("#color-input");
const userInput = document.querySelector("#user-input");
const textInput = document.querySelector("#text-input");
const selectColor = document.querySelector("#select-color");
const selectTextColor = document.querySelector("#selectTextColor");
const textColorInput = document.querySelector("#textColorInput");

//div
colorInput.addEventListener("input", () => {
    colorDiv.style.backgroundColor = colorInput.value;
});

selectColor.addEventListener("change", () => {
    colorDiv.style.backgroundColor = selectColor.value;
});

//Text
textInput.addEventListener("input", () => {
    userInput.textContent = textInput.value;
});

textColorInput.addEventListener("input", () => {
   colorText.style.color = textColorInput.value;
});

selectTextColor.addEventListener("change", () => {
    colorText.style.color = selectTextColor.value;
});