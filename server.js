// pää käynnistys tiedosto

// moduulit (module) käyttöön
// express on Node.js:n verkkokehys/web framework
const express = require('express');

// luodaan express app
const app = express();

// json käyttöön expressille
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// määritetään root reitti(route)
app.get('/', (req, res) => {
  res.send("Hello World by NinaP");
  console.log("Hey by NinaP")
});

// reitit vaaditaan
const koiratRoutes = require('./src/routes/koirat.routes')

// käytetään middleware
app.use('/koirat_api', koiratRoutes)

// asetaan palvelimen portti
const port = process.env.PORT || 8080;

// kuunteleeko serveri?
app.listen(port, () => {
  console.log(`Palvelin toimii portissa -> ${port}`);
});