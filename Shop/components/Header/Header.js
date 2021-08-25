class Header {
    // метод который открывает новую страницу с выбранными товарами
    handlerOpenShoppingPage() {
        shoppingPage.render();
    }

    //метод который отображает данные на экран
    render (count) { 
        const html = `
           <div class="header-container">
                <div class="header-counter" onclick="headerPage.handlerOpenShoppingPage();"> 
                   🔥 ${count}
                </div>
           </div>
`;
        
        ROOT_HEADER.innerHTML = html;
    }
}


const headerPage = new Header();

