const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write('Welcome to our home page')
    }
    else if(req.url === '/about'){
        res.write("Here is our short history")
    }
    else{
        res.write(`<h1>OOps!</h1>
        <p>We cant seem to find the page that you are looking for</p>
        <a href="/">back home</a>`)
    }
    res.end()
})

server.listen(5000)