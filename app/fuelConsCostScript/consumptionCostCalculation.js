function CalculateFuelAndCost(distance, fuelConsumption, fuelPrice) {
    let fuelAmount = Math.abs(distance * fuelConsumption / 100);
    let fuelCost = Math.abs(fuelAmount * fuelPrice);
    return {
        fuelAmount: fuelAmount.toFixed(2),
        fuelCost: fuelCost.toFixed(2)
    }
}