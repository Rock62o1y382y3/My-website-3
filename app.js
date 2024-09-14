document.getElementById('settings-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const serverName = document.getElementById('server-name').value;
    const botPrefix = document.getElementById('bot-prefix').value;
    console.log('Server Name:', serverName);
    console.log('Bot Prefix:', botPrefix);
    // Here you would send the data to the backend using AJAX or Fetch API
});
