document.addEventListener('DOMContentLoaded', function (){
    console.log('ya cargué el DOM')
    $.get('/blogs', function (res) {
        console.log(res)
    })
})