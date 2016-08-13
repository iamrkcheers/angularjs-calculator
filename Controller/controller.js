module.controller("greetcontroller",function($scope,greetfactory){
    $scope.init=function(operation){
        var fn=$scope.fname;
        var ln=$scope.lname;
        console.log("hi"+operation);
        $scope.result=greetfactory[operation](fn,ln);
        console.log("Hello !");
        }   
})