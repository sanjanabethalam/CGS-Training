document.getElementById("tempForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    
    const temp = parseFloat(document.getElementById("inputTemp").value);
    const inputUnit = document.getElementById("inputUnit").value;
    const outputUnit = document.getElementById("outputUnit").value;
  
    let result = 0;
  

    if (inputUnit === outputUnit) {
      result = temp; 
    } else if (inputUnit === "Celsius") {
      if (outputUnit === "Fahrenheit") {
        result = (temp * 9/5) + 32;
      } else if (outputUnit === "Kelvin") {
        result = temp + 273.15;
      }
    } else if (inputUnit === "Fahrenheit") {
      if (outputUnit === "Celsius") {
        result = (temp - 32) * 5/9;
      } else if (outputUnit === "Kelvin") {
        result = (temp - 32) * 5/9 + 273.15;
      }
    } else if (inputUnit === "Kelvin") {
      if (outputUnit === "Celsius") {
        result = temp - 273.15;
      } else if (outputUnit === "Fahrenheit") {
        result = (temp - 273.15) * 9/5 + 32;
      }
    }
    document.getElementById("result").innerHTML = `Result: ${result.toFixed(2)} °${outputUnit}`;
  });
  