const convertToCelsius = function(fahrenheit) {
  converted = (Number(fahrenheit) - 32) / 1.8; //deg F to deg C formula
  return +converted.toFixed(1); //convert string to number and limit to one decimal place
};

const convertToFahrenheit = function(celsius) {
  converted = Number(celsius)*1.8+32; //deg C to deg F formula
  return +converted.toFixed(1); // //convert string to number and limit to one decimal place
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
