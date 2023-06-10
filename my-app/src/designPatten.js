export var Calculate = function(){
    this.value = '';
} 
Calculate.prototype = {
    set: function(value){
        this.value = value;
    } ,
    get: function(obj){
        return this.value.get(obj);
    }
}

export var Call = function(){
    this.get = function(obj){
        if(obj.value =='+')return this.get = obj.one + obj.two
        if(obj.value =='-')return this.get = obj.one - obj.two
        if(obj.value =='x')return this.get = obj.one * obj.two
        if(obj.value =='/')return this.get = obj.one / obj.two
    }
}