let style = document.createElement("style")
document.body.appendChild(style)
document.querySelector("body > input").addEventListener('change', e => {
  if(e.target.checked) {
    console.log("do the thing")
    style.innerHTML = `
    @keyframes scrolupdown {
        0% {
            top: 0%;
        }
        100% {
            top: -${(document.querySelector("#bgimagessrcoll").scrollHeight-((screen.height*285)/320))}px;
        }
    }`
  }
});
const text = "Ｐｌａｓｍｉｉ＜３";
let index = 0;
let currentTitle = "";
function animateTitle() {
  if (index < text.length) {
    currentTitle += text[index];
    document.title = currentTitle;
    index++;
    setTimeout(animateTitle, 200);
  } else {
    setTimeout(() => {
      index = 0;
      currentTitle = "";
      document.title = "";
      animateTitle();
    }, 3000);
  }
}
animateTitle();
