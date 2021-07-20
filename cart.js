const productsAdd = document.querySelectorAll('.fetured__grid-add');
const cartProductsList = document.querySelector('.cart__down');
const fullPrice = document.querySelector('.cart__down-price-count');
let price = 0;

const plusFullPrice = (currentPrice) => {
	return price += currentPrice;
};
const printFullPrice = () => {
	fullPrice.textContent = `${price}$`;
};


const generateCartProduct = (img, title, price, id) => {
	return `
        <div class="cart__down-item" data-id=${id}>
            <div class="cart__img">
                <a href="single.html">
                    <img src="${img}" alt="" width=72px height=85px>
                </a>
            </div>
            <div class="cart__text">
                <p>${title}</p>
                <div class="cart__text-star">
                    <img src="images/star.png" alt="">
                </div>
                <p>1  x   $${price}</p>
            </div>
            <img src="images/close.png" alt="">

        </div>
        
	`;
};

productsAdd.forEach(el => {

	el.addEventListener('click', (e) => {
		let self = e.currentTarget;
		let parent = self.closest('.fetured__grid-items');
		let id = parent.dataset.id;
		let img = parent.querySelector('.fetured__grid-img>img').getAttribute('src');
		let title = parent.querySelector('.fetured__grid-text-title').textContent;
		let priceNumber = parseInt(parent.querySelector('.fetured__grid-text-price').textContent);
        plusFullPrice(priceNumber);
        printFullPrice();
		document.querySelector('.cart__down').insertAdjacentHTML('afterbegin', generateCartProduct(img, title, priceNumber, id));
	});
});
