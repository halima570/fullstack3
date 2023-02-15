let shop = document.getElementById("shop");

let shopitems=[{
    id:'1',
     name:'pc portable',
     price:'13443',
     desc:'PC Portable HP Pavilion 15 i5-1135G7 15.6 8Gb 256Go SSD',
    img:'image/image.jpg',
    
},
{
    id:'2',
     name:'iPhone 14 Pro Max',
    price:'455',
    desc:'128GB Violet Intense 6,7" Deep Purple 6Gb',
   
    img:'image/image2.jpg',
    
}
,{
    id:'3',
    name:'Imprimante',
    price:'233',
    desc:'Acheter Canon PIXMA G3420 Imprimante Multifonction',
    img:'image/image3.jpg',
},{
    id:'4',
    name:'Chargeur',
    price:'123',
    desc:'Buy Chargeur portable Power Bank 25800mAh',
    img:'image/image4.jpg',
}
];
let basket=JSON.parse(localStorage.getItem("data")) || [];
console.log(basket);

let generateShop = () => {
    return shop.innerHTML = shopitems.map((x)=>{
       
        let {id,name,price,img,desc}=x;//ila dart xf lawal doesn't work
         let search=basket.find((x)=>x.id===id)||[];
        return`<div class="item" id="product-${id}">
<img width="210px" src="${img}">
<div class="detail">
    <h3>${name}</h3>
    <p>${desc}</p>
    <div class="price-quantity">
        <h2>${price}dh</h2>
        <div class="button">
            <i onclick="decrement(${id})" class="bi bi-dash-square"></i>
            <div id="${id}" class="quantity"> ${search.item === undefined ? 0 : search.item}</div>
            <i onclick="increment(${id})" class="bi bi-plus-square"></i>
        </div>
    </div>
</div>
</div>`
    }).join('') 
    
  };
  
  generateShop();


const increment =(id)=>{
  
let search = basket.find((x) => x.id === id);

if (search === undefined) {
    basket.push({
      id: id,
      item: 1,
    });}
 else {
  search.item += 1;
}
localStorage.setItem("data",JSON.stringify(basket));
//console.log(basket);
update(id);
};
const decrement =(id)=>{
 

    let search = basket.find((x) => x.id === id);
    if (search === undefined) return;
    else if (search.item==0) return;
else {
search.item -= 1;
    }update(id);  
    basket = basket.filter((x) => x.item !== 0);
  
    //console.log(basket)
    
    localStorage.setItem("data", JSON.stringify(basket));
};
const update=(id)=>{

    let search = basket.find((x) => x.id === id);
    // console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation();
};
let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};


calculation();

