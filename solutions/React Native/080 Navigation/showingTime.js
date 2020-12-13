export const formatShowingTime = showingTime => {
  const t = new Date(showingTime)
  const h = t.getHours()
  const m = t.getMinutes()
  return `${h > 12 ? h - 12 : h}:${m < 10 ? 0 + m : m} ${h < 12 ? 'am' : 'pm'}`
}

export const formatSelectedDate = (selectedDate) => (
  selectedDate.toLocaleString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  })
)
