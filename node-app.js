const fs=require('fs');
const url=require('url');
const http=require('http');
const port=80;
let out='';
http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type':'text/html'})
    //res.end('Hello World')
    fs.readFile('header.html',{encoding:'utf-8'},(e,d)=>
    {
        if(e)
        {
            res.write('Error');
            res.end();
        }
        else{
            out=d;
            res.write(out);
            const fname=url.parse(req.url).pathname;
            if(fname=='/colors.html')
            {
            fs.readFile('.'+fname,{encoding:'utf-8'},(err,data)=>
            {
                if(err)
                {
                    //res.write('Error');
                    res.end();
                }
                else{
                    out=data;
                    res.write(out);
                    res.end();
                }
            })
        }
        if(fname=='/contents.html')
            {
            fs.readFile('.'+fname,{encoding:'utf-8'},(err,data)=>
            {
                if(err)
                {
                    res.write('Error');
                    res.end();
                }
                else{
                    out=data;
                    res.write(out);
                    //res.end();
                }
            })
        }
        fs.readFile('footer.html',{encoding:'utf-8'},(e2,d2)=>
        {
            if(e2)
            {
                res.write('Error');
                //res.end();
            }
            else
            {
                out=d2;
                res.write(d2);
                //res.end();
            }
        })
            //res.write(out);
            //res.end();
        }
    })
    
}).listen(port,()=>{
    console.log(`started listening :${port}`);
})

/*fs.readFile('header.html',{encoding:'utf-8'},(e,d)=>
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

    }) */