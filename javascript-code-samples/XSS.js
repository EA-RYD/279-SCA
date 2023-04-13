const user = JSON.parse(localStorage.getItem('user'));
if (user && user.token) {
  const headers = { 'Authorization': `Bearer ${user.token}` };
  const name = prompt("What's your name?");
  const message = `<script>alert('Hello, ${name}!');</script>`;
  fetch(`/api/messages?message=${encodeURIComponent(message)}`, { headers })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
} else {
  window.location.href = '/login';
}

/*
   user's input is not sanitized or validated, an attacker could enter a malicious script as their name 
   that would be executed by the victim's browser when the message is displayed
*/
