const bcrypt= require ('bcrypt')

bcrypt.hash('password123', 10, function(err, hash){
    if (err) console.log(err)
    console.log(hash)
})

bcrypt.compare(
    'password123',
    '$2b$10$IkODAcQaGS1LwM684G2KlOpu.gdqD.Ow.dEomm7y42OeJRr85fYPK',
    function (err, valid) {
        if (err) console.log(err)
        console.log(valid)
    }
)

