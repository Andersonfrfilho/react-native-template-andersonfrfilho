export function dateTimeCountrySpecify(countryGMT) {
  const date = new Date();
  const dataConvertCountry = `${date.toGMTString()}${countryGMT}`;
  const newDateCountry = new Date(dataConvertCountry);
  return newDateCountry;
}

export function formatCurrencyBrazil(number) {
  return `R$ ${number
    .toFixed(2)
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+\,)/g, '$1.')}`;
}
