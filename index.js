//imports the express module locally so it can be used within the file.
const express = require('express');
//import morgan locally
morgan = require('morgan');
bodyParser = require('body-parser');
methodOverride = require('method-override');

//declares a variable that encapsulates Express’s functionality to configure your web server.
//this variable will be used to route your HTTP requests and responses.
const app = express();

//info on my 10 movies
let movies = [
  {
    title: 'About Time',
    year: '2013',
    director:{
      name: ,
      birth: ,
      death:
    },
    actors: 'Rachel McAdams, Domnhall Gleeson, Bill Nighy',
    genre: ,
    synopsis: ' The film is about a young man with the ability to time travel who tries to change his past in hopes of improving his future.'
  },
  {
    title: 'Grease',
    year: '1978',
    director:{
      name: ,
      birth: ,
      death:
    },
    actors: 'Olivia Newton-John, John Travolta',
    genre: ,
    synopsis: 'The musical depicts the lives of greaser Danny Zuko and Australian transfer student Sandy Olsson, who develop an attraction for each other during a summer romance.'
  },
  {
    title: 'Dirty Dancing',
    year: '1987',
    director:{
      name: ,
      birth: ,
      death:
    },
    actors: 'Jennifer Grey, Patrick Swayze',
    genre: ,
    synopsis: 'The film tells the story of Frances "Baby" Houseman, a young woman who falls in love with dance instructor Johnny Castle at a vacation resort.'
  },
  {
    title: 'Coach Carter',
    year: '2005',
    director:{
      name: ,
      birth: ,
      death:
    },
    actors: 'Samuel L Jackson, Channing Tatum',
    genre: ,
    synopsis: 'The film is based on the true story of Richmond High School basketball coach Ken Carter, who made headlines in 1999 for suspending his undefeated high school basketball team due to poor academic results.'
  },
  {
    title: 'The Blind Side',
    year: '2009',
    director:{
      name: ,
      birth: ,
      death:
    },
    actors: 'Sandra Bullock, Tim McGraw',
    genre: ,
    synopsis: 'The film tells the story of Michael Oher, an American football offensive lineman who overcame an impoverished upbringing to play in the National Football League (NFL) with the help of his adoptive parents Sean and Leigh Anne Tuohy'
  },
  {
    title: 'Avatar',
    year: '2009',
    director:{
      name: ,
      birth: ,
      death:
    },
    actors: 'Zoe Saldana, Sam Worthington, Sigourney Weaver',
    genre: ,
    synopsis: 'The film is set in the mid-22nd century when humans are colonizing Pandora, a lush habitable moon of a gas giant in the Alpha Centauri star system, in order to mine the valuable mineral unobtanium. The expansion of the mining colony threatens the continued existence of a local tribe of Na\'vi – a humanoid species indigenous to Pandora.'
  },
  {
    title: 'The Lord of the Rings - Trilogy',
    year: '2001-2003',
    director:{
      name: ,
      birth: ,
      death:
    },
    actors: 'Elijah Wood, Ian McKellen, Liv Tyler, Viggo Mortensen, Sean Astin, Cate Blanchett, Christopher Lee, Orlando Bloom, Andy Serkis',
    genre: ,
    synopsis: 'Set in the fictional world of Middle-earth, the films follow the hobbit Frodo Baggins as he and the Fellowship embark on a quest to destroy the One Ring, to ensure the destruction of its maker, the Dark Lord Sauron. The Fellowship eventually splits up and Frodo continues the quest with his loyal companion Sam and the treacherous Gollum. Meanwhile, Aragorn, heir in exile to the throne of Gondor, along with Legolas, Gimli, Boromir, Merry, Pippin and the wizard Gandalf, unite to save the Free Peoples of Middle-earth from the forces of Sauron and rally them in the War of the Ring to aid Frodo by distracting Sauron\'s attention.'
  },
  {
    title: 'Harry Potter - film series',
    year: '2001-2011',
    director:{
      name: ,
      birth: ,
      death:
    },
    actors: 'Emma Watson, Daniel Radcliffe, Rupert Grint',
    genre: ,
    synopsis: 'The film\'s The main story arc concerns Harry, and young wizard, and his struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).'
  },
  {
    title: 'The Holiday',
    year: '2006',
    director:{
      name: ,
      birth: ,
      death:
    },
    actors: 'Kate Winslet, Cameron Diaz, Jude Law',
    genre: ,
    synopsis: 'Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.'
  },
  {
    title: 'Pride and Prejudice',
    year: '2005',
    director:{
      name: ,
      birth: ,
      death:
    },
    actors: 'Keira Knightly, Matthew Macfayden',
    genre: ,
    synopsis: 'The film features five sisters from an English family of landed gentry as they deal with issues of marriage, morality and misconceptions.'
  }
];

//route all of the endpoints
app.get('/movies', (req, res) => {
  res.send('Return a list of ALL movies to the user');
})
app.get('/movies/[name]', (req, res) => {
  res.send('Return a list of ALL movies to the user');
})
app.get('/movies', (req, res) => {
  res.send('Return a list of ALL movies to the user');
})
app.get('/movies/[name]/[director]', (req, res) => {
  res.send('Return a list of ALL movies to the user');
})
app.post('/movies', (req, res) =>{
  res.post('Allow new users to register');
})
app.post('/movies', (req, res) =>{
  res.post('Allow users to add a movie to their list of favorites ');
})
app.post('/movies/users/[username]', (req, res) => {
  res.update('Allow users to update their user info (username)');
})
app.delete('/movies/[name]', (req, res) => {
  res.update('Allow users to remove a movie from their list of favorites');
})
app.delete('/movies/users/[username]', (req, res) => {
  res.update('Allow existing users to deregister');
})


// browser print something
app.get('/', (req, res) => {
  res.send('The first Rule of the Movie app is...');
});

app.get('/documentation', (req, res) => {                  
  res.sendFile('public/documentation.html', { root: __dirname });
});

app.get('/index', (req, res) => {                  
  res.sendFile('public/index.html', { root: __dirname });
});

//get json with movies
app.get('/movies', (req, res) => {
  res.json(movies);
});

//using middeware function
app.use(morgan('common'));

// get all files in public folder
app.use(express.static('public'));

// support parsing of application/json type post data COPY/PASTE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
app.use(methodOverride());


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});