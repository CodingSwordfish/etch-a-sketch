document.addEventListener("DOMContentLoaded", (e) => {
  let board = document.querySelector("#board");
  let reset = document.querySelector("#reset");
  let white = document.querySelector("#white");
  let message = document.querySelector("#message");
  let random = document.querySelector("#random");
  let erase = document.querySelector("#erase");
});

message.textContent = " 16 x 16";

function createBoard(size) {
  let squareBoxes = size * size;
  for (let i = 0; i < squareBoxes; i++) {
    let styles = window.getComputedStyle(board);
    let width = parseInt(styles.width);
    let height = parseInt(styles.height);
    let divs = document.createElement("div");
    divs.classList.add("square");
    divs.style.width = `${width / size}px`;
    divs.style.height = `${height / size}px`;
    board.appendChild(divs);
  }
}
createBoard(16);

let btn_popup = document.querySelector("#popup");

btn_popup.addEventListener("click", (e) => {
  let input = parseInt(prompt("Enter a number between 1 and 45"));
  if (input < 1) {
    alert("Enter a number between 1 and 45");
  } else if (input > 45) {
    alert("Enter a number between 1 and 45");
  } else if (input === null || input === "" || typeof input !== "number") {
    alert("Enter a number between 1 and 45");
    message.textContent = `16 x 16`;
  } else if (input > 1 && input < 46) {
    board.innerHTML = null;
    let size = input;
    createBoard(size);
    message.textContent = "";
    message.textContent += `${input} x ${input}`;
  }
});

reset.addEventListener("click", (e) => {
  board.innerHTML = "";
  createBoard(16);
  alert("Board Resetting, Get ready to Draw!");
  message.textContent = "";
  message.textContent = `16 x 16`;
  message.style.fontWeight = "bold";
  message.style.color = "green";
});

let isDrawing = false;

white.addEventListener("click", (e) => {
  let color = "white";
  document.getElementById("board").addEventListener("mouseover", (e) => {
    if (isDrawing && e.target.classList.contains("square")) {
      e.target.style.backgroundColor = color;
    }
  });
});

reset.addEventListener("mouseover", (e) => {
  e.target.style.width = "150px";
  e.target.style.height = "65px";
  e.target.style.marginLeft = "30px";
});

reset.addEventListener("mouseout", (e) => {
  e.target.style.width = "100px";
  e.target.style.height = "50px";
  e.target.style.marginLeft = "0px";
});

random.addEventListener("mouseover", (e) => {
  e.target.style.width = "150px";
  e.target.style.height = "65px";
  e.target.style.marginLeft = "30px";
});

random.addEventListener("mouseout", (e) => {
  e.target.style.width = "100px";
  e.target.style.height = "50px";
  e.target.style.marginLeft = "0px";
});

white.addEventListener("mouseover", (e) => {
  e.target.style.width = "150px";
  e.target.style.height = "65px";
  e.target.style.marginLeft = "30px";
});

white.addEventListener("mouseout", (e) => {
  e.target.style.width = "100px";
  e.target.style.height = "50px";
  e.target.style.marginLeft = "0px";
});

erase.addEventListener("mouseover", (e) => {
  e.target.style.width = "150px";
  e.target.style.height = "65px";
  e.target.style.marginLeft = "30px";
});

erase.addEventListener("mouseout", (e) => {
  e.target.style.width = "100px";
  e.target.style.height = "50px";
  e.target.style.marginLeft = "0px";
});

random.addEventListener("click", (e) => {
  document.getElementById("board").addEventListener("mouseover", (e) => {
    if (isDrawing && e.target.classList.contains("square")) {
      e.target.style.backgroundColor = `hsl(${Math.floor(
        Math.random() * 360
      )}, ${Math.floor(Math.random() * 100) + 25}%, ${
        Math.floor(Math.random() * 75) + 25
      }%)`;
    }
  });
});

erase.addEventListener("click", (e) => {
  document.getElementById("board").addEventListener("mouseover", (e) => {
    if (isDrawing && e.target.classList.contains("square")) {
      e.target.style.backgroundColor = `black`;
    }
  });
});

document.body.addEventListener("click", (event) => {
  if (
    event.target.tagName !== "BUTTON" &&
    event.target.classList.contains("square")
  ) {
    isDrawing = !isDrawing;
  }
});
