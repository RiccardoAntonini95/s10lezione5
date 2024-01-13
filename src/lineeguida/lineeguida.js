// link api https://openweathermap.org/api
//la pagina DEVE ESSERE SINGLE PAGE se non specificato dalla traccia
//campo di ricerca che trova la località e manda una fetch usando quella località per dare più dettagli
//che mi dà suggerimenti sul posto che sto cercando, che ovviamente dovrebbe appoggiarsi ad un'altra api che contiene i comuni 
//le api funzionano con latitudine e longitudine quindi devo trovare il modo di ottenerle dalla città
//https://openweathermap.org/appid  altro link che potrebbe essere utile
//https://openweathermap.org/weather-conditions#How-to-get-icon-URL

//SCRIVI IL FILE README CON DENTRO COSA HO USATO E COME FUNZIONA L'APP SE MOBILE O MENO E CHE LIBRERIE HO USATO

//87d11aeb87f6612d1e2ba097c7433b19  la mia chiave
//https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=87d11aeb87f6612d1e2ba097c7433b19 esempio con current
//il to fixed alle coordinate non serve lat=51.5073219&lon=-0.1276474 questa è londra ad esempio
//https://openweathermap.org/api/weathermaps mappa se riesci
//idem per il widget basta cambiare la cityid dentro al tag script che però ottengo nella fetch della barra di ricerca

//barra di ricerca che fa la fetch con il value inserito nel campo ricerca, la lingua non è un problema, lo trova comunque
//http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=87d11aeb87f6612d1e2ba097c7433b19 chiamata esempio con geocoding
//quindi al posto di london va e.target.value o una roba simile oppure metto un bottone vicino che fa tutto sennò all'onchange faccio mille richieste

//usando il bottone potrei anche fare useNavigate che mi porta al componente con tutta la pagina caricata bene
//quindi link to /paginameteo e in quel componente deve partire la doppia fetch, la prima per ottenere coordinate e la seconda per meteo 
//eventualmente anche la terza per le previsioni oppure con lo stesso sistema faccio una pagina differente per le previsioni

//https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=87d11aeb87f6612d1e2ba097c7433b19 esempio con current
//il to fixed alle coordinate non serve lat=51.5073219&lon=-0.1276474 questa è londra ad esempio

//ALESSANDRO MIO PADRE HA SCOPERTO CHE NON SERVE LAT E LON MA BASTA q=città
//https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric

//si può fare richiesta anche con il cap ma va specificato il country code purtroppo 
//https://api.openweathermap.org/data/2.5/weather?zip=00042,it&appid=87d11aeb87f6612d1e2ba097c7433b19
//esempio qua è zip=00042,it se non metto ,it mi cerca negli usa quindi devo fare in modo che l'utente possa mettere il country code

//2 COMPONENTI DENTRO LE ROUTES IN APP.JS
//Il primo è la home page dove hai la barra di ricerca che ti porta alla pagina del meteo(mettici un if che si basa sulla data per scritte dinamiche)
//EXTRA il widget in home page sarebbe top con 4-5 città importanti e distanti tra loro

//Il secondo è la pagina coi dati caricati e qua dentro ho anche le icone che vanno messe nella src di un tag img dinamico
//https://openweathermap.org/weather-conditions#How-to-get-icon-URL

//questo secondo componente è la vera home e conterrà svariati altri componenti in base ai dati che voglio ottenere 
//probabilmente conviene che sia diviso in due componenti uno per weather e uno per forecast
//importante aggiungi &units=metric per ottenere i dati in gradi centigradi italiani

//dati necessari nella fetch weather---> weather.main che è che tempo -- weather.icon che è l'icona che mi serve dinamica 
//main.temp e gli altri in base a quanta roba c'entra temp min, max e feelslike, anche il wind.deg viene figo se metto una freccia in base al numero

//dati necessari nella fetch forecast, faccio domani e dopodomani, nel risultato della fetch c'è list che continene un array di oggetti che sarebbero i
//giorni, quindi sono gli stessi dati solo che parto da list

//idee per l'interfaccia, nella home schermata di benvenuto più barra di ricerca per scegliere una città
//nella vera home un div per weather e uno per forecast (volendo nei componenti li metto già dentro ad un div con render)
//lo stile css dei div deve essere uguale per tutti, vari riquadri disposti con flex che danno info, magari quello di oggi più grande di domani e dopodomani
//e magari quello di oggi con più info degli altri due 