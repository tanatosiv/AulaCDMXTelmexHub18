const jwt= require('jsonwebtoken')

// con esto se genera el token para la llave secreta, se corre primero

// jwt.sign({
//     name: 'ivan', credentials: 'yomero'},
//     'llave-super-secreta', 
//     function (err, token){
//         if (err) console.log(err)
//         console.log(token)
//     }
// )

//se corre esto en segundo lugar para verificar el token creado

jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaXZhbiIsImNyZWRlbnRpYWxzIjoieW9tZXJvIiwiaWF0IjoxNTMxNzY2MTIwfQ.8TCPIVQieX0Lt_JhmjoHivGIy37vkbGJ-THx7UDnjrE',  
'llave-super-secreta',
function (err, payload){
    if (err) console.log(err)
    console.log(payload)
}
)


