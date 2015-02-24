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
