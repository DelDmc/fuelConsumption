# Function: CalculateFuelAndCost
CalculateFuelAndCost is a function that takes in three parameters: distance, fuelConsumption, and fuelPrice. It calculates the amount of fuel needed and the total cost of the fuel based on the distance traveled, fuel consumption per 100 km, and fuel price.

## Parameters
**distance (number)**: The distance traveled in kilometers
**fuelConsumption (number)**: The amount of fuel consumed per 100 kilometers
**fuelPrice (number)**: The price of fuel per liter

## Returns
An object with two properties:

**fuelAmount (string)**: The amount of fuel needed for the trip in liters
**fuelCost (string)**: The total cost of the fuel for the trip in the local currency, rounded to two decimal places.

## Example Usage

```javascript
function CalculateFuelAndCost(distance, fuelConsumption, fuelPrice) {
    let fuelAmount = Math.abs(distance * fuelConsumption / 100);
    let fuelCost = Math.abs(fuelAmount * fuelPrice);
    return {
        fuelAmount: fuelAmount.toFixed(2),
        fuelCost: fuelCost.toFixed(2)
    }
}

const trip = CalculateFuelAndCost(250, 8, 1.3);
console.log(trip);
// Output: { fuelAmount: '20.00', fuelCost: '26.00' }
```