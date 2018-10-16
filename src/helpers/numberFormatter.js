export default function(number) {
  const numberFormatter = new Intl.NumberFormat();

  return numberFormatter.format(number);
}
