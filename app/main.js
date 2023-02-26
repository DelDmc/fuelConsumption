function resultFunc() {
    const resultSection = document.getElementById('result-section');
    const wrongInput = document.getElementById('wrong-input-section');

    const distanceInput = document.getElementById('distance');
    const fuelConsumptionInput = document.getElementById('consumption');
    const fuelPriceInput = document.getElementById('fuel-price');

    if (distanceInput.value && fuelConsumptionInput.value && fuelPriceInput.value){
        const distance = parseFloat(distanceInput.value);
        const fuelConsumption = parseFloat(fuelConsumptionInput.value);
        const fuelPrice = parseFloat(fuelPriceInput.value);
    
        let result = CalculateFuelAndCost(distance, fuelConsumption, fuelPrice);
    
        document.getElementById('fuel-amount').textContent = result.fuelAmount + ' liters';
        document.getElementById('fuel-cost').textContent = result.fuelCost + '  EUR';
        
        resultSection.style.display = 'block';
        wrongInput.style.display = 'none';
    } else {
        resultSection.style.display = 'none';
        wrongInput.style.display = 'block';
    }
}

