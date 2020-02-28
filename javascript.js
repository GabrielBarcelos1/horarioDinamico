function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML= `Agora são ${hora} horas e ${minutos} minutos`
    if(hora >= 0 && hora < 12){
        img.src = "img/manha.png"
        document.body.style.backgroundColor = 'rgb(64, 167, 226)'
    }
    else if(hora>=12 &&  hora<=18){
        img.src = "img/tarde.png"
        document.body.style.backgroundColor = 'rgb(240, 228, 122)'
    }else{
        img.src = "img/noite.png"
        document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.493)'
    }
    }
    