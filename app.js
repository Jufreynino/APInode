const express = require('express');
const app = express();

app.use(express.json());

app.use(express.urlencoded( {extended : true }));
const UserRoute = require('./Modules/userModules/Route/index');
app.use(UserRoute)


// app.get('/api/getAllUsers',(request, response) =>{
//     var username="jojo";
//     response.json({username});

// });

// app.get('/api/getUsers/',(request, response) =>{
//     var id = request.query.id;
//     response.json({id});

// });
// app.get('/api/getUsers/:id',(request, response) =>{
//     var id = request.params.id;
//     response.json({id});

// });



// app.post('/api/create',(request, response) =>{
//   console.log(request.body)
//   var user = request.body.username;
//   response.json({user});
// });



const port = 5001

app.listen(port, ()=>{
console.log("service is running"+port)
})