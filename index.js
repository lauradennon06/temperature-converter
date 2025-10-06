function convertToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5.0) / 9.0;
}

function describeTemperature(fahrenheit) {
  const celsius = convertToCelsius;
  let description;

  if (celsius < 0) {
    description = "very cold!";
  } else if (celsius < 20) {
    description = "cold!";
  } else if (celsius < 30) description = "warm!";
  else if (celsius < 40) {
    description = "hot!";
  } else {
    description = "hot!";
  }

  return `${fahrenheit} degrees fahrenheit is ${celsius} degrees celsius, which will mean it is ${description} outside`;
}
