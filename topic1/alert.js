function alerta() {
  alert('WARNING!')
}

function otroalerta(){
  let data = getJSON('http://api.icndb.com/jokes/random');
  document.getElementById('chuckJoke').innerHTML = data.value.joke;
}

function load() {
  document.getElementsByClassName('hidden')[0].classList.remove('hidden');
}

function getJSON(url) {
  let rJSON ;
  let req ;

  rJSON  = '' ;
  req = new XMLHttpRequest();

  if(req != null){
      req.open('GET', url , false);
      req.send(null);
      rJSON = JSON.parse(req.responseText);
  }
  return rJSON ;
}

//document.getElementsById('chuckJoke').innerHTML = data.value.joke;
