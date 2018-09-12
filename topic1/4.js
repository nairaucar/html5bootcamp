function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

function repSearch() {
  let text = document.getElementById('myyy').value;
  const url = 'https://api.github.com/search/repositories?q=' + text;
  console.log(url);
  let ul = document.getElementById('listt');
  fetch(url)
    .then((resp) => resp.json())
    .then(function(data){
      let repos = data.items;
      return repos.map(function(item) {
        let li = createNode('li');
        let a = createNode('a');
        a.setAttribute('href', item.html_url);
        a.textContent = item.html_url;
        append(li, a);
        append(ul, li);
      });
    })
    .catch(function(error) {
      console.log('Error', error);
    });
}
