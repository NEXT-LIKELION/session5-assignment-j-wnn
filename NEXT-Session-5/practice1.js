const level = ["A", "B", "C"];
let userInput = prompt("A, B, C 중 당신의 회원 등급은?"); //사용자 입력 받기

if (userInput == "A") {
    console.log(level);
} else if (userInput == "B") {
    console.log(level.slice(1, 3));
} else if (userInput == "C") {
    console.log(level[2]);
} else {
    console.log("A, B, C 중 하나만 입력해주세요!");
}

