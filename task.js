const fs=require('fs');
const url=require('url');
const http=require('http');
const port=3000;
let out='';
http.createServer((req,res)=>{
    fs.readFile('header.html',{encoding:'utf-8'},(e,d)=>
    {
        if(!e)
        {
            out=d;
            fs.readFile('content.html',{encoding:'utf-8'},(e2,d2)=>{
                if(!e2)
                {
                    out+=d2;
                    fs.readFile('footer.html',{encoding:'utf-8'},(e3,d3)=>{
                        if(!e3)
                        {
                            out+=d3;
                            res.write(out);
                            res.end();
                        }
                    })
                }
            })
        }

    })
}).listen(port,()=>{
    console.log(`started listening :${port}`);
})
/* */
    /*res.writeHead(200,{'content-Type':'text/html'})
    res.end('Hello World')
    */