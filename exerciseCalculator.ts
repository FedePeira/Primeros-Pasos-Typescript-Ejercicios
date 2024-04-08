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

try {
  const result = calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2);
  console.log(result);
} catch(error) {
  let errorMessage = 'Something bad happened.'
  if(error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}