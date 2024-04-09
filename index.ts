import express from 'express';
import { calculateBmi } from './bmiCalculator';
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

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});