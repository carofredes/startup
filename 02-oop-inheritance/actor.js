function ObserverList() {
    this.observerList = [];
}
 
ObserverList.prototype = {
  add:function( obj ){
      return this.observerList.push( obj );
  },
  count:function(){
      return this.observerList.length;
  },
  get: function( index ){
      if( index > -1 && index < this.observerList.length ){
       return this.observerList[ index ];
      }
  },
  indexOf : function( obj, startIndex ){
    var i = startIndex;
    while( i < this.observerList.length ){
        if( this.observerList[i] === obj ){
            return i;
        }
        i++;
      }
      return -1;
  },
  removeAt :function( index ){
      this.observerList.splice( index, 1 );
  }
}

function Observer() {
    this.update = function(context){
        console.log(context);
    };
}

var movieModule = (function () {
  // privates
  var attributes = [];
  var observers = new ObserverList();
  attributes.actors = []; 

  // Return an object exposed to the public
  return {
  play:function(){
      console.log("PLAY "+attributes["title"]);
      this.notify("PLAY ");
  },

  stop:function(){
    console.log("STOP "+this.get("title"));
    this.notify("STOP ");
  },

  set:function(key,value){
    attributes[key]=value;
  },

  get:function(key){
    return attributes[key];
  },
  addObserver:function( observer ){
    observers.add( observer );
  },
  removeObserver:function( observer ){
    observers.removeAt( observers.indexOf( observer, 0 ) );
  },
  notify:function (context) {
    var observerCount = observers.count();
      for(var i=0; i < observerCount; i++){
         observers.get(i).update( context );
      }
  },
  addActor : function(actor) {
    attributes.actors.push(actor);
  },
  getActors : function() {
    var output = [],
    length = attributes.actors.length;
    for (var i = 0; i<length; i++) {
      output.push(attributes.actors[i].name);
    }
    return ("Actors: " +output);
  }
}
})();

var Actor = function(name, age) {
  var movies = [];
  this.name = name;
  this.age = age;
  this.addMovie = function(movie) {
    movies.push(movie);
  }
  this.getMovies = function() {
    return movies;
  }
}

var observer = new Observer();
movieModule.addObserver(observer);
movieModule.set("title","oblivion");
console.log(movieModule.get("title"));
movieModule.set("director","Joseph Kosinski");
var dir = "The director of "+movieModule.get("title")+" is "+movieModule.get("director");
console.log(dir);
movieModule.play();
movieModule.stop();
var tom = new Actor("Tom Cruise", 52);
tom.addMovie("oblivion");
movieModule.addActor(tom);
console.log(movieModule.getActors());
