# Hacer una aplicacion web que permita hacer login


1. Una view con hbs "register" que capture estos campos

- Nombre
- Email
- Password
- Confirmación de Password
Y eso haga un POST a la collection "users"

El controller debe usar "bcrypt" para no guardar el password explisito, sino guardar un hash

2. Una view con hbs "login" que reciba únicamente email y password

El controlador debe regresar en una cookie el JWT en caso de email y password correctos

El JWT lleva adentro todo el documento del Usuario

3. En el Layout debe detectar si tengo una session o no. Si tengo sesión, muestra mi nombre en el HEADER y un botón para hacer logout Si no tengo sesión, muestra en el header el botón que manda a Registro y el que manda a Login