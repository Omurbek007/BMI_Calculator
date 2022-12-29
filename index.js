function bmi() {
    function bmiCalculator(weight, height) {
        let interpretation = weight / (Math.pow(height,2));
        return interpretation;
    };
    let weightInput = document.querySelector(".weight").value;
    let heightInput = document.querySelector(".height").value * 0.01;
    let index = bmiCalculator(weightInput, heightInput);
    index = Math.floor(index);
    
    let result = document.querySelector(".result");
    
    if (index <= 18.5) {
        result.innerHTML = `Your BMI is ${+index}, so you are underweight.`;
    } else if (+index > 18.5 && +index < 24.9) {
        result.innerHTML = `Your BMI is ${+index}, so you have a normal weight.`;
    } else if (index > 24.9 && index < 29.9) {
        result.innerHTML = `Your BMI is ${index}, so you are <strong>overweight</strong>`
    } else {
        result.innerHTML = `Your BMI is ${+index}, so you are <strong>obese.</strong>`;
    }
}
