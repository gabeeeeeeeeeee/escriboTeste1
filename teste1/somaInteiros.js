function somaInteiros(num) {
  let soma = 0;

  for (let i = 1; i < num; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
          soma += i;
      }
  }

  return soma;
}

const num = parseInt(prompt("Digite um número inteiro positivo:"));

if (isNaN(num) || num <= 0) {
  console.log("Insira um número inteiro positivo válido.");
} else {
  const resultado = somaInteiros(num);
  console.log(`O somatório dos valores divisíveis por 3 ou 5 inferiores a ${num} é: ${resultado}`);
}