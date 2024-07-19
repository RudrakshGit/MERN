const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

//Basic Calculator
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.post('/', (req, res) => {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send(`The sum of ${num1} and ${num2} is: ${result}`);
});

//BMI Calculator
app.get('/bmicalculator', (req, res) => {
  res.sendFile(__dirname + '/bmical.html');
});
app.post('/bmicalculator', (req, res) => {
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);

  var bmi = (weight / (height * height)) * 10000;
  let category;
  if (bmi < 18.5) {
    category = 'Underweight';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = 'Normal weight';
  } else if (bmi >= 25 && bmi < 29.9) {
    category = 'Overweight';
  } else {
    category = 'Obese';
  }
  if (weight == 0 || height == 0) {
    res.send('Please enter both weight and height.');
    return;
  } else {
    res.send(`Your BMI is: ${bmi}. Your BMI category is: ${category}`);
  }
});

//Percentage Calculator
app.get('/percentage', (req, res) => {
  res.sendFile(__dirname + '/percentage.html');
});
app.post('/percentage', (req, res) => {
  var percent = Number(req.body.percent);
  var whole = Number(req.body.whole);

  var result = (percent / 100) * whole;

  res.send(`${percent}% of ${whole} is ${result}`);
});
app.post('/percentage/2', (req, res) => {
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);

  const result2 = (num1 * 100) / num2;

  res.send(`${num1} is ${result2}% of ${num2}`);
});

app.listen(8000, () => {
  console.log('Server is running');
});
