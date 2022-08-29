//imports the express module locally so it can be used within the file.
const { json } = require('body-parser');
const express = require('express');
  app = express();
  morgan = require('morgan');
  bodyParser = require('body-parser');
  uuid = require('uuid');

app.use(bodyParser.json());

//info on users
let users = [
  {
    'id': 1,
    'name': 'Iberia',
    'favoriteMovies': []
  },
  {
    'id': 2,
    'name': 'Britannia',
    'favoriteMovies': ['Avatar']
  }
];

//info on my 10 movies
let movies = [
  {
    'title': 'About Time',
    'year': '2013',
    'director':{
      'name': 'Richard Curtis',
      'birth': '1956',
      'death':''
    },
    'actors': 'Rachel McAdams, Domnhall Gleeson, Bill Nighy',
    'genre': {
      'name': 'Romance',
      'description': 'Romance genre stories involve chivalry and often adventure. The prevailing type of story in the romance genre consists of a love relationship between a man and a woman, often from the woman\'s point of view. There is always conflict that hinders the relationship, but is resolved to a "happy ending".'
  },
    'synopsis': 'The film is about a young man with the ability to time travel who tries to change his past in hopes of improving his future.',
    'imageURL': "https://www.imdb.com/title/tt2194499/mediaviewer/rm3036522240/?ref_=tt_ov_i"
  },
  {
    'title': 'Grease',
    'year': '1978',
    'director':{
      'name': 'Randal Kleiser',
      'birth':'1946',
      'death':''
    },
    'actors': 'Olivia Newton-John, John Travolta',
    'genre': {
      'name': 'Musical',
      'description': 'Musical film is a film genre in which songs by the characters are interwoven into the narrative, sometimes accompanied by singing and dancing. The songs usually advance the plot or develop the film\'s characters, but in some cases, they serve merely as breaks in the storyline, often as elaborate "production numbers".'
    },
    'synopsis': 'The musical depicts the lives of greaser Danny Zuko and Australian transfer student Sandy Olsson, who develop an attraction for each other during a summer romance.',
    'imageURL': "https://www.imdb.com/title/tt0077631/mediaviewer/rm371555328/?ref_=tt_ov_i"
  },
  {
    'title': 'Dirty Dancing',
    'year': '1987',
    'director':{
      'name': 'Emile Ardolino',
      'birth':'1943',
      'death':'1993'
    },
    'actors': 'Jennifer Grey, Patrick Swayze',
    'genre': {
      'name': 'Romance',
      'description': 'Romance genre stories involve chivalry and often adventure. The prevailing type of story in the romance genre consists of a love relationship between a man and a woman, often from the woman\'s point of view. There is always conflict that hinders the relationship, but is resolved to a "happy ending".'
  },
  'synopsis': 'The film tells the story of Frances "Baby" Houseman, a young woman who falls in love with dance instructor Johnny Castle at a vacation resort.',
  'imageURL': "https://www.imdb.com/title/tt0092890/mediaviewer/rm4168602624/?ref_=tt_ov_i"
  },
  {
    'title': 'Coach Carter',
    'year': '2005',
    'director':{
      'name': 'Thomas Carter',
      'birth':'1953',
      'death':''
    },
    'actors': 'Samuel L Jackson, Channing Tatum',
    'genre': {
      'name': 'Drama',
      'description': 'The drama genre features stories with high stakes and many conflicts. They\'re plot-driven and demand that every character and scene move the story forward. Dramas follow a clearly defined narrative plot structure, portraying real-life scenarios or extreme situations with emotionally-driven characters.'
    },
    'synopsis': 'The film is based on the true story of Richmond High School basketball coach Ken Carter, who made headlines in 1999 for suspending his undefeated high school basketball team due to poor academic results.',
    'imageURL': ""
  },
  {
    'title': 'The Blind Side',
    'year': '2009',
    'director':{
      'name': 'John Lee Hancock',
      'birth':'1956',
      'death':''
    },
    'actors': 'Sandra Bullock, Tim McGraw',
    'genre': {
      'name': 'Drama',
      'description': 'The drama genre features stories with high stakes and many conflicts. They\'re plot-driven and demand that every character and scene move the story forward. Dramas follow a clearly defined narrative plot structure, portraying real-life scenarios or extreme situations with emotionally-driven characters.'
    },
    'synopsis': 'The film tells the story of Michael Oher, an American football offensive lineman who overcame an impoverished upbringing to play in the National Football League (NFL) with the help of his adoptive parents Sean and Leigh Anne Tuohy',
    'imageURL': ""
  },
  {
    'title': 'Avatar',
    'year': '2009',
    'director':{
      'name': 'James Cameron',
      'birth':'1954',
      'death':''
    },
    'actors': 'Zoe Saldana, Sam Worthington, Sigourney Weaver',
    'genre': {
      'name': 'Fantasy',
      'description': 'Fantasy films are films that belong to the fantasy genre with fantastic themes, usually magic, supernatural events, mythology, folklore, or exotic fantasy worlds. The genre is considered a form of speculative fiction alongside science fiction films and horror films, although the genres do overlap.'
    },
    'synopsis': 'The film is set in the mid-22nd century when humans are colonizing Pandora, a lush habitable moon of a gas giant in the Alpha Centauri star system, in order to mine the valuable mineral unobtanium. The expansion of the mining colony threatens the continued existence of a local tribe of Na\'vi – a humanoid species indigenous to Pandora.',
    'imageURL': ""
  },
  {
    'title': 'The Lord of the Rings - Trilogy',
    'year': '2001-2003',
    'director':{
      'name': 'Peter Jackson',
      'birth':'1961',
      'death':''
    },
    'actors': 'Elijah Wood, Ian McKellen, Liv Tyler, Viggo Mortensen, Sean Astin, Cate Blanchett, Christopher Lee, Orlando Bloom, Andy Serkis',
    'genre': {
      'name': 'Fantasy',
      'description': 'Fantasy films are films that belong to the fantasy genre with fantastic themes, usually magic, supernatural events, mythology, folklore, or exotic fantasy worlds. The genre is considered a form of speculative fiction alongside science fiction films and horror films, although the genres do overlap.'
    },
    'synopsis': 'Set in the fictional world of Middle-earth, the films follow the hobbit Frodo Baggins as he and the Fellowship embark on a quest to destroy the One Ring, to ensure the destruction of its maker, the Dark Lord Sauron. The Fellowship eventually splits up and Frodo continues the quest with his loyal companion Sam and the treacherous Gollum. Meanwhile, Aragorn, heir in exile to the throne of Gondor, along with Legolas, Gimli, Boromir, Merry, Pippin and the wizard Gandalf, unite to save the Free Peoples of Middle-earth from the forces of Sauron and rally them in the War of the Ring to aid Frodo by distracting Sauron\'s attention.',
    'imageURL': ""
  },
  {
    'title': 'Harry Potter - film series',
    'year': '2001-2011',
    'director':{
      'name': '[1-2] Chris Columbus, [3] Alfonso Cuarón, [4] Mike Newell, [5-8] David Yates',
      'birth':'1958, 1951, 1942, 1963',
      'death':''
    },
    'actors': 'Emma Watson, Daniel Radcliffe, Rupert Grint',
    'genre': {
      'name': 'Fantasy',
      'description': 'Fantasy films are films that belong to the fantasy genre with fantastic themes, usually magic, supernatural events, mythology, folklore, or exotic fantasy worlds. The genre is considered a form of speculative fiction alongside science fiction films and horror films, although the genres do overlap.'
    },
    'synopsis': 'The film\'s The main story arc concerns Harry, and young wizard, and his struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).',
    'imageURL': ""
  },
  {
    'title': 'The Holiday',
    'year': '2006',
    'director':{
      'name': 'Nancy Meyers',
      'birth':'1949',
      'death':''
    },
    'actors': 'Kate Winslet, Cameron Diaz, Jude Law',
    'genre': {
      'name': 'Romance',
      'description': 'Romance genre stories involve chivalry and often adventure. The prevailing type of story in the romance genre consists of a love relationship between a man and a woman, often from the woman\'s point of view. There is always conflict that hinders the relationship, but is resolved to a "happy ending".'
  },
  'synopsis': 'Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.',
  'imageURL': ""
  },
  {
    'title': 'Pride and Prejudice',
    'year': '2005',
    'director':{
      'name': 'Joe Wright',
      'birth':'1971',
      'death':''
    },
    'actors': 'Keira Knightly, Matthew Macfayden',
    'genre': {
      'name': 'Romance',
      'description': 'Romance genre stories involve chivalry and often adventure. The prevailing type of story in the romance genre consists of a love relationship between a man and a woman, often from the woman\'s point of view. There is always conflict that hinders the relationship, but is resolved to a "happy ending".'
  },
    'synopsis': 'The film features five sisters from an English family of landed gentry as they deal with issues of marriage, morality and misconceptions.',
    'imageURL': ""
  }
];

//route all of the endpoints
  //Return a list of ALL movies to the user
app.get('/movies', (req, res) => {
  res.status(200).json(movies);
});

  //Return data about a single movie by title to the user
app.get('/movies/:title', (req, res) => {
  const { title } = req.params;
  const movie = movies.find( movie => movie.title === title);

  if (movie) {
    res.status(200).json(movie);
  } else {
    res.status(400).send('There is no such movie');
  }
})

//Return data about a single genre
app.get('/movies/genre/:genreName', (req, res) => {
  const { genreName } = req.params;
  const genre  = movies.find( movie => movie.genre.name === genreName).genre;

  if (genre) {
    res.status(200).json(genre);
  } else {
    res.status(400).send('There is no such genre in this list of movies');
  }
})

//Return data about a director
app.get('/movies/directors/:directorName', (req, res) => {
  const { directorName } = req.params;
  const director  = movies.find( movie => movie.director.name === directorName).director;

  if (director) {
    res.status(200).json(director);
  } else {
    res.status(400).send('There is no such genre in this list of movies');
  }
})

//Allow new users to register
app.post('/users', (req, res) => {
  const newUser = req.body;
if (newUser.name) {
  newUser.id = uuid.v4();
  users.push(newUser);
  res.status(201).json(newUser);
} else {
  res.status(400).send('The new user must have a name')
}
})

//Allow users to update their user info (username)
app.put('/users/:id', (req, res) => {
  const { id } = req.params; //this id is a string
  const updatedUser = req.body;

    let user = users.find(user => user.id == id); // this has 2 = because we are comparing string to number

    if (user) {
      user.name = updatedUser.name;
      res.status(200).json(user);
    } else {
      res.status(400).send('The user could not be found');
    }
})

//Allow users to add a movie to their list of favorites 
app.post('/users/:id/:movieTitle', (req, res) => {
  const { id, movieTitle } = req.params;

    let user = users.find(user => user.id == id);

    if (user) {
      user.favoriteMovies.push(movieTitle);
      res.status(200).json(user);
    } else {
      res.status(400).send(`${movieTitle} has been added to the user ${id}\'s list of favorites`);
    }
})

//Allow users to remove a movie from their list of favorites
app.delete('/users/:id/:movieTitle', (req, res) => {
  const { id, movieTitle } = req.params;

    let user = users.find(user => user.id == id);

    if (user) {
      user.favoriteMovies =user.favoriteMovies.filter(title => title !== movieTitle);
      res.status(200).send(`${movieTitle} has been removed from the user ${id}\'s list of favorites`);
    } else {
      res.status(400).send('There is no such user')
    }
})

//Allow existing users to deregister 
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;

    let user = users.find(user => user.id == id);

    if (user) {
      users =users.filter(user => user.id != id)
      res.status(200).send(`User ${id} has been deleted`)
    } else {
      res.status(400).send('There is no such user')
    }
})

// listen for requests
app.listen(8080, () => console.log('Your app is listening on port 8080.'));