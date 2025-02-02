const products = [
    {
        id: 1,
        title: "HonestlyTwisted Oil",
        price: "$14.99",
        description: "Lightweight, hydrating oil for curls. This is the perfect tool to define and moisturize curls, making it the most important product in textured hair. Rich in natural ingredients, not only does it enhance curl patterns, but it also provides excellent protection against dryness and frizz. Whether you are styling your hair for an important event or just want added manageability on a regular basis, this oil leaves your strands soft, shiny, and nourished. It's perfect for all kinds of curls and is considered a go-to product for hair hydration.",
        images: ["Oil1.jpg", "Oil2.jpg", "Oil3.jpg"],
        sizes: ["Regular"],
        colors: ["#00FFFFFF"],
        link: "https://buy.stripe.com/14k16ReTl7J94rSbIP"
    },
    {
        id: 2,
        title: "HonestlyTwisted Spray",
        price: "$6.99",
        description: "Say goodbye to dry, brittle hair with this lightweight nourishing spray. It instantly refreshes and revitalizes hair with its lightweight formula. Perfect for mid-day touch-ups or post-wash hydration, it infuses your hair with moisturizing and protecting ingredients that enhance the natural beauty of your hair by taming flyaways and adding a subtle shine. Compact and convenient, it's ideal for those always on the go.",
        images: ["Spray1.jpg", "Spray2.jpg", "Spray3.jpg"],
        sizes: ["Regular"],
        colors: ["#00FFFFFF"],
        link: "https://buy.stripe.com/5kA02NaD56F57E4eV0"
    },
    {
        id: 3,
        title: "HonestlyTwisted Lipgloss",
        price: "$9.99",
        description: "Get luscious, shiny lips with our HonestlyTwisted Lipgloss, a hydrating formula that will keep your pout soft and supple all day. Perfect for any occasion, it gives rich shine without stickiness, while being gentle and nourishing to the lips. Available in two versatile colors-classic clear and bold red-you can create a look that's effortlessly natural or stunningly dramatic. Say hello to a lip gloss that feels as good as it looks.",
        images: ["Lipgloss1.jpg", "Lipgloss2.jpg", "Lipgloss3.jpg"],
        sizes: ["Regular"],
        colors: ["#FFFFFF", "#FF2029"],
        link: "https://buy.stripe.com/bIYbLv9z1bZp5vW003"
    },
    {
        id: 4,
        title: "HonestlyTwisted Durag",
        price: "$9.99",
        description: "HonestlyTwisted Durag, designed for comfort and style, protects your waves and keeps your hairstyle intact. Made from high-quality soft fabric, it allows for a snug fit with no tension or discomfort. Available in a range of colors from sleek neutrals to vibrant shades, this is perfect for nighttime protection and daytime flair. Be it wave maintenance, braids, or just looking for a stylish accessory; this durag has you covered.",
        images: ["Durag1.jpg", "Durag2.jpg", "Durag3.jpg"],
        sizes: ["Regular"],
        colors: ["#FFFFFF", "#8B0000", "#2B3BFF", "#FFE338"],
        link: "https://buy.stripe.com/3cs7vfdPh9Rh2jK4gl"
    },
    {
        id: 5,
        title: "HonestlyTwisted Bonnet",
        price: "$11.99",
        description: "Keep your hair healthy and protected with the HonestlyTwisted Bonnet-a stylish and functional solution for preserving your hairstyle. The interior is silky and smooth, preventing friction and breakage, making it perfect for all hair types, especially curls and coils. This colorful bonnet comes in a variety of vibrant colors and securely yet comfortably fits, making it as practical as it is fashionable. Whether you're sleeping or lounging, it's an essential tool in maintaining hair that's moisturized and damage-free.",
        images: ["Bonnet1.jpg", "Bonnet2.jpg", "Bonnet3.jpg"],
        sizes: ["Regular"],
        colors: ["#FFFFFF", "#8B0000", "#2B3BFF", "#FFE338", "#7434A4"],
        link: "https://buy.stripe.com/5kAg1L3aDfbB3nO8wA"
    },
    {
        id: 6,
        title: "HonestlyTwisted Beanie",
        price: "$11.99",
        description: "Stay cozy and stylish with the HonestlyTwisted Beanie, which is made for style and functionality. Its soft, breathable fabric keeps you warm without overheating, making it perfect for any season. You can mix and match different bold and neutral colors to your liking with this beanie. Whether you're braving cold weather or adding a casual accessory to an outfit, this beanie combines comfort and versatility like no other.",
        images: ["Beanie1.jpg", "Beanie2.jpg", "Beanie3.jpg"],
        sizes: ["Regular"],
        colors: ["#FFFFFF", "#8B0000", "#000000", "#FFE338", "#808080", "#FFA500", "79D021"],
        link: "https://buy.stripe.com/8wM02N3aDe7x8I8cMM"
    },
    {
        id: 7,
        title: "HonestlyTwisted T-Shirt",
        price: "$19.99",
        description: "Show your style with the HonestlyTwisted T-Shirt, that ultimate wardrobe basic combining comfort and modern design in one. Because it's premium cotton, it's super soft and breathable-perfect for an everyday wear-outfit. Available in a range of sizes and colors, this T-shirt pairs well with everything from jeans to joggers, giving you endless styling options. Whether you're running errands, lounging at home, or hitting the streets, this shirt offers a relaxed yet polished vibe.",
        images: ["Shirt1.jpg", "Shirt2.jpg", "Shirt3.jpg"],
        sizes: ["Small", "Medium", "Large"],
        colors: ["#FFFFFF", "#8B0000", "#2B3BFF", "#000000", "#FFE338", "#808080", "#FFA500", "79D021"],
        link: "https://buy.stripe.com/28o5n73aDgfFgaA6oq"
    },
    {
        id: 8,
        title: "HonestlyTwisted Hoodie",
        price: "$29.99",
        description: "Get cozy in the HonestlyTwisted Hoodie, which is the perfect blend of warmth, comfort, and style. Constructed from high-quality materials, it features a soft inner lining and a durable exterior, making it ideal for chilly days or casual outings. This hoodie will be functional and fashionable, coming in a wide variety of vibrant and neutral colors. Whether you are relaxing at home, hitting the gym, or stepping out with buddies, it's one wardrobe essential that will continue keeping you cool with effortless style.",
        images: ["Hoodie1.jpg", "Hoodie2.jpg", "Hoodie3.jpg"],
        sizes: ["Small", "Medium", "Large"],
        colors: ["#FFFFFF", "#8B0000", "#2B3BFF", "#000000", "#FFE338", "#808080", "#FFA500", "79D021"],
        link: "https://buy.stripe.com/28o7vfh1t3sT2jK001"
    },
];

document.addEventListener("DOMContentLoaded", () => {
    const productGrid = document.getElementById('product-grid');
    const productDetail = document.getElementById('product-detail');
    const largeImage = document.getElementById('large-image');
    const thumbnailContainer = document.getElementById('thumbnail-images');
    const productTitle = document.getElementById('product-title');
    const productDescription = document.getElementById('product-description');
    const productPrice = document.getElementById('product-price');
    const buyLink = document.getElementById('buy-link');
    const addtocartbutton = document.getElementById('add-to-cart');
    const sizeSelect = document.getElementById('size-select'); // Existing element
    const colorSelect = document.getElementById('color-select'); // New element

    // Render products
    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        // Add event listener for showing product detail
        //card.addEventListener('click', (e) => {
        //if (!e.target.classList.contains('dropdown-btn') && !e.target.classList.contains('dropdown-item')) {
        //  showProductDetail(product.id);
        // }
        //});

        // Create size dropdown
        //const sizeDropdown = document.createElement('div');
        //sizeDropdown.className = 'fake-dropdown size-select';
        //sizeDropdown.innerHTML = `
        //<button class="dropdown-btn">Select Size</button>
        //<ul class="dropdown-menu">
        //  ${product.sizes.map(size => `<li class="dropdown-item" data-value="${size}">${size}</li>`).join('')}
        // </ul>
        //`;

        // Create color dropdown (if colors are available)
        //let colorDropdown = null;
        //if (product.colors.length > 1) {
        //   colorDropdown = document.createElement('div');
        //   colorDropdown.className = 'fake-dropdown color-select';
        //   colorDropdown.innerHTML = `
        //     <button class="dropdown-btn">Select Color</button>
        //     <ul class="dropdown-menu">
        //       ${product.colors.map(color => `<li class="dropdown-item" data-value="${color}" style="background-color: ${color};"></li>`).join('')}
        //    </ul>
        //  `;
        //}

        // Add dropdown container
        //const sizeColorContainer = document.createElement('div');
        //sizeColorContainer.className = 'size-color';
        //sizeColorContainer.appendChild(sizeDropdown);
        //if (colorDropdown) sizeColorContainer.appendChild(colorDropdown);

        // Assemble the card
        card.innerHTML = `
          <img src="${product.images[0]}" alt="${product.title}">
          <h3>${product.title}</h3>
        `;
        // card.appendChild(sizeColorContainer);
        card.innerHTML += `
          <p class="price">${product.price}</p>
          <a href="${product.link}" class="buy-link" target="_blank">Buy Now</a> 
        `; //<button class="add-to-cart" data-id="${product.id}">Add to Cart</button>

        // Ensure clicks outside dropdowns trigger `showProductDetail`
        card.addEventListener('click', e => {
            //if (['dropdown-btn', 'dropdown-menu', 'dropdown-item'].some(cls => e.target.classList.contains(cls))) return;
            //if (e.target.classList.contains('add-to-cart')) return;
            if (e.target.classList.contains('buy-link')) return;
            showProductDetail(product);
        });

        // Add event listeners for dropdown functionality
        // [sizeDropdown, colorDropdown].forEach(dropdown => {
        // if (dropdown) {
        //  const btn = dropdown.querySelector('.dropdown-btn');
        //  const menu = dropdown.querySelector('.dropdown-menu');
        //  console.log(btn);
        //  console.log(menu);

        //   btn.addEventListener('click', (_) => {
        //    console.log('clicked')
        //     menu.classList.toggle('visible');
        //  });

        //  menu.addEventListener('click', (e) => {
        //     if (e.target.classList.contains('dropdown-item')) {
        //         const value = e.target.dataset.value;
        //         btn.textContent = value; // Update button text with the selected value
        //         menu.classList.remove('visible'); // Hide menu
        //     }
        // });

        // Close the dropdown when clicking outside
        // document.addEventListener('click', e => {
        //     if (e.target === menu) return;
        //    if (e.target === btn) return;
        //     menu.classList.remove('visible')
        // });
        //}
        //});


        productGrid.appendChild(card);
    });



    // Display product details
    const showProductDetail = (product) => {
        largeImage.src = product.images[0];
        thumbnailContainer.innerHTML = '';
        product.images.forEach((image, index) => {
            const thumb = document.createElement('img');
            thumb.src = image;
            thumb.alt = `Thumbnail ${index + 1}`;

            if (index === 0) thumb.style.border = "2px solid #222f3e";

            thumb.addEventListener('click', () => {
                largeImage.src = image;
                Array.from(thumbnailContainer.children).forEach((child) => {
                    child.style.border = "2px solid transparent";
                });
                thumb.style.border = "2px solid #222f3e";
            });
            thumbnailContainer.appendChild(thumb);
        });
        productTitle.textContent = product.title;
        productDescription.textContent = product.description;
        productPrice.textContent = product.price;
        buyLink.href = product.link;
        //addtocartbutton.setAttribute('data-id', product.id);

        productDetail.classList.remove('hidden');
    };

    // Close product detail
    productDetail.addEventListener('click', (event) => {
        if (event.target === productDetail) {
            productDetail.classList.add('hidden');
        }
    });
});

const cart = [];
const cartItemsContainer = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

const updateCart = () => {
    cartItemsContainer.innerHTML = '';  // Clear the cart items container
    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <div class="cartimgdiv"><img src="${item.images[0]}" alt="${item.title}" class="img"></div>
            <div class="carttextdiv">
            <p class="title">${item.title}</p>
            <p class="price">${item.price}</p>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);

        // Parse the price correctly (removes '$' and converts to float)
        total += parseFloat(item.price.replace('$', '').trim());
    });

    // Update the total cost and format it properly
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
};

// Add product to cart
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('add-to-cart')) {
        const productId = parseInt(event.target.getAttribute('data-id'));
        const product = products.find(p => p.id === productId);
        cart.push(product);  // Add selected product to the cart
        updateCart();  // Recalculate and display the updated cart
    }
});


// Open and close cart
//const cartElement = document.getElementById('cart');
//const openCartButton = document.getElementById('open-cart'); // Open cart button
//const closeCartButton = document.getElementById('close-cart'); // Close cart button

//openCartButton.addEventListener('click', () => {
//cartElement.classList.toggle('open');
//});

//closeCartButton.addEventListener('click', () => {
// if (cartElement.classList.contains('open')) {
//  cartElement.classList.remove('open');
//}
//});


