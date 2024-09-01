let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenValue = "";
// let backSpace,restNum='0';
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log("The inner html is : ", buttonText);
    if (buttonText == "X") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText === "C") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText === "=") {
      screen.value = eval(screenValue);
    }
    // else if (buttonText == "DEL") {
    //   var number = screen.value;
    //   var len = number.length - 1;
    //   var newnumber = screenValue.substring(0);
    //   screen.value = newnumber;
    // }
    else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
