

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
 



// export (expose) foo to other modules
module.exports = movie;

var tron = new movie();
tron.set("title","tron");
tron.set("duration","110 minutes");
tron.stop();
