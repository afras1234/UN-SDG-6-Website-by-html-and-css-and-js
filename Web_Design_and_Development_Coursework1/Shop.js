let Cart = document.querySelector('.cart');
let Close = document.querySelector('.close');
let Body = document.querySelector('body');
let ProductList1 = document.querySelector('.productlist1');
let ProductList2 = document.querySelector('.productlist2');
let ProductList3 = document.querySelector('.productlist3');
let ListCart = document.querySelector('.listcart');
let CartSpan = document.querySelector('.cart span');
let Remove = document.querySelector('.items');


let CartItem =[];

//for opening and closing of the sidebar
Cart.addEventListener('click', () => {
    Body.classList.toggle('showbar')
})
Close.addEventListener('click', () => {
    Body.classList.toggle('showbar')
})

//eventlistner for add to cart button
ProductList1.addEventListener('click', (event) => {
    let click = event.target;
    if (click.classList.contains('addtocart')){
        let product = click.closest('.product');
        let product_id = product.id;
        AddtoCart(product_id);
    }
})
//eventlistner for add to cart button
ProductList2.addEventListener('click', (event) => {
    let click = event.target;
    if (click.classList.contains('addtocart')){
        let product = click.closest('.product');
        let product_id = product.id;
        AddtoCart(product_id);
    }
})
//eventlistner for add to cart button
ProductList3.addEventListener('click', (event) => {
    let click = event.target;
    if (click.classList.contains('addtocart')){
        let product = click.closest('.product');
        let product_id = product.id;
        AddtoCart(product_id);
    }
})

//method to find the product details using the id 
const AddtoCart = (product_id) => {
    let ProductIndex = CartItem.findIndex((value) => value.product_id == product_id);
    if (CartItem.length <= 0) {
        CartItem = [{
            product_id: product_id,
            quantity: 1
        }]
    } else if (ProductIndex < 0) {
        CartItem.push({
            product_id: product_id,
            quantity: 1
        });
    } else {
        CartItem[ProductIndex].quantity = CartItem[ProductIndex].quantity + 1;
    }
    AddTOHTML();
}

//method for add the data to the side bar
const AddTOHTML = () => {
    let TotalQuantity = 0;
    let Totalprice = 0;
    const TotalPriceElement = document.querySelector('.TotalBar');
    ListCart.innerHTML = '';
    if (CartItem.length > 0) {

        CartItem.forEach(item => {

            TotalQuantity = TotalQuantity + item.quantity;

            const ProductElement = document.querySelector(`.product[id="${item.product_id}"]`);
            const ProductImage = ProductElement.querySelector('img').src;
            const ProductName = ProductElement.querySelector('h2').innerText;
            const ProductPrice = ProductElement.querySelector('.price').innerText;

            const priceNumber = ProductPrice.replace('$', '');
            const totalPrice = priceNumber * item.quantity;
            Totalprice = Totalprice + totalPrice;

            let NewCart = document.createElement('div');
            NewCart.classList.add('items');
            NewCart.dataset.id = item.product_id;
            NewCart.innerHTML = `
            <div class="image">
                <img src="${ProductImage}" alt="">
            </div>
            <div class="name">
                ${ProductName}
            </div>
            <div class="total">
                $${totalPrice}
            </div>
            <div class="quantity">
                    
                <span>Quantity : ${item.quantity}</span>
                    
            </div>
            <div class="remove">
                <img class="Delete" src="Shop/Trash.png">
            </div>
            `;
        ListCart.appendChild(NewCart);  
        CartSpan.innerText = TotalQuantity;  
        })
        TotalPriceElement.classList.add('TotalPrice');
        TotalPriceElement.innerHTML = `Total : $${Totalprice.toFixed(2)}`;

    } else {
        TotalPriceElement.innerHTML = 'Total : $0.00';
    }

    CartSpan.innerText = TotalQuantity;
}
//eventlistner for delete the cart item using the delte icon
ListCart.addEventListener('click', (event) => {
    let ClickPosition = event.target;
    if (ClickPosition.classList.contains('Delete')) {
        let product_id = ClickPosition.parentElement.parentElement.dataset.id;
        console.log(product_id);
        DeleteProduct(product_id);
    }
    
})
const DeleteProduct = (product_id) => {
    let ItemIndex = CartItem.findIndex((item) => item.product_id === product_id);
    if (ItemIndex !== -1) {
        CartItem.splice(ItemIndex, 1);
        AddTOHTML(); 
    }
}

//Checkout Form popup
document.addEventListener("DOMContentLoaded", function() {
    const checkoutButton = document.querySelector('.Checkout');
    const checkoutFormContainer = document.getElementById('checkoutForm');
    const CloseButton = document.querySelector('.Cross');


    checkoutButton.addEventListener('click', function() {
        if (CartItem.length == 0) {
            alert("Cart is Empty!!")
        } else {
            checkoutFormContainer.classList.toggle('hidden');
        }
        
    });
    CloseButton.addEventListener('click', function() {
        checkoutFormContainer.classList.toggle('hidden');
    })
});

//Form validation
const Name = document.getElementById('name');
const Email = document.getElementById('email');
const shipAddress = document.getElementById('address');
const Tel = document.getElementById('number');
const Form = document.getElementById('FormLayout');


Form.addEventListener('submit', (e) => {  
    let Allvalid = validateInputs();

    if (!Allvalid) {
        e.preventDefault();
    }
});

const ErrorMessage = (element, message) => {
    const UserInputs = element.parentElement;
    const DisplayError = UserInputs.querySelector('.error');

    DisplayError.innerHTML = message;
    console.log("Error message:", message);
    console.log("DisplayError:", DisplayError);
};

const Validated = element => {
    const UserInputs = element.parentElement;
    const DisplayError = UserInputs.querySelector('.error');

    DisplayError.innerHTML = "";
};

const validateInputs = () => {
    const NameValue = Name.value.trim();
    const EmailValue = Email.value.trim();
    const AddressValue = shipAddress.value.trim();
    const NumberValue = Tel.value.trim();

    let Valid = true;

    if (NameValue === '') {
        ErrorMessage(Name, "Name is required!!!");
        Valid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(NameValue)) {
        ErrorMessage(Name, "Enter valid name with Only letters!!");
        Valid = false;
    } else {
        Validated(Name);
    }

    if (EmailValue === '') {
        ErrorMessage(Email, "Email is required!!!");
        Valid = false;
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(EmailValue)) {
        ErrorMessage(Email, "Invalid email address!!!");
        Valid = false;
    } else {
        Validated(Email);
    }

    if (AddressValue === '') {
        ErrorMessage(shipAddress, "Address is required!!!"); 
        Valid = false;
    } else {
        Validated(shipAddress);
    }

    if (NumberValue === '') {
        ErrorMessage(Tel, "Contact is required!!!");
        Valid = false;
    } else if (!/^\d*$/.test(NumberValue)) {
        ErrorMessage(Tel, "Invalid Number!!!");
        Valid = false;
    } else if (NumberValue.length !== 10) {
        ErrorMessage(Tel, "Number has to be less than 11 and greater than 1!!");
        Valid = false;
    } else {
        Validated(Tel);
    }
    return Valid;
};