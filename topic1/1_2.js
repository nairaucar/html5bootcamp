window.onload = load;

function alerta() {
  alert('WARNING!')
}

function load() {
  document.getElementsByClassName('hidden')[0].classList.remove('hidden');
}

function getJSON(url) {
  let  rJSON  = '' ;
  let  req = new XMLHttpRequest();

  if(req){
      req.open('GET', url , false);
      req.send(null);
      rJSON = JSON.parse(req.responseText);
  }
  return rJSON ;
}

//document.getElementsById('chuckJoke').innerHTML = data.value.joke;
