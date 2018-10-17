const days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
export default function(date) {
  return `${date.toLocaleDateString("ru-RU")} ${
    days[date.getDay()]
  } | ${date.toLocaleTimeString("ru-RU").slice(0, -3)}`;
}
