console.log("hi");

function createBoard(size) {
    const container = document.querySelector("#container");
    const squareCount = size * size; // Calculate total squares
  
    for (let i = 0; i < squareCount; i++) {
      const box = document.createElement("div");
      box.classList.add('square'); // Add class for styling (recommended)
      box.style.width = `${600 / size}px`; // Use template literals for clarity
      box.style.height = `${600 / size}px`;
      box.style.border = "1px solid black";
      container.appendChild(box);
    }
  }
  
  createBoard(5); // Create a 10x10 grid
  