class Shopping {
    // очитка корзины
    handleClear() {
        ROOT_SHOPPING.innerHTML = '';
        
    }


    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatolog = '';
        let sumCatolog = 0;



                CATALOG.forEach(({ id, name, price })  => {
                    if (productsStore.indexOf(id) !== -1) {
                        htmlCatolog += `
                        <tr>
                            <td class="shopping-element_name">🌟 ${name}</td>
                            <td class="shopping-element_price">${price.toLocaleString()} USD</td>
                        </tr>
                        `;
                        sumCatolog += price; 
                    
                    }

                });
        

                const html = `
                <div class="shopping-container">
                <div class="shoping__close" onclick="shoppingPage.handleClear()">
                
                </div>
                    <table>
                        ${htmlCatolog}
                        <tr>
                            <td class="shopping-element_name">❇️ СУММА</td>
                            <td class="shopping-element_price shopping-element_price2">${sumCatolog.toLocaleString()} USD</td>
                        </tr>       
                    </table>

                </div>
                
                
                `;
                ROOT_SHOPPING.innerHTML = html;
            }
        }

const shoppingPage = new Shopping();