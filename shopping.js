document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsList = document.querySelector('.cart-items');
    const totalElement = document.querySelector('.total');

    let cartTotal = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const price = parseFloat(button.getAttribute('data-price'));
            cartTotal += price;
            totalElement.textContent = `Total: $${cartTotal.toFixed(2)}`;

            const item = document.createElement('li');
            item.textContent = `Item: $${price.toFixed(2)}`;
            cartItemsList.appendChild(item);
        });
    });

    const checkoutButton = document.querySelector('.checkout');
    checkoutButton.addEventListener('click', function() {
        alert(`Total amount to pay: $${cartTotal.toFixed(2)}`);
        cartTotal = 0;
        totalElement.textContent = `Total: $${cartTotal.toFixed(2)}`;
        cartItemsList.innerHTML = '';
    });
});
