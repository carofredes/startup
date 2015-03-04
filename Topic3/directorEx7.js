var jquery = require('./jquery-2.1.3.js');
var movie7 = require('./movieEx7.js');

function director7(n){
    this.movies = [];
    this.name= n;
    this.quotes = [];
}


director7.prototype ={
		
    addMovie:function(movie){
        this.movies.push(movie);
    },
    getMovies:function(){
        return this.movies;
    },
    getName :function(){
        return this.name;
    },
    speak: function(){
        console.log(this.name+" says: "+this.quotes) ;
     
    },
    set: function(q){
        this.quotes.push(q);
    }
}
 
module.exports = director7;

var alien = new movie7();
var ridleyScott = new director7("Ridley Scott");
ridleyScott.set(['Cast is everything.', 'Do what ...']);
alien.set("director", ridleyScott);
alien.get("director").speak();

