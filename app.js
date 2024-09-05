let boxes = document.querySelectorAll(".box");              // Selecting the box to perform action
let resetBtn = document.querySelector("#btn-reset");             
let newGameBtn = document.querySelector("#btn-new"); 
let msgContainer = document.querySelector(".winner-container");
let winnerMsg = document.querySelector(".winner-msg");


let turnO = true;                                     // Selecting who's gonna start

const winPatterns = [                                 // Adding winning pattern combinations 
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],                           
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    let turnO = true;
    enableBoxes(); 
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {                               // Creating a arrow function
    box.addEventListener("click", () => {              // creating click function 
        if(turnO) {                                    //Checking playerO turn                  
            box.innerText = "O";
            turnO = false
        } else {                                      
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true; 

        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    winnerMsg.innerText = `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

