function Movie(){
	this.attributes = [];
}

Movie.prototype = {
	play:function(){},
	stop:function(){},
	set:function(key,value){
		this.attributes[key]=value;
	},
	get:function(key){
		return this.attributes[key];
	}
}

var myMovie = new Movie();
myMovie.set("title","oblivion");
console.log(myMovie.get("title"));
myMovie.set("director","Joseph Kosinski");
var dir = "The director of "+myMovie.get("title")+" is "+myMovie.get("director");
console.log(dir);
