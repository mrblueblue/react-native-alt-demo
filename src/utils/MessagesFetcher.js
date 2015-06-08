module.exports = MessagesFetcher = {
  fetch: function(location){
    return fetch(`https://iojs-twitter.herokuapp.com/api/tweets?location=${location}`)
      .then((response)=>{
        return response.json()})
      .then((json)=>{
        return json
      })
  }
}
