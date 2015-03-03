var movie = require('./movie.js');

function director(n){
    this.movies = [];
    this.name= n;
}


director.prototype ={
		
    addMovie:function(movie){
        this.movies.push(movie);
    },
    getMovies:function(){
        return this.movies;
    },
    getName :function(){
        return this.name;
    }
}
 
module.exports = director;


var oblivion = new movie();
var dire = new director("Joseph Kosinski");
console.log(dire.getName());


oblivion.set("title","oblivion");
oblivion.set("duration","120 minutes");
console.log(oblivion.get("title"));
oblivion.play();
dire.addMovie(oblivion);
console.log(dire.getMovies());
var tron = new movie();
tron.set("title","tron");
tron.set("duration","110 minutes");
tron.stop();
dire.addMovie(tron);
console.log(dire.getMovies());



