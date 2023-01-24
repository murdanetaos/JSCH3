function pii(n,num){
    var name= n;
    var ssn =num;

    return{
        _names: name,

        getName(){
            return "John"
        }
    
        ,N(){
            return "123-45-6789"
        }
    }
};