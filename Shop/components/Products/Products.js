class Products {
    constructor() { 
        this.classNameActive = 'products-element__btn_active';
        this.labelAdd = 'Добавить в корзину';
        this.labelRemove = 'Удалить из корзины';
    
    }
// метод при нажатии кнопки кнопка меняет название и в LjcalStoreg добавляется или удаляется элемент
    handleSetLocationStorage(element, id) {
        const {
            pushProducts: pushProducts,
            products: products,
        } = localStorageUtil.putProducts(id);

        if (pushProducts) {
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;
        } else { 
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
        }

        headerPage.render(products.length); // для изменения колличества товара в header без перезагрузки страницы
    }




// метод который отобразит данные на странице
    render() {
        let productsStore = localStorageUtil.getProducts();
        let htmlCatolog = '';

        CATALOG.forEach(({ id, name, price, img }) => {
            let activeClass = '';
            let activeText = '';

            // если совпадений не найдено добавляем в корзину надпись
            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;
                
            } else {
                activeText = this.labelRemove;
                activeClass = ' ' + this.classNameActive;
            }

            htmlCatolog += `
            <li class="products-element"> 
               <span class="products-element__name">${name}</span>
               <img class="products-element__img" src="${img}"/>
               <span class="products-element__price">
                 🌟 ${price.toLocaleString()} USD  
               </span>
               <button class="products-element__btn${activeClass}" onclick ="productsPage.handleSetLocationStorage(this, '${id}')">
               ${activeText}
               </button>
            </li>  
            `;
            //console.log(id, name, price, img); // выводятся данные как отдельные переменные
        });
        const html = `
        <ul class="products-container">
        ${htmlCatolog}
        </ul>
        `;
        // вставляем элементы с массива catolog на страницу index.html
        ROOT_PRODUCTS.innerHTML = html;

    }
}

// создаём экземпляр класса
const productsPage = new Products();