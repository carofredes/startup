function director(n){
    this.movies = [];
    this.name= n;
}


director.prototype ={
		
    addMovie:function(movie){
        this.movies.push(movie);
    },
    getName :function(){
        return this.name;
    }
}
 

var dire = new director("pepe");
//dire.addMovie(test);
console.log(dire.getName());

// export (expose) foo to other modules
module.export = director;

var movie = require('./movie.js');
var test = new movie();
test.set("title","oblivion");
console.log(test.get("title"));
test.play();
dire.addMovie(movie);
console.log(dire.getName());
