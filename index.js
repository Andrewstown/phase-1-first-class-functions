function spy(){
    return function(){
        print("yes")
    }
}

function receivesAFunction(func){
    return func()
}

function returnsANamedFunction(){
    return spy
}

function returnsAnAnonymousFunction(){
    return function(){print("no")}
}