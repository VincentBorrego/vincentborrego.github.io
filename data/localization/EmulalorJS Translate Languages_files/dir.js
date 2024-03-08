window.addEventListener('load', function () {
    var filelist = document.getElementsByClassName('n');
    for(var index = 0; index < filelist.length; index++){
        let folder = new URL(filelist[index].childNodes[0].href).pathname;
        console.log(folder);
        if(folder == "/js/"){
            filelist[index].parentElement.remove();
        }
    }
    for(var index = 0; index < filelist.length; index++){
        let folder = new URL(filelist[index].childNodes[0].href).pathname;
        console.log(folder);
        if(folder == "/css/"){
            filelist[index].parentElement.remove();
        }
    }
})
