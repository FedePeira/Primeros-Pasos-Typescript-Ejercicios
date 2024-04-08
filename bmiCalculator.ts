const calculateBmi = (altura: number, peso: number): string => {
 const imc = peso / altura * altura;

  if(imc < 60) {
    return "Bajo peso";
  } else if(imc >= 60 && imc < 90) {
    return "Normal (peso saludable)";
  } else if(imc >= 80 && imc < 100) {
    return "Sobrepeso";
  } else {
    return "Obesidad";
  }
}

try {
    console.log(calculateBmi(180, 74));
} catch(error: unknown) {
  let errorMessage = 'Something went wrong: ';
  if(error instanceof Error){
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}