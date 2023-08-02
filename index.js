
// console.log(date.getHours(),date.getMinutes(),date.getSeconds());

setInterval(()=> {
    const date = new Date()
    document.getElementById("hr").textContent = date.getHours();
    document.getElementById("min").textContent = date.getMinutes();
    document.getElementById("sec").textContent = date.getSeconds();
},1000);

