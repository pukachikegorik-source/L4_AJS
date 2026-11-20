var URL = 'https://jsonplaceholder.typicode.com';
fetch(URL + '/users')
  .then(function (response) { return response.json(); })
  .then(function (users) {
    var short_users = users.map(function (user) {
      return { id: user.id, name: user.name, username: user.username, email: user.email, phone: user.phone };
    });
    console.log('Пользователи, первый:', short_users[0]);
  });
  
fetch(URL + '/todos')
  .then(function (response) { return response.json(); })
  .then(function (todos) {
    var n_done = todos.filter(function (todo) { return todo.completed === false; });
    console.log('Задачи, невыполненных:', n_done.length);
  });
