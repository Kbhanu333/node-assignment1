const http = require('http');

http.createServer(function(req,res){
    res.write('<h1>Student data</h1>');

    const deta = {
        Name: "Bhanu prasad",
        Age: "21",
        Contact: "123456789",
        email: "bhanu@gmail.com"
    }
    const jsonContent = JSON.stringify(deta)

    res.end(jsonContent);
}).listen(3000);


