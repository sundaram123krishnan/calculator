let display = document.getElementsByTagName("button")
display = Array.from(display)
let inp = document.getElementById("inp")
let str = "";
let ans = 0;
display.forEach((element) => {
    element.onclick = () => {
        str += element.textContent;
        inp.value = str;
        if (str[str.length - 2] == "a" && str[str.length - 1] == "c") {
            inp.value = "";
            str = "";
        }
        if (str[str.length - 1] == '=') {
            inp.value = ans;
            str = ans;
        }
        ans = eval(str)
    }
});
