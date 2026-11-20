const https = require('https');
var URL = 'https://jsonplaceholder.typicode.com';

https.get(URL + '/posts', function (response) {
  var text = '';
  response.on('data', function (chunk) { text = text + chunk; });
  response.on('end', function () {
    var posts = JSON.parse(text);
    posts.sort(function (a, b) { return b.title.length - a.title.length; });
    console.log('Посты, первый title:', posts[0].title);
  });
});

https.get(URL + '/comments', function (response) {
  var text = '';
  response.on('data', function (chunk) { text = text + chunk; });
  response.on('end', function () {
    var comments = JSON.parse(text);
    comments.sort(function (a, b) { return a.name.localeCompare(b.name); });
    console.log('Комментарии, первое имя:', comments[0].name);
  });
});
