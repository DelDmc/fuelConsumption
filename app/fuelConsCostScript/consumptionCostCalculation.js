/**
 * Calculates the fuel amount and cost for a given trip based on the trip parameters.
 * @param {Object} tripParameters - The parameters of the trip.
 * @param {number} tripParameters.distance - The distance of the trip.
 * @param {number} tripParameters.fuelConsumption - The fuel consumption per 100 km.
 * @param {number} tripParameters.fuelPrice - The price of fuel per liter.
 * @return {Object} The calculated fuel amount and cost.
 * @property {string} fuelAmount - The calculated fuel amount rounded to 2 decimal places.
 * @property {string} fuelCost - The calculated fuel cost rounded to 2 decimal places.
 */
function calculateFuelAndCost(tripParameters) {
  const fuelAmount = Math.abs(
      tripParameters.distance * tripParameters.fuelConsumption / 100,
  );
  const fuelCost = Math.abs(fuelAmount * tripParameters.fuelPrice);
  return {
    fuelAmount: fuelAmount.toFixed(2),
    fuelCost: fuelCost.toFixed(2),
  };
}

