var api = {
  getVideos(){
    var url = 'apilink?api_key=DEMO_KEY';
    return fetch(url).then((res)=> res.json());
  }
}

module.exports = api
