window.onload = function() {
    const savedColor = localStorage.getItem('backgroundColor');
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
    }
};

function changeBackgroundColor() {
    const color = document.getElementById('colorInput').value;
    if (color) {
        document.body.style.backgroundColor = color;
        localStorage.setItem('backgroundColor', color);
    }
}

function ReSeT(){
    localStorage.clear();
    alert('게임 초기화!');
    document.body.style.backgroundColor = 'beige';
}