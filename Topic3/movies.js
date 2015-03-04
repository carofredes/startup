(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


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

},{}]},{},[1]);
