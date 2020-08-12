export default function minutesInHoursAndMinutes (min: number) {
  let hours = String(Math.floor(min / 60))
  hours = hours.length === 1 ? `0${hours}` : hours
  let minutes = String(min % 60)
  minutes = minutes.length === 1 ? `0${minutes}` : minutes

  return `${hours}:${minutes}`
}
