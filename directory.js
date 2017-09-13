var data = [
  {
    name: 'kahs',
    soundCloudID: '1234',
    meaning: 'She lifts the name out of the water.'
  },
  {
    name: 'teio',
    soundCloudID: '4321',
    meaning: 'Bright Tree.'
  }
]

function directory(subdomains){
  var subdomain = subdomains[0]

  datum = data.filter((el) => {
    console.log('el', el.name, subdomain)
    return el.name === subdomain
  }) || null
  if (datum[0]) return datum[0]

  return null
}
module.exports = directory
