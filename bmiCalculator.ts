interface Values {
  altura: number;
  peso: number;
}

export const calculateBmi = (altura: number, peso: number): string => {
 const imc = peso / altura * altura;

  if(imc < 60) {
    return "Underweight (low weight)";
  } else if(imc >= 60 && imc < 90) {
    return "Normal (healthy weight)";
  } else {
    return "Overweight (high weight)";
  } 
};

const parseArguments = (args: string[]): Values => {
  if (args.length < 4) throw new Error('Not enough arguments');
  if (args.length > 4) throw new Error('Too many arguments');

  console.log(Number(args[2]));
  console.log(Number(args[3]));

  if(!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      altura: Number(args[2]),
      peso: Number(args[3])
    };
  } else {
    throw new Error('Provided values were not numbers!');
  }
};

try {
    const { altura, peso } = parseArguments(process.argv);
    console.log(calculateBmi(altura, peso));
} catch(error: unknown) {
  let errorMessage = 'Something went wrong: ';
  if(error instanceof Error){
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}