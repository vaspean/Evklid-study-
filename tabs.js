let paths =  ['one', 'two', 'three', 'four'];
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.step-list__item').forEach(function(tabsConsultation) {
        tabsConsultation.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            tabsConsultation.style.color = "#FF9900"
            for (let i = 0; i < paths.length; ++i) {
                if (paths[i] !== path) {
                    document.querySelector(`[data-path="${paths[i]}"]`).style.color = '#333333'
                }
            }
            document.querySelectorAll('.consultation').forEach(function(tabContent) {
                tabContent.classList.add('tabDisplayNone') 
            })
            document.querySelector(`[data-target="${path}"]`).classList.remove('tabDisplayNone')
        })
    })
})