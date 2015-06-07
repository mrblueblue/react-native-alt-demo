module.exports = MessagesFetcher = {
  fetch: function(location){
    return fetch(`http://localhost:3000/tweets?location=${location}`)
      .then((response)=>{
        return response.json()})
      .then((json)=>{
        return json
      })
  }
}
