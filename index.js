document.addEventListener("DOMContentLoaded",(e)=>{
    let board = document.querySelector("#board");
    let reset = document.querySelector("#reset");  
    let white = document.querySelector("#white");
    let message = document.querySelector("#message");
let random = document.querySelector("#random");

    
})

message.textContent = "Board resolution is 16 x 16. You are ready to draw!";
message.style.fontWeight= "bold";
    message.style.color = "green";



    function createBoard(size){
        let squareBoxes = size * size;
            for(let i = 0; i< squareBoxes; i++){
                let styles = window.getComputedStyle(board);
                let width = parseInt(styles.width);
                let height = parseInt(styles.height);
                // let border = styles.border;
                let divs = document.createElement("div");
                // divs.addEventListener("mouseover",colorDivs)
                divs.classList.add("square");
                divs.style.width = `${width/size}px`;
                divs.style.height = `${height/size}px`;
                
               
                board.appendChild(divs);
                
               
                
                
           }
          
           
           
           
          
        }
           createBoard(16)
           
           
    
           function getSize(){
            let input = prompt("Enter a number between 1 and 45");
            if(input === null){
                createBoard(16);
                
                    
                    
                    
                
                // message.textContent = "Provide a number between 1 and 45";
                
        
                alert("Enter a number between 1 and 45");
                message.textContent = `Board resolution default is 16 x 16.`
                message.style.color = "green";
                message.style.fontWeight= "bold";
                
                
                
            }
            
            if(input==""){
                createBoard(16)
                // message.textContent = "Please enter a number between 1 and 45";
                // message.style.fontWeight= "bold";
        // message.style.color = "orange";
                alert("Enter a number between 1 and 45")
                message.textContent = `Board resolution default is 16 x 16.`
                message.style.color = "green";
                message.style.fontWeight= "bold";
                
            }
            
            else if(input<0 || input>45){
                message.textContent = "Provide a number between 1 and 45";
                message.style.fontWeight= "bold";
        message.style.color = "orange";
                alert("Enter a number between 1 and 45");
                createBoard(16)
            }
            
            else if(input){
               
                
                message.textContent = "";
                message.textContent += `Board resolution is ${input} x ${input}. \n
                You are ready to draw! `;
                
                message.style.fontWeight= "bold";
        message.style.color = "green";
                return input;
            }
           
        }
    
           let btn_popup = document.querySelector("#popup");
           btn_popup.addEventListener("click",(e)=>{
           
            
            board.innerHTML = "";
            
             let size = getSize();
              createBoard(size)
              
           })

      
reset.addEventListener("click",(e)=>{
    board.innerHTML = "";
    createBoard(16);
    alert("Board Resetting, Get ready to Draw!");
    message.textContent = "";
    message.textContent=`Board resolution is 16 x 16. You are ready to draw!`
    message.style.fontWeight= "bold";
    message.style.color = "green";
})
      


let isDrawing = false;

white.addEventListener("click", (e) => {
    let color = "white"; // Store the chosen color
  
  document.querySelector("body").addEventListener("click",(e)=>{

    isDrawing = !isDrawing;

    
    
  })
    // Event listener on the board (assuming the div container has an id of "board")
    document.getElementById("board").addEventListener("mouseover", (e) => {
        if (isDrawing && e.target.classList.contains("square")) { // Check for class "square"
          e.target.style.backgroundColor = color;
        }
      });
  });

  
  random.addEventListener("click", (e) => {
      document.querySelector("body").addEventListener("click",(e)=>{

        
        isDrawing = !isDrawing;
        
      })
      document.getElementById("board").addEventListener("mouseover", (e) => {
        if (isDrawing && e.target.classList.contains("square")) { // Check for class "square"
          e.target.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}, ${Math.floor(Math.random() * 100) + 25}%, ${Math.floor(Math.random() * 75) + 25}%)`;
        } 
      });
             
   
    
    
  });
  
// function setColor(colorChoice) {


// }



