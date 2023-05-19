export const convertToTimeFormat = (totalSeconds) => {
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  const formattedHours = hours.toString().padStart(2, '0')
  const formatterMinutes = hours > 0 ? minutes.toString().padStart(2, '0') : minutes.toString().padStart(1, '0')
  const formattedSeconds = seconds.toString().padStart(2, '0')

  let timeFormat = ''
  if (hours > 0) {
    timeFormat = `${formattedHours}:${formatterMinutes}:${formattedSeconds}`
  } else if (minutes > 0) {
    timeFormat = `${formatterMinutes}:${formattedSeconds}`
  } else {
    timeFormat = `${formattedSeconds}`
  }

  return timeFormat
}