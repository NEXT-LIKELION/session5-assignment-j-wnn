// 9*9
/*
 *
 ***
 *****
 *******
 *********

4 1 4
3 3 3
2 5 2
1 7 1
0 9 0 
 */

let element = "";

for (let a = 1; a <= 5; a++) {
    for (let b = 1; b <= 2 * a - 1; b++) {
        element = " ".repeat(5 - a) + "*".repeat(b);
    }
    console.log(element);
}
