function errFunc(){
    throw "error";
    console.log("this code will not be executed");
}

function func(){
    try{
        console.log("function - 1");
        errFunc();
        console.log("function - 2");
    }
    finally{
        console.log("finally in fuction- this code will always be executed");
    }
}

try{
    console.log("try -1");
    func();
    console.log("try -2 ");
}
catch(e){
    console.log("catch error :",e);
}
finally{
    console.log("finally- this code");
}