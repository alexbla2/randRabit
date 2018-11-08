var rabbits = require('./rabbits.json')
var rabbitNames = Object.keys(rabbits)

rabbitNames.forEach(function (name) {
  rabbits[name] = rabbits[name].join('\n')
})

module.exports = function (rabbit) {
  rabbit = rabbit || rabbitNames[~~(Math.random() * rabbitNames.length)]
  return rabbits[rabbit]
}

module.exports.rabbitNames = rabbitNames
