// Sun Mode ==========================================================================================

var global_sunmode = false;

function sunMode(){
    global_sunmode = !global_sunmode;
    if(global_sunmode){
        $("#stage").addClass("sun-mode");
    }else{
        $("#stage").removeClass("sun-mode");
    }
}
// Parametros ==========================================================================================

var global_params = {};

function get_params(){
    var url = window.location.toString();
    var urlar = url.split("?");
    if(urlar.length > 1){
        var params = urlar[1].split("&");
        for(var i=0; i<params.length; i++){
            var pair = params[i].split("=");
            if(pair.length > 1){
                global_params[pair[0]] = pair[1];
            }
        }
    }
    
}

// inicialização ==========================================================================================
$( document ).ready(function() {
    get_params();
    if(typeof global_params['hist'] != 'undefined'){
        if(global_params['hist'])

    }
});