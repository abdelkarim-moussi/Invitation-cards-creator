const card = document.querySelector(".card");
const cardTitle = document.querySelector(".card-title");
const cardDescreption = document.querySelector(".card-description");
const cardImage = document.querySelector(".card-image");
const downloadBtn = document.getElementById("download");

const color = document.getElementById("color");
const fontSize = document.getElementById("font-size");
const borderSize = document.getElementById("border-size");
const borderRadius = document.getElementById("border-radius");
const shadow = document.getElementById("shadow");


color.addEventListener("change",()=>{
    card.style.backgroundColor = color.value;
})

fontSize.addEventListener("input",()=>{
    cardTitle.style.fontSize = fontSize.value +'px';
})

borderSize.addEventListener("input",()=>{
    card.style.borderWidth = borderSize.value +'px';
})

borderRadius.addEventListener("input",()=>{
    card.style.borderRadius = borderRadius.value +'px';
})

shadow.addEventListener("input",()=>{
    card.style.boxShadow = `${shadow.value}px ${shadow.value}px ${shadow.value}px rgba(0, 0, 0, 0.5)`;
})



// -------------------------------

downloadBtn.addEventListener("click",()=>{
    html2canvas(card).then(canvas =>{
        let dataUrl = canvas.toDataURL("image/png");
        download(dataUrl,"card.png","image/png")
    })
})