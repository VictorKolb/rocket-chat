export default function(number) {
  const numberFormatter = new Intl.NumberFormat("ru-RU");

  return numberFormatter.format(number);
}
