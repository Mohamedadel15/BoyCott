// start global variables

const btn_bar = document.querySelector(".menu-icone");

// btn to scroll to top
const btn_top = document.getElementById("btnScrollToTop");

// btn to scroll to bottom next section
const btn_bottom = document.getElementById("btnMoveToButtom");

// End global variables

// add event for button menu to show nav menu
btn_bar.addEventListener("click", () => {
  document
    .querySelector(".started .container header nav ul")
    .classList.toggle("show");
});

//  add event for button scroll to top

window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight) {
    btn_top.style.display = "flex";
  } else {
    btn_top.style.display = "none";
  }
});

btn_top.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// ------------------------------------------------

//  add event for button scroll to button for the next section
btn_bottom.addEventListener("click", () =>
  window.scrollTo(0, window.innerHeight)
);

// ------------------------------------------------------

const text = "welcome";
       
let index = 0;

function type() {
    const typingText = document.querySelector(".typing-text");
    typingText.textContent = text.slice(0, index);
    index++;

    if (index > text.length) {
        index = 0;
    }
}

setInterval(type, 200); 