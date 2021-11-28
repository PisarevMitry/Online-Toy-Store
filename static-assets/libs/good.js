function openDescription(k) {
    let elements = document.querySelectorAll('#main > div.specifications > ul >li > div.description');
    if (elements[k].style.display == 'none') {
        elements[k].style.display = 'block';
    }
    else {
        elements[k].style.display = 'none'
    }
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}