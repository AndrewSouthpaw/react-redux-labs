module.exports = (req, res, next) => {
  const failures = parseFloat(process.env.FAILURES || 0)
  if (!failures) return next()

  console.log(`Simulating flaky server with ${failures * 100}% chance of failure`)
  if (Math.random() < failures) throw new Error('Server failure 😬')
  next()
}
