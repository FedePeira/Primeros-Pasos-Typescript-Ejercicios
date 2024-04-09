interface ValuesExercise {
  mondayHour: number;
  tuesdayHour: number;
  wednesdayHour: number;
  thursdayHour: number;
  fridayHour: number;
  saturdayHour: number;
  sundayHour: number; 
  targetHour: number;
}

interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercises = (exerciseHours: number[], targetHours: number): Result => {
  const periodLength = exerciseHours.length;
  const trainingDays = exerciseHours.filter(hours => hours > 0).length;
  const totalHours = exerciseHours.reduce((sum, hours) => sum + hours, 0);
  const average = totalHours / periodLength;
  const success = average >= targetHours;
  let rating = 0;
  let ratingDescription = '';

  if(average >= targetHours * 1.2) {
    rating = 3;
    ratingDescription = 'excellent';
  } else if(average > targetHours * 1.1) {
    rating = 2;
    ratingDescription = 'not too bad but could be better';
  } else {
    rating = 1;
    ratingDescription = 'needs improvement';
  }

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target: targetHours,
    average,
  }
}

const parseExerciseArguments  = (args: string[]): ValuesExercise => {
  if (args.length < 10) throw new Error('Not enough arguments');
  if (args.length > 10) throw new Error('Too many arguments');

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3])) && !isNaN(Number(args[4])) && !isNaN(Number(args[5]))&& !isNaN(Number(args[6])) && !isNaN(Number(args[7])) && !isNaN(Number(args[8])) && !isNaN(Number(args[9]))) {
    return {
      mondayHour: Number(args[2]),
      tuesdayHour: Number(args[3]),
      wednesdayHour: Number(args[4]),
      thursdayHour: Number(args[5]),
      fridayHour: Number(args[6]),
      saturdayHour: Number(args[7]),
      sundayHour: Number(args[8]), 
      targetHour: Number(args[9])
    }
  } else {
    throw new Error('Provided values were not numbers!');
  }
}

try {
  const valuesExercise = parseExerciseArguments(process.argv);
  const result = calculateExercises([valuesExercise.mondayHour, valuesExercise.tuesdayHour, valuesExercise.wednesdayHour, valuesExercise.thursdayHour, valuesExercise.fridayHour, valuesExercise.saturdayHour, valuesExercise.sundayHour], valuesExercise.targetHour);
  console.log(result);
} catch(error) {
  let errorMessage = 'Something bad happened.'
  if(error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}