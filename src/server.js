import express from 'express';
import path from 'path';

let PORT = process.env.PORT;
if (PORT == null || PORT == "") {
  PORT = 8000;
}

const app = express();

app.use(express.static(path.join(__dirname, '/build')));

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.listen(PORT, () => {
    console.log(`Express app listening on port ${PORT}`);
});

