function displayInfoBox(imgSource, heading, description){
    let d = document.getElementById("display-info");
    document.addEventListener('mousemove', displayFollowCamera);
    d.style.left = event.clientX + 5 + "px";
    d.style.top = event.clientY + 5 +"px";
    d.innerHTML = "<div id = 'wrapper'><img id='imgid' src='"+ imgSource +"'>" + "<p id='heading'>" + heading +
    "</p>" + "<p id='description'>" + description + "</p></div>";
}

function displayFollowCamera(){
    let a = document.getElementById('display-info');
    a.style.left = event.clientX + 5 + "px";
    a.style.top = event.clientY + 5 + "px";
}

function exitInfoBox(){
    let a = document.getElementById("display-info");
    a.removeAttribute('style');
    document.removeEventListener('mousemove', displayFollowCamera);
    a.removeChild(a.childNodes[0]);
}
