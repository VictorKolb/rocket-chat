export default function(date) {
  const timeFormat = new Intl.DateTimeFormat("ru-RU", {
    hour: "numeric",
    minute: "numeric",
  });

  const dateFormat = new Intl.DateTimeFormat("ru-RU", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  const dayOfWeek = new Intl.DateTimeFormat("ru-RU", {
    weekday: "short",
  });

  return `${dateFormat.format(date)} ${dayOfWeek.format(
    date,
  )} | ${timeFormat.format(date)}`;
}
