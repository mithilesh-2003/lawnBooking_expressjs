const { app } = require("./app")
const port = 5000

// start server on that port
app.listen(port, () => {
  console.info(`Lawn server is running on port ${port}`)
})
