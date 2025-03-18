let computer = 10 * Math.random();
let userInput = prompt("가위, 바위, 보 중에서 어떤 것을 내시겠습니까?");

if (userInput == "가위" || userInput == "바위" || userInput == "보") {
} else {
    alert("새로고침 후 가위, 바위, 보 중 하나만 다시 정확히 입력해주세요.");
}
// 가위 = 1 바위 = 2 보 = 3
// 바위 > 가위, 보 > 바위, but 가위 > 보
// 컴 - 유 = 1 : 컴 승
// 컴 - 유 = 2 : 유 승
// 컴 - 유 = -1 : 유 승
// 컴 - 유 = -2 : 컴 승
// 컴 - 유 = 0 : 비김

console.log("유저:", userInput);

if (userInput == "가위") {
    userInput = 1;
} else if (userInput == "바위") {
    userInput = 2;
} else if (userInput == "보") {
    userInput = 3;
}

if (computer <= 1 / 3) {
    computer = 1; //가위
    computerInput = "가위";
} else if (computer > 1 / 3 && computer <= 2 / 3) {
    computer = 2; //바위
    computerInput = "바위";
} else if (computer > 2 / 3) {
    computer = 3; //보
    computerInput = "보";
}

console.log("컴퓨터:", computerInput);

if (computer - userInput == 1 || computer - userInput == -2) {
    console.log("컴퓨터 승!");
} else if (computer - userInput == 2 || computer - userInput == -1) {
    console.log("유저 승!");
} else if (computer == userInput) {
    console.log("비겼습니다! 새로고침 후 다시 진행해주세요.");
}
