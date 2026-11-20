var URL = 'https://jsonplaceholder.typicode.com';

async function async_check() {
    var posts_resp = await fetch(URL + '/posts');
    var posts = await posts_resp.json();
    posts.sort(function (a, b) { return b.title.length - a.title.length; });
    console.log('Посты (асинхрон), первый title:', posts[0].title);

    var comm_resp = await fetch(URL + '/comments');
    var comments = await comm_resp.json();
    comments.sort(function (a, b) { return a.name.localeCompare(b.name); });
    console.log('Комментарии, первое имя:', comments[0].name);

    var users_resp = await fetch(URL + '/users');
    var users = await users_resp.json();
    var short_us = users.map(function (user) {
        return { id: user.id, name: user.name, username: user.username, email: user.email, phone: user.phone };
    });
    console.log('Пользователи, первый:', short_us[0]);

    var todo_resp = await fetch(URL + '/todos');
    var todos = await todo_resp.json();
    var n_done = todos.filter(function (todo) { return todo.completed === false; });
    console.log('Задачи (асинхрон), невыполненных:', n_done.length);
}

async_check();
