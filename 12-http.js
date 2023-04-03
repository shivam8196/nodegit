const http=require('http');
const server=http.createServer((req,res)=>{
    res.write('welcome to our website')
    res.send();
})
server.listen(5001)