const products = document.querySelector('.products')
const buttonShowAll = document.querySelector('.show-all')
const buttonDiscount = document.querySelector('.discount')
const buttonTotal = document.querySelector('.total')
const buttonSnacks = document.querySelector('.snacks')
let myMenu = ''


function showAll(productsArray) {
        myMenu= ''

        productsArray.forEach(item => {
                myMenu += `
                 <li>
                        <img src="${item.src}" alt="${item.name}">
                        <p>${item.name}</p>
                        <p class="item-price">R$ ${item.price.toFixed(2)}</p>
                 </li>
                `
        })
        products.innerHTML = myMenu
}

function discountAllItens(){
        const newPrice = menuOptions.map ((product) => ({
                ...product,
                price: product.price * 0.9
}))
        showAll(newPrice)
}

function totalItens() {
        const result = menuOptions.reduce((acc, value) =>  acc + value.price, 0 )

        const newPrice = menuOptions.map ((product) => ({
                ...product,
                price: product.price * 0.9}))

        const priceDiscount = newPrice.reduce ((acc, value) => acc + value.price, 0 )

        const totalDiscount = result - priceDiscount

        products.innerHTML = `
        <li>
                <p>Valor total sem desconto:</p>
                <p class="item-price">R$ ${result.toFixed(2)}</p>
        </li>
        <li>
                <p>Valor total com desconto:</p>
                <p class="item-price">R$ ${priceDiscount.toFixed(2)}</p>
        </li>
        <li>
                <p>Você economizara:</p>
                <p class="item-price"><br> R$ ${totalDiscount.toFixed(2)}</p>
        </li>
        `
}

function snacks() {
        const newMenu = menuOptions.filter (snacks => snacks.food == true)

        showAll(newMenu)
}
        
       
buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonDiscount.addEventListener('click', discountAllItens)
buttonTotal.addEventListener('click', totalItens)
buttonSnacks.addEventListener('click', snacks)