function alerta(){
  alert(data.value.joke);
}

function load() {
  document.getElementsByClassName('hidden')[0].classList.remove('hidden');
}

function getJSON(config) {
  let rJSON  = undefined ;
  let req = new XMLHttpRequest();
  let prom = new Promise(function(resolve, reject) {
    req.open(config.method, config.url);
    req.send();
    req.addEventListener('load', function() {
      rJSON = JSON.parse(req.responseText);
      resolve(rJSON);
    });
    req.addEventListener('unload', function() {
      reject('¡Error!');
    });
  });
  return prom;
}

function fadein() {
  let prom = getJSON({url: 'http://api.icndb.com/jokes/random', method: 'GET'});
  prom.then(function(result) {
    document.getElementById('chuckJokes').innerHTML = result.value.joke;
  }).catch(function(err) {
    document.getElementById('chuckJokes').innerHTML = err ;
    document.getElementById('sec').classList.add('red');
  });
}
