const mongoose = require('mongoose');

const app = require('./src/app');

mongoose.connect('mongodb://localhost:27017');

app.listen(4000, () => {
  console.log('Server running on port 4000');
});
