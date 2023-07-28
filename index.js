function checkNumber() {
    var numberInput = document.getElementById('number-input');
    var resultDiv = document.getElementById('result');
    var number = numberInput.value;
  
    if (number % 2 === 0) {
      resultDiv.textContent = 'The number is even';
    } else {
      resultDiv.textContent = 'The number is odd';
    }
  }