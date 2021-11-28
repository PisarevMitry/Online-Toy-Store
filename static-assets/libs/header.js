function openDropdownNav() {
    if (document.getElementById('dropdown_nav_container').style.display == 'block') {
        document.getElementById('dropdown_nav_container').style.display = 'none';
        document.getElementById('main').style.display = 'block';
        document.getElementById('footer').style.display = 'block';
        let elements = document.querySelectorAll('#header > nav > ul > li > span');
        for (let elem of elements) {
            elem.style.color = 'white';
        }
        elements = document.querySelectorAll('#header > nav > ul > li:nth-child(1) > div > button > span');
        for (let elem of elements) {
            elem.style.color = 'white';
        }
    } else {
        document.getElementById('dropdown_nav_container').style.display = 'block';
        document.getElementById('main').style.display = 'none';
        document.getElementById('footer').style.display = 'none';
        let elements = document.querySelectorAll('#header > nav > ul > li > span');
        for (let elem of elements) {
            elem.style.color = 'black';
        }
        elements = document.querySelectorAll('#header > nav > ul > li:nth-child(1) > div > button > span');
        for (let elem of elements) {
            elem.style.color = 'black';
        }
    }
}

function openDropdownNavSecondLevel(k) {
    let elements = document.querySelectorAll('#dropdown_nav_container > div > ul > li > div');
    for (let elem of elements) {
        elem.style.display = 'none'
    }
    if (elements[k].style.display == 'none') {
        elements[k].style.display = 'block';
    }
}
