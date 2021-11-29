document.addEventListener('DOMContentLoaded', function () {
    var elms = document.querySelectorAll('.slider');
    for (var i = 0, len = elms.length; i < len; i++) {
        new ChiefSlider(elms[i]);
    }
});