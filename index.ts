import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';
const app = express();

app.get('/bmi', (_req, res) => {
  const altura = parseFloat(_req.query.height as string)
  const peso = parseFloat(_req.query.weight as string)

  if(isNaN(altura) || isNaN(peso)) {
    return res.status(400).json({ error: 'malformatted params' })
  }

  const bmi = calculateBmi(altura, peso)
  
  const response = {
    weight: peso,
    height: altura,
    bmi: bmi
  }

  return res.json(response)
});

app.post('/exercises', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { dailyExercises, target } = req.body;

  if(isNaN(target) || !Array.isArray(dailyExercises)){
    return res.status(400).send({ error:'malformatted parameters' });
  }

  const result = calculateExercises(dailyExercises, target);
  return res.json(result);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});