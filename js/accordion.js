window.addEventListener("DOMContentLoaded", function() {
    $(function () {
        $("#accordion").accordion({
            icons: false,
            active: false,
            heightStyle: "content",
            collapsible:true
        });

    });

    document.querySelectorAll('.section-questions__link').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            document.querySelectorAll('.icon_circle').forEach(function(icon) {
                if (icon.dataset.target!=path) {
                    icon.classList.remove('section-questions__circle')
                }
    
            })
            document.querySelector(`[data-target=${path}]`).classList.toggle('section-questions__circle')
        })
    })

    let numCall = -1;
    document.querySelectorAll('.section-questions__item').forEach(function(event) {
        numCall++
        event.setAttribute('data-index', numCall.toString())
    })


    document.querySelectorAll('.section-questions__item').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('mouseover', function(event) {
            let currNum = event.currentTarget.dataset.index
            if (parseInt(currNum)!=numCall) {          
                for (let i = parseInt(currNum); i <= parseInt(currNum)+1; i++) {
                    document.querySelector(`[data-index="${i}"]`).classList.add('section-questions__item-hover');
                }
                
            }
            else {
                document.querySelector(`[data-index="${numCall}"]`).classList.add('section-questions__item-hover');
                document.querySelector('.section-questions__list').classList.add('section-questions__item-hover');
            }
            
        })
        tabsBtn.addEventListener('mouseout', function() {
            document.querySelectorAll('.section-questions__item').forEach(function (tabsBtnMini) {
                tabsBtnMini.classList.remove('section-questions__item-hover')
            document.querySelector('.section-questions__list').classList.remove('section-questions__item-hover')
            })
        })
    })
}) 