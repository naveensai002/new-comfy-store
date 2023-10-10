export const formatPrice = (price) => {
  const dollarPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((price / 100).toFixed(2));

  return dollarPrice;
};
