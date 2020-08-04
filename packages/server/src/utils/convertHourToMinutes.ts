export default function convertHourToMinutes (time: string) {
  // 0:00

  const [hour, minutes] = time.split(':').map(Number)
  const timeInMinutes = (hour * 60) + minutes

  return timeInMinutes
}
