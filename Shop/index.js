// фунция которая вствляет на страницу первоначальные данные
function render() {
    const productsStore = localStorageUtil.getProducts();// вернём массив добавленных товаров

    headerPage.render(productsStore.length); // верёт количество элементов в массиве
    productsPage.render();

}

render();