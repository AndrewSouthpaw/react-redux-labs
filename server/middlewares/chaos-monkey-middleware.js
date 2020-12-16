module.exports = (req, res, next) => {
  applySlowdown(req, res, next)
  applyFailures(req, res, next)
  next()
}

const applySlowdown = (req, res) => {
  const slowdown = process.env.SLOWDOWN
  if (!slowdown) return

  console.log(`Simulating a slow server with ${slowdown}ms latency`)
  setTimeout(() => {
    next()
  }, slowdown)
}

const applyFailures = (req, res) => {
  const failures = parseFloat(process.env.FAILURES || 0)
  if (!failures) return

  console.log(`Simulating flaky server with ${failures * 100}% chance of failure`)
  if (Math.random() < failures) throw new Error('Server failure 😬')
}
