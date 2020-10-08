const gfx = [
    {
        id: 1,
        name:"  MSI GeForce GTX 1650 D6 Gaming X 4GB GDDR6 (GTX 1650 D6 GAMING X)",
        price:879
    },
    {
        id: 2,
        name:" Gigabyte GeForce GTX 1050Ti Windforce OC 4GB GDDR5 (GV-N105TOC-4GD)",
        price:649
    },
    {
        id: 3,
        name:" Gigabyte Radeon RX 570 Gaming 8GB GDDR5 (GV-RX570GAMING-8GD) ",
        price:759

    },

]
       const mb = [

           {
          id: 1,
         name:"Gigabyte B450 AORUS ELITE",
         price:409,
           socket:"AM4"
           },
           {
          id: 2,
          name: "Gigabyte X570 GAMING X",
          price: 769,
               socket:"AM4"
           },
           {
          id: 3,
          name: "Gigabyte GA-A320M-S2H" ,
          price: 239,
               socket:"AM4"
           },
]
const cpu = [

    {
        id: 1,
        name:" AMD Ryzen )",
        price:929,
        socket:"AM4"
    },
    {
        id: 2,
        name: "Intel Core i5-9400F, 2.9GHz, 9 MB, BOX (BX80684I59400F)",
        price: 599,
        socket:"1151 (Coffee Lake)"
    },
    {
        id: 3,
        name: " Intel Pentium Gold G5400, 3.7GHz, 4 MB, BOX (BX80684G5400)",
        price: 249,
        socket:"1151 (Coffee Lake)"
    },
]
cart = [
    {
        name:"mainbord",
        price: 0,
    },
    {
        name:"graphic card",
        price: 0,
    },
    {
        name:"processor",
        price: 0,
    },
]







let summaryCompHandler = document.getElementById("summaryComp")

function sumCart(koszyk){
    console.log("Ilość elementów w koszyku:"+koszyk.length)
    let cena = 0;
    for (let i=0; i<koszyk.length; i++)
        cena = cena + koszyk.price
        return cena;



}
sumCart(cart)



function addOpt(elem,optValue,textOpt) {
    let select1 = document.getElementById(elem);
    option = document.createElement("option");
    option.setAttribute("value",optValue);
    const textOption=document.createTextNode(textOpt);
    option.appendChild(textOption);
    select1.appendChild(option);
}

function SelectedItemValue(SelectId) {
    const selectedItem = document.getElementById(SelectId)
    console.log(SelectId)
    let strAtt = selectedItem.options[selectedItem.selectedIndex].getAttribute('value');
    console.log("Wybrany element ma ID:" + strAtt);

    const summaryCpu = document.getElementById("summaryCpu")
    const summaryMb = document.getElementById("summaryMb")
    const summaryGfx = document.getElementById("summaryGfx")
    summaryCpu.innerHTML="Kot ma Ale"

    if (selectedItem == "cpu") {
        summaryCpu.innerHTML = "<td>" + cpu[strAtt - 1].name + "</td><td>" + cpu[strAtt - 1].price + "</td>"
        cart[2].price = cpu[strAtt - 1].price
        cart[2].name = cpu[strAtt - 1].name
    } else if (selectedItem == "mb") {
        summaryMb.innerHTML = "<td>" + mb[strAtt - 1].name + "</td><td>" + mb[strAtt - 1].price + "</td>"
        cart[1].name = mb[strAtt - 1].name
        cart[1].price = mb[strAtt - 1].price
        console.log("Cena mb:"+cart[1].price)
    } else if (selectedItem == "gpu") {
        summaryGfx.innerHTML = "<td>" + gfx[strAtt - 1].name + "</td><td>" + gfx[strAtt - 1].price + "</td>"
        summaryMainbord = gfx[strAtt - 1].price
        cart[0].name = gfx[strAtt - 1].name
        return(parseInt(strAtt));
    } else {
    }
}

document.getElementById("summaryMainbord").innerHTML="Suma:"+(cart[0].price+cart[1].price+cart[2].price)





for (let i=0;i<mb.length; i++) {
    addOpt("mb",mb[i].id, mb[i].name)

}

for (let i=0;i<gfx.length; i++) {
    addOpt("gpu",gfx[i].id, gfx[i].name)

}

for (let i=0;i<cpu.length;i++) {
    addOpt("cpu",cpu[i].id, cpu[i].name)
}