const user = JSON.parse(localStorage.getItem('user'));
if (user && user.token) {
  const headers = { 'Authorization': `Bearer ${user.token}` };
  fetch('/api/users', { headers })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
} else {
  window.location.href = '/login';
}