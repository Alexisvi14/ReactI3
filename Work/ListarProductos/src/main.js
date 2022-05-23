const showBtn = document.querySelector(".btn-showList")
const prodCont = document.querySelector(".container-product")
const URLApi = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"

const handleClick = () => {
    prodCont.innerHTML = ""

    fetch(URLApi)
        .then(res => res.json())
        .then(data => {
            data.forEach(({ name, price }) => {
                let template = `
            <li class="product-item">
                    <a href="#">
                        <img class="item-img" src="./public/img.png">
                    <p class="item item-name">Nombre: ${name}</p>
                    <p class="item item-price">Precio: ${price}</p>
                    </a>
                </li>
            `
                prodCont.innerHTML += template;
            })
        })

    showBtn.removeEventListener("click", handleClick)
    showBtn.classList.replace("active", "inactive")
}

showBtn.addEventListener("click", handleClick)