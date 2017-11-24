# alMundoServer

Clonar repo

``` bash
git clone https://github.com/anibalajt/alMundoServer.git
```
instalar dependencies
``` bash
npm install
```
Run
``` bash
npm start
```

Api
``` bash
Obtenemos la ciudad pasando como parametro location

localhost:3002/api/getLocation?location=Medellín

Obtenemos los hoteles deacuerdo a la localizacion, fecha, rooms y city
localhost:3002/api/getHotels?date=2017-11-27,2017-11-29&rooms=2&type=CITY&city=1317855
  
obtenemos la descripcion del hotel 
localhost:3002/api/getHotel?date=2017-11-23,2017-11-24&rooms=2&type=CITY&city=94257
NOTA: city id hotel

```
