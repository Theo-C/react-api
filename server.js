const express = require("express")
const server = express()
const cors = require("cors")

server.use(cors())

server.get("/",function(req,res){
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
    res.end("<h1>Hello World les 4ème années</h1>")
})

server.get("/page1",function(req,res){
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
    res.end("<h1>Bienvenue sur la page 1</h1>")
})

server.get("/page/:num",function(req,res){
    const {num} = req.params
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
    res.end(`<h1>Bienvenue sur la page ${num} 😁</h1>`)
})

server.get("/datas",function(req,res){
    const datas = {nom:"Larrat", prenom:"Philippe", ville:"Nogent sur Marne"}
    res.json(datas)
})
server.listen(3100)