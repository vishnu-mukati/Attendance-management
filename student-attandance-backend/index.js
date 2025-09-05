const express = require('express');
const db = require('./utils/db-connections');
const attendanceRoutes = require('./routes/attendanceRoutes');
const cors = require('cors');


const app = express();

app.use(cors());
app.use(express.json());

app.use('/attendance',attendanceRoutes)

app.get('/', (req, res) => {
    res.send('hello world');
})

db.sync().then(()=>{
    app.listen(4000,(err)=>{
    console.log("server is running");
})
}).catch((err)=>{
    console.log(err);
})
