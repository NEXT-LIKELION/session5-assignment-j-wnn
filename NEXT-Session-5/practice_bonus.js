/* 
결과
[ 
    { fullName: 'John Smith', id: 1 },
    { fullName: 'Pete Hunt', id: 2 },
    { fullName: 'Mary Key', id: 3 }
]
*/

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let newUsers = [];

for (let i = 0; i < users.length; i++) {
    newUsers.push({
        fullName: (users[i].name + " " + users[i].surname) ,
        id: users[i].id,
    });
}

console.log(newUsers);