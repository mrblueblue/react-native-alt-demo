/*

MessagesFetcher has a method 'fetch',
which returns the Fetch API method,
which is a promise

*/

export const MessagesFetcher = {
  fetch: function(location){
    return fetch(`https://iojs-twitter.herokuapp.com/api/tweets?location=${location}`)
      .then( (response) => {
        return response.json(); })
      .then( (json) => {
        return json;
      });
  }
};
