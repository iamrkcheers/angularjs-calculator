module.factory("greetfactory",function(){
    var object={
        add:function(fname,lname){
            return parseInt(fname)+parseInt(lname);
        },
         subtract:function(fname,lname){
            return parseInt(fname)-parseInt(lname);
        },
        divide:function(fname,lname){
            return parseInt(fname)/parseInt(lname);
        },
        multiply:function(fname,lname){
            return parseInt(fname)*parseInt(lname);
        }
    };
    return object;
})