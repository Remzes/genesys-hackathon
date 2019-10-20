const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const ApplicationWidget = require('./routes/applicationWidget')
const WelcomeWidget = require('./routes/welcomeWidget')
const FAQWidget = require('./routes/FAQWidget')
app.use('/api/application', ApplicationWidget)
app.use('/api/welcome', WelcomeWidget)
app.use('/api/faq', FAQWidget)

app.listen(process.env.PORT || 3001, () => {
  console.log('Server running on PORT 3001')
})