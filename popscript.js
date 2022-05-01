var drop = document.getElementById('bass');

function mead() {
    document.getElementById('mead').style.display = 'block';
    document.getElementById('rup').style.display = 'none';
    document.getElementById('yeafi').style.display = 'none';
    document.getElementById('farin').style.display = 'none';
    drop.play()
}

function rup() {
    document.getElementById('mead').style.display = 'none';
    document.getElementById('rup').style.display = 'block';
    document.getElementById('yeafi').style.display = 'none';
    document.getElementById('farin').style.display = 'none';
    drop.play()
}

function yeafi() {
    document.getElementById('mead').style.display = 'none';
    document.getElementById('rup').style.display = 'none';
    document.getElementById('yeafi').style.display = 'block';
    document.getElementById('farin').style.display = 'none';
    drop.play()
}

function farin() {
    document.getElementById('mead').style.display = 'none';
    document.getElementById('rup').style.display = 'none';
    document.getElementById('yeafi').style.display = 'none';
    document.getElementById('farin').style.display = 'block';
    drop.play()
}