function toy(num) {
    let adr = "images/s" + num + ".png";
    let table = document.querySelector("#left2");
    let nimg = document.createElement('img');
    let box = table.getBoundingClientRect();
    nimg.setAttribute('src', adr);
    nimg.setAttribute('class', 'dragb');
    nimg.style.left = Math.floor(Math.random() * 260) +  box.left + "px";
    nimg.style.top = Math.floor(Math.random() * 600 + 2) + box.top + "px";
    table.appendChild(nimg);

}

function nam() {
    let arr = [[0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0],
               [1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0],
               [1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0], 
               [1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0], 
               [1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0]];
	let list = document.querySelectorAll(".dragb");
    	let k = 0;
    for (let i = 0; i < 29; i++) {
        for (let j = 0; j < 5; j++) {
            if (arr[j][i] == 1) { 
                list.item(k).style.left = (i + 1) * 40 + "px";
                list.item(k).style.top = (j + 1) * 40 + "px";
                list.item(k).style.zIndex = "111";
                k++;
            }
            if (k == list.length) break;
        }
        if (k == list.length) break;
    }
}


function init() {
    let table = document.querySelector("#right2");
    let box = table.getBoundingClientRect();
    let tree = document.querySelector(".dragt");
    tree.style.left = 85 + box.left + "px";
    tree.style.top = 55 + box.top + "px";
}
