const express = require('express')
const app = express()

app.use(express.json())

//http://localhost:3000/ejemplo/1234

app.get('/:user/:password',(req,res) =>{
    const {user, password} = req.params

    if (user==='ejemplo' && password ==='1234')
    {
        res.json({msg:'inicio de sesion exitoso'})
        return
    }
    res.status(404).json({msg:'error en el usuario o contraseña'})
})

//http://localhost:3000/login?user=ejemplo&password=1234
app.get('/login',(req,res) =>{ //Endpoint
    const {user, password} = req.query

    if(!user||!password){
        res.status(400).json({
            msg:'You need to provide <user> and <password> parameters'
        })
        return
    }

    if (user==='ejemplo' && password ==='1234')
    {
        res.json({msg:'inicio de sesion exitoso'})
        return
    }
    res.status(404).json({msg:'error en el usuario o contraseña'})


})

//postman con post http://localhost:3000/login
app.post('/login',(req,res) =>{ 
    const {user, password} = req.body

if(!user||!password){
    res.status(400).json({
        msg:'You need to provide <user> and <password> parameters'
    })
    return
}

if (user==='ejemplo' && password ==='1234')
{
    res.json({msg:'inicio de sesion exitoso'})
    return
}
})

app.post('/',(req,res) =>{
    res.json({msg:'Hola Post'})
})

app.put('/',(req,res) =>{
    res.json({msg:'Hola Put'})
})

app.patch('/',(req,res) =>{
    res.json({msg:'Hola Patch'})
})

app.delete('/',(req,res) =>{
    res.json({msg:'Hola Delete'})
})

app.listen(3000, ()=> {
    console.log('listening on port 3000')
})
