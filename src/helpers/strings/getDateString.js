export default function(date, yearSlice = 2) {
  return `${`0${date.getDate()}`.slice(-2)}.${`0${date.getMonth() + 1}`.slice(
    -2,
  )}.${date
    .getFullYear()
    .toString()
    .slice(yearSlice)} | ${date.getHours()}:${date.getMinutes()}`;
}
