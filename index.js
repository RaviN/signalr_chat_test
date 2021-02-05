let express = require('express');
let app = express();

app.use(express.static('public'))

app.listen(8484, function() {
    console.log('listening');
} )