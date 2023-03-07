# Function: CalculateFuelAndCost
calculateFuelAndCost is a function that takes object with three properties :distance, fuelConsumption, and fuelPrice. It calculates the amount of fuel needed and the total cost of the fuel based on the distance traveled, fuel consumption per 100 km, and fuel price.

## Parameters
Object {
**distance (number)**: The distance traveled in kilometers
**fuelConsumption (number)**: The amount of fuel consumed per 100 kilometers
**fuelPrice (number)**: The price of fuel per liter
}

## Returns
An object with two properties:

**fuelAmount (string)**: The amount of fuel needed for the trip in liters
**fuelCost (string)**: The total cost of the fuel for the trip in the local currency, rounded to two decimal places.

## Example Usage

```javascript
function calculateFuelAndCost(tripParametersObject) {
    let fuelAmount = Math.abs(tripParametersObject.distance * tripParametersObject.fuelConsumption / 100);
    let fuelCost = Math.abs(fuelAmount * tripParametersObject.fuelPrice);
    return {
        fuelAmount: fuelAmount.toFixed(2),
        fuelCost: fuelCost.toFixed(2)
    }
}
const distance = 250;
const fuelConsumption = 8;
const fuelPrice = 1.3;

const trip = calculateFuelAndCost({distance, fuelConsumption, fuelPrice});
console.log(trip);
// Output: { fuelAmount: '20.00', fuelCost: '26.00' }
```

## Link to paste function to your project
[https://deldmc.github.io/fuelConsumption/app/fuelConsCostScript/consumptionCostCalculation.js](https://deldmc.github.io/fuelConsumption/app/fuelConsCostScript/consumptionCostCalculation.js)
