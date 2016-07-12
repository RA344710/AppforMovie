var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/test2');

var Schema = mongoose.Schema;
var mySchema = new Schema({
  Title: String,
  Year: String,
  Rated: String,
  Released: String,
  Genre: String,
  Director: String,
  Writer: String,
  Actors: String,
  Plot: String,
  Language: String,
  Country: String,
  Awards: String,
  Poster: String,
  Metascore:String,
  imdbRating: String,
  imdbVotes: String,
  imdbID: String,
  Type: String,
  Response: String
});

var movieSchema=mongoose.model('movieSchema', mySchema);
module.exports=movieSchema;
