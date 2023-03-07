function calculateFuelAndCost(tripParametersObject) {
    let fuelAmount = Math.abs(tripParametersObject.distance * tripParametersObject.fuelConsumption / 100);
    let fuelCost = Math.abs(tripParametersObject.fuelAmount * tripParametersObject.fuelPrice);
    return {
        fuelAmount: fuelAmount.toFixed(2),
        fuelCost: fuelCost.toFixed(2)
    }
}