const lightTheme = "./assrts/styles/light.css";
const darkTheme = "./assrts/styles/dark.css";
const sunIcon = "assets/images/SunIcon.svg";
const moonIcon = "assets/images/MoonIcon.svg";
const themeIcon = document.getElementById("theme-icon");
const response = document.getElementById('result');
const toast = document.getElementById('toast');

function calculate(value) {

    const calculatedValue = eval(value || null);

    if (isNaN(calculatedValue)) {
        response.value = "نمیتوان 0 را بر 0 تقسیم کرد";
        setTimeout(() => {
            response.value = "";
        }, 2000);

    } else {
        response.value = calculatedValue;
    }
};


function changeTheme() {
    const theme = document.getElementById("theme");
    setTimeout(() => {
      toast.innerHTML = "  ماشین حساب  ";
    }, 1500);
    if (theme.getAttribute("href") === lightTheme) {
      theme.setAttribute("href", darkTheme);
      themeIcon.setAttribute("src", sunIcon);
      toast.innerHTML = "Dark Mode 🌙";
    } else {
      theme.setAttribute("href", lightTheme);
      themeIcon.setAttribute("src", moonIcon);
      toast.innerHTML = "Light Mode ☀️";
    }
  }

//displayed value on screen
function liveScreen(enteredValue) {

    if (!response.value) {
        response.value = " ";

    }
    response.value += enteredValue;
}
//adding event handler on the document to handle keyboard inputs

document.addEventListener("keydown", KeyInputHandler);

//function to handle keyboard inputs
function KeyInputHandler(e) {
    // to fix the default behavior of browser,
    // enter and backspace were causing undesired behavior when some key was already in focus.

    e.preventDefault();
    //grabbing the liveScreen

    //numbers

    if (e.key === "0") {
        response.value += "0";

    } else if (e.key === "1") {
        response.key += "1";

    } else if (e.key === "2") {
        response.key += "2";

    } else if (e.key === "3") {
        response.key += "3";

    } else if (e.key === "4") {
        response.key += "4";
    }
    else if (e.key === "5") {
        response.key += "5";

    } else if (e.key === "6") {
        response.key += "6";

    } else if (e.key === "7") {
        response.key += "7";

    } else if (e.key === "8") {
        response.key += "8";

    } else if (e.key === "9") {
        response.key += "";
    }


    //operators

    if(e.key === "+"){
        response.value += "+";
    }else if(e.key === "-"){
        response.value += "-";
    }else if(e.key === "*"){
        response.value += "*";
    }else if(e.key === "/"){
        response.value += "/";
    }

    //decimal key

    if(e.key === "."){
        response.value += ".";
    }

    //press enter to see result

    if(e.key === "Enter"){
        calculate(result.value);
    }

    //backspace for removing the last input
    if(e.key === "Backspace"){
        const resultInput = response.value;

         //remove the last element in the string

         response.value = resultInput.substring(0,response.value.length - 1);
    }

}