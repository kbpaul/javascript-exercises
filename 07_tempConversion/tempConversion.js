const convertToCelsius = function(temp) {
  // (Temperature in degrees Fahrenheit (°F) - 32) * 5/9.
  let tempC = ( temp - 32 ) * 5.0/9;
  return parseFloat(tempC.toFixed(1));
  
};

const convertToFahrenheit = function(temp) {
  //(0°C × 9/5) + 32
  let tempF = ( temp * 9.0/5 ) + 32;
  return parseFloat(tempF.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
