const app = require('./server.js');
const PORT = process.env.PORT || 1337;

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
  });