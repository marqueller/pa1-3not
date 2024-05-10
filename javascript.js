var vetValues = ["Luís", 123]

for (var i = 0; i < 2; i++) {
    console.log(vetValues[i])
}

let nome
let idade

nome = prompt("Informe um nome: ")
alert(nome)

idade = prompt("Informe a idade: ")
alert(idade)

if (idade >= 18) {
    alert("Maior de idade!")
}
else {
    alert("Menor de idade")
}