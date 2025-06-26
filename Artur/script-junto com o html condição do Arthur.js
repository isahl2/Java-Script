let altura = Number(prompt("Digite sua altura: "))
let genero = confirm("Seu gênero é masculino? ")
let pesoIdeal

if(genero){
  pesoIdeal = 22 * altura ** 2
} else
  pesoIdeal = 21 * altura ** 2

  alert("Seu peso ideal é: " + pesoIdeal)
