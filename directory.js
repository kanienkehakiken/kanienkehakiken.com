var data = [
  {
    name: 'kahs',
    soundCloudID: '14960618',
    meaning: 'She lifts the name out of the water.'
  },
  {
    name: 'teio',
    soundCloudID: '304019740',
    meaning: 'Bright Tree.'
  }
]

function directory(subdomains){
  var subdomain = subdomains[0]

  datum = data.filter((el) => {
    console.log('el', el.name, subdomain)
    return el.name === subdomain
  })[0] || null
  if (datum) {
    datum.src=`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${datum.soundCloudID}&amp;color=00aabb&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false`
    return datum
  }

  return null
}
module.exports = directory
