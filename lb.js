document.body.style.backgroundColor = localStorage.getItem('backgroundColor');


function displayValues() {
    let storedValues = JSON.parse(localStorage.getItem("point")) || [];
    storedValues.sort((a, b) => b - a);  // 내림차순 정렬
    
    const list = document.getElementById("list");
    list.innerHTML = "";  // 기존 목록을 비움
    storedValues.forEach(value => {
        let li = document.createElement("li");
        li.textContent = value;
        list.appendChild(li);
    });
}

function displayValues() {
    let storedValues = JSON.parse(localStorage.getItem("point")) || [];
    storedValues.sort((a, b) => b - a);  // 내림차순 정렬
    
    const list = document.getElementById("list");
    list.innerHTML = "";  // 기존 목록을 비움
    storedValues.forEach(value => {
        let li = document.createElement("li");
        li.textContent = value;
        list.appendChild(li);
    });
}

displayValues()