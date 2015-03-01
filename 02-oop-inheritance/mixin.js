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

function Movie() {
	this.attributes = [];
	this.observers = new ObserverList();
}

Movie.prototype = {
	play:function(){
		console.log("Now playing "+this.get("title"));
        this.notify("PLAY ");
	},

	stop:function(){
		console.log("Now sttoped  "+this.get("title"));
        this.notify("STOP ");
	},

	set:function(key,value){
		this.attributes[key]=value;
	},

	get:function(key){
		return this.attributes[key];
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

var Social = {
	share: function(friendName){
        console.log("Sharing "+this.get("title")+" whit "+friendName);
	},
	like: function(){
		console.log("like!");
	}
};
function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination; 
}
extend( Movie.prototype, Social );


var ironman2 = new Movie();
ironman2.set("title", "Iron Man 2");
console.log(ironman2.get("title"));
ironman2.share('V. Rivas'); 
ironman2.like();
