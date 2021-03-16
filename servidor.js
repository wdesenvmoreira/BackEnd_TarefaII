const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path'); 
const { brotliDecompress } = require('zlib');


const hostname = '127.0.0.1';
const port = 3000;


const mimeTypes = {
    html:"text/html",
    css:"text/css", 
    js:"text/javascript",
    png:"image/png",
    jpeg:"image/jpeg",
    jpg:"image/jpg",
    woff:"font/woof"
}

http.createServer((req, res)=>{
    let acesso_uri = url.parse(req.url).pathname;
    let caminho_completo_recurso = path.join(process.cwd(), decodeURI(acesso_uri));
    console.log(caminho_completo_recurso);

    
    let recurso_carregado;
    try {
        recurso_carregado = fs.lstatSync(caminho_completo_recurso);
        recurso = true;
    } catch (error) {
        console.log('Não Encontrou');
      // res.writeHead(302, {'Location':'404.html'});
       res.write('404: Arquivo não localizado. ')
       res.end();
        
    }

        if(recurso_carregado.isFile()){
        let mimeType = mimeTypes[(path.extname(caminho_completo_recurso).substring(1))];

        res.writeHead(200, {'Content-Type': mimeType});
        let fluxo_arquivo = fs.createReadStream(caminho_completo_recurso);
        fluxo_arquivo.pipe(res);
    }else if(recurso_carregado.isDirectory()){
        res.writeHead(302, {'Location':'index.html'});
        res.end();

        }else{
            console.log('Não é arquivo nem diretorio!');
            res.writeHead(302, {'Location':'404.html'});
            res.end();
        }



    
    
}).listen(port,hostname, ()=>{
    console.log(`Servidor executado em: ${hostname}:${port}/`);
})