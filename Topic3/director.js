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

