export const currencyFormat = (number, currency = 'INR') => {
  return Number(number).toLocaleString('en-IN', {
    maximumFractionDigits: 2,
    style: 'currency',
    currency: currency,
  })
}
