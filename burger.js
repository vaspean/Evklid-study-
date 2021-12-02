

window.addEventListener('DOMContentLoaded', function () {
        document.querySelector('.burger').addEventListener('click', function () {
            document.querySelector('#menu').classList.add('is-active')
        })
        document.querySelectorAll('.svg_close').forEach(function(svg_close){
            svg_close.addEventListener('click', function () {
                document.querySelector('#menu').classList.remove('is-active')
            })
        }) 
})