function MovieObserver() {
  this.observerList = [];
}
 
MovieObserver.prototype = {
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

function Movie() {
	this.attributes = [];
	this.observers = new MovieObserver();
}

Movie.prototype = {
	play:function(){
		console.log("PLAY "+this.get("title"));
        this.notify("PLAY ");
	},

	stop:function(){
		console.log("STOP "+this.get("title"));
        this.notify("STOP ");
	},

	set:function(key,value){
		this.attributes[key]=value;
	},

	get:function(key){
		return this.attributes[key];
	},

	notify:function(context){
		var m_count = this.observers.Count();
           
   		for( var i = 0; i < m_count; i++ )
      this.observers.GetAt(i).Update( context );
	},

	addObserver :function( observer ){
  		this.observers.add( observer );
	},
 
	removeObserver:function( observer ){
  		this.observers.removeAt( this.observers.indexOf( observer, 0 ) );
	},
 
	notify :function( context ){
  	var observerCount = this.observers.count();
  		for(var i=0; i < observerCount; i++){
    		this.observers.get(i).update( context );
  		}
	}
}


var myMovie = new Movie();
myMovie.set("title","oblivion");
console.log(myMovie.get("title"));
myMovie.set("director","Joseph Kosinski");
var dir = "The director of "+myMovie.get("title")+" is "+myMovie.get("director");
console.log(dir);
myMovie.play();
myMovie.stop();
var myMovie2 = new Movie();
myMovie2.set("title","Harry");
myMovie2.play();
console.log(myMovie2.get("title"));
myMovie2.stop();
