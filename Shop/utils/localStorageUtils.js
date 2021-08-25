class LocalStorageUtil {
    constructor() {
        this.keyName = 'products';
    }
    // позволяет получить все продукты из храгилища
    getProducts() {
        //чтобы получить из локального хранилища нужно вызвать метод getItem у LocalStorage
        const productsLocalStorage = localStorage.getItem(this.keyName);
        //получаем данные если они есть и выводим  пустой массив если данных нет
        if (productsLocalStorage !== null) {
            // преобразуем из строки в массив
            return JSON.parse(productsLocalStorage);
        }
        return [];
    }
    // чтобы добавить новое значение в локальное хранилище
    putProducts(id) {
        // в products теперь находиться всё что есть в локальном хранилище
        let products = this.getProducts();
        // новый продукт или удалённый (если false то мы этот продукт удалили)
        let pushProducts = false;
        // проверка если нажвли первый раз - добавили элемент. если нажали второй раз - удалили элемент
        const index = products.indexOf(id); // вернёт -1

        if (index === -1) {
            // добавляем элемент в массив
            products.push(id);
            pushProducts = true;
        } else {
            // удаляем один элемент с массива с индексом index
            products.splice(index, 1);
        }
        //преобразуем из массива в строку . записываем новое значение в локальное хранилище
        localStorage.setItem(this.keyName, JSON.stringify(products));
        return {
            pushProducts: pushProducts,
            products: products,
        };
    }
}

const localStorageUtil = new LocalStorageUtil();
// localStorageUtil.putProducts('el1');
// localStorageUtil.putProducts('el2');
// localStorageUtil.putProducts('el3');
// const a = localStorageUtil.getProducts();
// console.log(a);