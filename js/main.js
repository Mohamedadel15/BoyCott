// start global variables

const btn_bar = document.querySelector(".menu-icone");

// btn to scroll to top
const btn_top = document.getElementById("btnScrollToTop");

// btn to scroll to bottom next section
const btn_bottom = document.getElementById("btnMoveToButtom");

//  dynamic constant  text to make it animation
const text = "welcome";

//  container that contain all cards
const containerOfCards = document.querySelector(
  "#portfolio .container .container-filter-image"
);

// all cards in the portfolio
const allCardServices = Array.from(
  document.querySelectorAll(
    "#portfolio .container .container-filter-image .card"
  )
);

// all links in the portfolio
const allNavFilterList = document.querySelectorAll(
  "#portfolio .container .filter-nav ul > li"
);

// search input to  search  the product
const searchInput = document.getElementById("search-ipt");

//  close input to close the search container
const closeInput = document.querySelector(".started header nav .search-icone")

// all main titles in the search input
const allHeaders = [
  ...document.querySelectorAll(".started header nav .search div > h2"),
];

// container that include allHeaders titles
const mainDiv = document.querySelector(".started header nav .search div");

// form validation ur message
const form = document.querySelector("#feedBack .container .form");

// btn send
const validationBtn = document.querySelector(".fancy");

// all input field in the form feed back
const allInputField = [...document.querySelectorAll(".input")];

// all images name to use it to change back ground section feedBack
const allImages = [
  "backGround1",
  "backGround2",
  "backGround3",
  "backGround4",
  "backGround5",
];

// End global variables

// -----------------------------------------------------------------

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

// to make dynamic auto change litter
let index = 0;
function type() {
  const typingText = document.querySelector(".typing-text");
  typingText.textContent = text.slice(0, index);
  index++;
  if (index > text.length) return (index = 0);
}
setInterval(type, 200);
// -------------------------------------------------------------------

//  change the portfolio cards with the list
allNavFilterList.forEach((elements) => {
  elements.addEventListener("click", ({ target }) => {
    containerOfCards.innerHTML = "";
    allCardServices
      .filter((e) => {
        return e.classList.contains(target.getAttribute("data-name"));
      })
      .map((e) => {
        containerOfCards.appendChild(e);
      });
    deleteAndAdd(target);
  });
});

// to delete all class active and active for target list
function deleteAndAdd(e) {
  allNavFilterList.forEach((elements) => {
    elements.classList.remove("active");
  });
  e.classList.add("active");
}

// --------------------------------------------------------------------

// make dynamic change back ground url for section feedBack
let numberOFCount = 0;
function changeBackGround() {
  document.getElementById(
    "feedBack"
  ).style = `background-image: url(./images/${allImages[numberOFCount]}.jpg)`;
  numberOFCount++;
  if (numberOFCount >= allImages.length) return (numberOFCount = 0);
}
setInterval(changeBackGround, 3000);

// -------------------------------------------------------------------------

// make process search when the user clicks and input
searchInput.addEventListener("input", ({ target }) => {
  mainDiv.classList.remove("show");
  mainDiv.innerHTML = "";
  allHeaders.map((e) => {
    if (e.textContent.startsWith(target.value.toLowerCase())) {
      mainDiv.classList.add("show");
      mainDiv.appendChild(e);
    }
  });
});

allHeaders.forEach((elements) => {
  elements.addEventListener("click", ({ target }) => {
    document.getElementById("portfolio").scrollIntoView();
    deleteMegaMenu()
  });
});

closeInput.addEventListener("click", () => {
  deleteMegaMenu()
})

function deleteMegaMenu(){
  mainDiv.classList.remove("show");
}

// -------------------------------------------------------------------------------------------

// add event for btn join us to move for section feed back

document.querySelector(".login-btn").addEventListener("click", (e) => {
  document.getElementById("feedBack").scrollIntoView();
});

// -------------------------------------------------------------------------------------------

//  check validation form

validationBtn.addEventListener("click", (e) => {
  const email = document.getElementById("email-valid").value;
  let regex = /\w+@\w+/gi;
  const resultOfEmailValid = email.match(regex);
  let checkEmpty = allInputField.filter((ele) => {
    return ele.value != "";
  });
  checkEmpty.length == 5 && resultOfEmailValid != null && alert("ur request is sent successfully");
});
