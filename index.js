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
                divs.addEventListener("mouseover",colorDivs)
                
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
      

function colorDivs(){
if(color === "white"){
    this.style.backgroundColor = "white"
} else if(color ==="random"){
    function getRandomColor() {
        const hue = Math.floor(Math.random() * 360);
        const saturation = Math.floor(Math.random() * 100) + 25; // Ensure minimum saturation
        const lightness = Math.floor(Math.random() * 75) + 25; // Ensure minimum lightness
      
        return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
      }
    this.style.backgroundColor = getRandomColor();
}
}

function setColor(colorChoice) {
color = colorChoice;
console.log(color);
}



