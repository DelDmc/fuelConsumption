/**
 * Performs calculations based on user input and displays the result in the DOM.
 * @return {void}
 */
function resultFunc() {
  /**
     * @type {HTMLElement} - The result section element.
     */
  const resultSection = document.getElementById('result-section');

  /**
     * @type {HTMLElement} - The wrong input section element.
     */
  const wrongInput = document.getElementById('wrong-input-section');

  /**
     * @type {HTMLInputElement} - The input field for distance.
     */
  const distanceInput = document.getElementById('distance');

  /**
     * @type {HTMLInputElement} - The input field for fuel consumption.
     */
  const fuelConsumptionInput = document.getElementById('consumption');

  /**
     * @type {HTMLInputElement} - The input field for fuel price.
     */
  const fuelPriceInput = document.getElementById('fuel-price');

  // eslint-disable-next-line max-len
  if (distanceInput.value && fuelConsumptionInput.value && fuelPriceInput.value) {
    /**
       * @type {number} - The distance entered by the user.
       */
    const distance = parseFloat(distanceInput.value);

    /**
       * @type {number} - The fuel consumption entered by the user.
       */
    const fuelConsumption = parseFloat(fuelConsumptionInput.value);

    /**
       * @type {number} - The fuel price entered by the user.
       */
    const fuelPrice = parseFloat(fuelPriceInput.value);

    /**
       * @type {Object} - The result of the fuel and cost calculation.
       * @property {number} fuelAmount - The calculated fuel amount.
       * @property {number} fuelCost - The calculated fuel cost.
       */
    const result = calculateFuelAndCost({distance, fuelConsumption, fuelPrice});

    document.getElementById('fuel-amount')
        .textContent = result.fuelAmount + ' liters';
    document.getElementById('fuel-cost')
        .textContent = result.fuelCost + ' EUR';

    resultSection.style.display = 'block';
    wrongInput.style.display = 'none';
  } else {
    resultSection.style.display = 'none';
    wrongInput.style.display = 'block';
  }
}
