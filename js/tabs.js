window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.step-btn__pref').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {

            document.querySelectorAll('.step-btn__pref').forEach(function(currTab) {
                console.log(currTab)
                currTab.classList.remove('step-btn__pref-active')
            })

            event.currentTarget.classList.add('step-btn__pref-active')

            const path = event.currentTarget.dataset.path
            document.querySelectorAll('.section-way-we-do__descr').forEach(function(tabContent) {
                tabContent.classList.remove('section-way-we-do__descr-acitve')
                
            })
            
            document.querySelectorAll('.section-way-we-do__right').forEach(function(tabImage) {
                tabImage.classList.remove('section-way-we-do__descr-acitve')
            })
            
            
            document.querySelectorAll(`[data-target="${path}"]`).forEach(function(event) {
                event.classList.add('section-way-we-do__descr-acitve')
            })
            
        })
    })
})