var global_sunmode = false;

function sunMode(){
    global_sunmode = !global_sunmode;
    if(global_sunmode){
        $("#stage").addClass("sun-mode");
    }else{
        $("#stage").removeClass("sun-mode");
    }
}