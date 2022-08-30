var sa = 0;
function ext(a){
    if (a == 1){
        for(var i = 0;i<5;i+=1){
            document.getElementsByClassName("sbt")[i].style.display = 'block';
            document.getElementsByClassName("sbt")[i].style.opacity = '100';
        }
        document.getElementById("ck").style.display = 'block';
        document.getElementById("ckl").style.display = 'block';
        document.getElementById("sidebar").style.width = '80%';
    }
    else{
        if(sa == 0){
            document.getElementById("ck").style.display = 'none';
        document.getElementById("ckl").style.display = 'none';
        document.getElementById("sidebar").style.width = '0%';
        for(var i = 0;i<5;i+=1){
            document.getElementsByClassName("sbt")[i].style.display = 'none';
            document.getElementsByClassName("sbt")[i].style.opacity = '0';
            }
        }
        else{

        }
    }
}
function extc(a){
    if (a == 1){
        for(var i = 0;i<5;i+=1){
            document.getElementsByClassName("sbt")[i].style.display = 'block';
            document.getElementsByClassName("sbt")[i].style.opacity = '100';
        }
        document.getElementById("ck").style.display = 'block';
        document.getElementById("ckl").style.display = 'block';
    }
}
function chs(checkbox) {
    if(checkbox.checked == true){
        document.getElementById("sidebar").style.width = '80%';
        ////document.getElementById("sidebar").classList.add("ext");
        ////document.getElementById("wrapper").classList.add("ext");
        sa = 1;
    }
    else{
        sa = 0;
        document.getElementById("sidebar").style.width = '0%';
        /////document.getElementById("sidebar").classList.remove("ext");
        ///////document.getElementById("wrapper").classList.remove("ext");
    }
}