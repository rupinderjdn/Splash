const panels = document.querySelectorAll('.panel')

// Here what we are basically trying to do is when the "click" event happens we remove "active" classes from all the divs and then "active" class to the one which was clicked
panels.forEach(panel => {
    panel.addEventListener("click", function () {
        removeActiveClasses()
        panel.classList.add('active')
    })
});
function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    });
}