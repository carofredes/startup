

function movie(){
    this.attributes = [];
}


movie.prototype ={
		
        play : function(){
            console.log("Now playing "+this.get("title"));
        },
 
       stop :function(){
            console.log("Now sttoped  "+this.get("title"));
        },
        set :function(key, value){
        	 this.attributes[key]=value;
        },
        get :function(key){
        	return this.attributes[key];
        }
}
 

var test = new movie();
test.set("title","oblivion");
console.log(test.get("title"));
test.play();

// export (expose) foo to other modules
module.export = movie;

