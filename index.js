var message = "Hello World";
let message2 = "Hello World 2";

const message3 = "Hello World 3";

message4 = "Variabel tanpa var, let, const";

message = "Hello World di update";
// Variabel var bisa di update dan di panggil di luar scope
// variabel let bisa di update tapi tidak bisa di panggil di luar scope
// Variabel const tidak bisa di update (tetap)

// variabel tanpa var, let, const bisa di update dan di panggil di luar scope tetapi tidak wajib memiliki nilai default, karena jika tida ada nilai default maka akan error

if (true) {
    var message = "Hello World di update 2";
    let message2 = "let di update";
}

console.log(message);
console.log(message2);