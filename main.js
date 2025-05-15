let words = document.querySelectorAll(".word");
words.forEach((word) => {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });
  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in";
    }, i * 80);
  });

  setTimeout(() => {
    currentWord.style.opacity = "0";
  }, currentWord.children.length * 80);

  currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000)

// active menu ////////
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu() {
  let len = section.length;
  while (--len && window.scrollY + 97 < section[len].offsetTop) { }
  menuLi.forEach(sec => sec.classList.remove("active"));
  menuLi[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);

// sticky navbar /////
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 50)
})

// toggle icon navbar //////
let menuIcon = document.querySelector("#menu-icon");
let navList = document.querySelector(".navlist");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navList.classList.toggle("open");
}
window.onscroll = () => {
  menuIcon.classList.remove("bx-x");
  navList.classList.remove("open");
}

//open hire modal
document.getElementById("hireMeBtn").onclick = function () {
  document.getElementById('myModal').style.display = 'block';
};

// Close modal on X button
document.getElementById("closeModal").onclick = function () {
  document.getElementById('myModal').style.display = 'none';
};

// Close modal on click outside
window.onclick = function (event) {
  const modal = document.getElementById('myModal');
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


function openPopup(id) {
  document.getElementById(id).style.display = "block";
}

function closePopup(id) {
  document.getElementById(id).style.display = "none";
}

// Close modal when clicking outside the modal content
window.onclick = function (e) {
  ['frontendPopup', 'backendPopup', 'fullstackPopup'].forEach(id => {
    const modal = document.getElementById(id);
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
}

