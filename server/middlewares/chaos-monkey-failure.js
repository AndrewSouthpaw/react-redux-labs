module.exports = (req, res, next) => {
  if (applySlowdown(req, res, next)) return
  if (applyFailures(req, res, next)) return
  next()
}

const applySlowdown = (req, res, next) => {
  const slowdown = process.env.SLOWDOWN
  if (!slowdown) return

  console.log(`Simulating a slow server with ${slowdown}ms latency`)
  setTimeout(() => {
    next()
  }, slowdown)

  return true
}

const applyFailures = (req, res, next) => {
  const failures = parseFloat(process.env.FAILURES || 0)
  if (!failures) return

  console.log(`Simulating flaky server with ${failures * 100}% chance of failure`)
  if (Math.random() < failures) throw new Error('Server failure 😬')
  next()
  return true
}
