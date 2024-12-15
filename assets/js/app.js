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

//colors array
const colors = [
    { "hex": "#FF0000" },
    { "hex": "#00FF00" },
    { "hex": "#0000FF" },
    { "hex": "#FFFF00" },
    { "hex": "#00FFFF" },
    { "hex": "#FF00FF" },
    { "hex": "#000000" },
    { "hex": "#FFFFFF" },
    { "hex": "#808080" },
    { "hex": "#A9A9A9" },
    { "hex": "#D3D3D3" },
    { "hex": "#FFA500" },
    { "hex": "#FFC0CB" },
    { "hex": "#FF69B4" },
    { "hex": "#FF1493" },
    { "hex": "#800080" },
    { "hex": "#EE82EE" },
    { "hex": "#A52A2A" },
    { "hex": "#D2691E" },
    { "hex": "#00FF00" },
    { "hex": "#008080" },
    { "hex": "#40E0D0" },
    { "hex": "#00008B" },
    { "hex": "#87CEEB" },
    { "hex": "#4169E1" },
    { "hex": "#000080" },
    { "hex": "#FFD700" },
    { "hex": "#F5F5DC" },
    { "hex": "#FFFFF0" },
    { "hex": "#E6E6FA" },
    { "hex": "#FA8072" },
    { "hex": "#DC143C" },
    { "hex": "#FF7F50" },
    { "hex": "#98FF98" },
    { "hex": "#228B22" },
    { "hex": "#808000" },
    { "hex": "#800000" },
    { "hex": "#6A5ACD" },
    { "hex": "#4B0082" },
    { "hex": "#F0E68C" },
    { "hex": "#CCCCFF" },
    { "hex": "#DDA0DD" },
    { "hex": "#A0522D" },
    { "hex": "#D2B48C" }
];


// card.addEventListener("click",()=>{
//     color.style.display = "block";
// })

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
    card.style.boxShadow = shadow.value +'px'+' '+shadow.value +'px'+' '+shadow.value +'px'+' '+'black';
})

colors.forEach(c=>{
    console.log(c);
    color.innerHTML += `<option value = ${c.hex} style = "background-color : ${c.hex};"></option>`
})




// -------------------------------

downloadBtn.addEventListener("click",()=>{
    html2canvas(card).then(canvas =>{
        let dataUrl = canvas.toDataURL("image/png");
        download(dataUrl,"card.png","image/png")
    })
})