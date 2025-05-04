// --- Product Data ---
const products = [
    {
        id: 1,
        title: "HonestlyTwisted Oil",
        price: "$14.99",
        description: "Lightweight, hydrating oil for curls. This is the perfect tool to define and moisturize curls, making it the most important product in textured hair. Rich in natural ingredients, not only does it enhance curl patterns, but it also provides excellent protection against dryness and frizz. Whether you are styling your hair for an important event or just want added manageability on a regular basis, this oil leaves your strands soft, shiny, and nourished. It's perfect for all kinds of curls and is considered a go-to product for hair hydration.",
        // Use placeholders if local images aren't available in preview
        images: [
            "https://placehold.co/500x500/ffe1e3/333?text=Oil+1",
            "https://placehold.co/500x500/e0e0e0/333?text=Oil+2",
            "https://placehold.co/500x500/cccccc/333?text=Oil+3"
        ],
        // images: ["Oil1.jpg", "Oil2.jpg", "Oil3.jpg"], // Original paths
        sizes: ["Regular"],
        colors: ["#00FFFFFF"], // Assuming this means 'clear'
        link: "https://buy.stripe.com/14k16ReTl7J94rSbIP"
    },
    {
        id: 2,
        title: "HonestlyTwisted Spray",
        price: "$6.99",
        description: "Say goodbye to dry, brittle hair with this lightweight nourishing spray. It instantly refreshes and revitalizes hair with its lightweight formula. Perfect for mid-day touch-ups or post-wash hydration, it infuses your hair with moisturizing and protecting ingredients that enhance the natural beauty of your hair by taming flyaways and adding a subtle shine. Compact and convenient, it's ideal for those always on the go.",
        images: [
            "https://placehold.co/500x500/ffe1e3/333?text=Spray+1",
            "https://placehold.co/500x500/e0e0e0/333?text=Spray+2",
            "https://placehold.co/500x500/cccccc/333?text=Spray+3"
         ],
        // images: ["Spray1.jpg", "Spray2.jpg", "Spray3.jpg"],
        sizes: ["Regular"],
        colors: ["#00FFFFFF"],
        link: "https://buy.stripe.com/5kA02NaD56F57E4eV0"
    },
    {
        id: 3,
        title: "HonestlyTwisted Lipgloss",
        price: "$9.99",
        description: "Get luscious, shiny lips with our HonestlyTwisted Lipgloss, a hydrating formula that will keep your pout soft and supple all day. Perfect for any occasion, it gives rich shine without stickiness, while being gentle and nourishing to the lips. Available in two versatile colors-classic clear and bold red-you can create a look that's effortlessly natural or stunningly dramatic. Say hello to a lip gloss that feels as good as it looks.",
        images: [
            "https://placehold.co/500x500/ffe1e3/333?text=Lipgloss+1",
            "https://placehold.co/500x500/ffffff/cc0000?text=Lipgloss+2+(Clear)", // Clear
            "https://placehold.co/500x500/ffcccc/cc0000?text=Lipgloss+3+(Red)" // Red
        ],
        // images: ["Lipgloss1.jpg", "Lipgloss2.jpg", "Lipgloss3.jpg"],
        sizes: ["Regular"],
        colors: ["#FFFFFF", "#FF2029"], // Clear, Red
        link: "https://buy.stripe.com/bIYbLv9z1bZp5vW003"
    },
    {
        id: 4,
        title: "HonestlyTwisted Durag",
        price: "$9.99",
        description: "HonestlyTwisted Durag, designed for comfort and style, protects your waves and keeps your hairstyle intact. Made from high-quality soft fabric, it allows for a snug fit with no tension or discomfort. Available in a range of colors from sleek neutrals to vibrant shades, this is perfect for nighttime protection and daytime flair. Be it wave maintenance, braids, or just looking for a stylish accessory; this durag has you covered.",
        images: [
            "https://placehold.co/500x500/ffe1e3/333?text=Durag+1",
            "https://placehold.co/500x500/ffffff/333?text=Durag+White", // White
            "https://placehold.co/500x500/8B0000/eee?text=Durag+Maroon" // Maroon
        ],
        // images: ["Durag1.jpg", "Durag2.jpg", "Durag3.jpg"],
        sizes: ["Regular"],
        colors: ["#FFFFFF", "#8B0000", "#2B3BFF", "#FFE338"], // White, Maroon, Blue, Yellow
        link: "https://buy.stripe.com/3cs7vfdPh9Rh2jK4gl"
    },
    {
        id: 5,
        title: "HonestlyTwisted Bonnet",
        price: "$11.99",
        description: "Keep your hair healthy and protected with the HonestlyTwisted Bonnet-a stylish and functional solution for preserving your hairstyle. The interior is silky and smooth, preventing friction and breakage, making it perfect for all hair types, especially curls and coils. This colorful bonnet comes in a variety of vibrant colors and securely yet comfortably fits, making it as practical as it is fashionable. Whether you're sleeping or lounging, it's an essential tool in maintaining hair that's moisturized and damage-free.",
        images: [
            "https://placehold.co/500x500/ffe1e3/333?text=Bonnet+1",
            "https://placehold.co/500x500/7434A4/eee?text=Bonnet+Purple", // Purple
            "https://placehold.co/500x500/2B3BFF/eee?text=Bonnet+Blue" // Blue
        ],
        // images: ["Bonnet1.jpg", "Bonnet2.jpg", "Bonnet3.jpg"],
        sizes: ["Regular"],
        colors: ["#FFFFFF", "#8B0000", "#2B3BFF", "#FFE338", "#7434A4"], // White, Maroon, Blue, Yellow, Purple
        link: "https://buy.stripe.com/5kAg1L3aDfbB3nO8wA"
    },
    {
        id: 6,
        title: "HonestlyTwisted Beanie",
        price: "$11.99",
        description: "Stay cozy and stylish with the HonestlyTwisted Beanie, which is made for style and functionality. Its soft, breathable fabric keeps you warm without overheating, making it perfect for any season. You can mix and match different bold and neutral colors to your liking with this beanie. Whether you're braving cold weather or adding a casual accessory to an outfit, this beanie combines comfort and versatility like no other.",
        images: [
            "https://placehold.co/500x500/ffe1e3/333?text=Beanie+1",
            "https://placehold.co/500x500/000000/eee?text=Beanie+Black", // Black
            "https://placehold.co/500x500/808080/eee?text=Beanie+Gray" // Gray
        ],
        // images: ["Beanie1.jpg", "Beanie2.jpg", "Beanie3.jpg"],
        sizes: ["Regular"],
        colors: ["#FFFFFF", "#8B0000", "#000000", "#FFE338", "#808080", "#FFA500", "#79D021"], // White, Maroon, Black, Yellow, Gray, Orange, Green
        link: "https://buy.stripe.com/8wM02N3aDfbx8I8cMM"
    },
    {
        id: 7,
        title: "HonestlyTwisted T-Shirt",
        price: "$19.99",
        description: "Show your style with the HonestlyTwisted T-Shirt, that ultimate wardrobe basic combining comfort and modern design in one. Because it's premium cotton, it's super soft and breathable-perfect for an everyday wear-outfit. Available in a range of sizes and colors, this T-shirt pairs well with everything from jeans to joggers, giving you endless styling options. Whether you're running errands, lounging at home, or hitting the streets, this shirt offers a relaxed yet polished vibe.",
        images: [
            "https://placehold.co/500x500/ffe1e3/333?text=T-Shirt+1",
            "https://placehold.co/500x500/ffffff/333?text=T-Shirt+White", // White
            "https://placehold.co/500x500/000000/eee?text=T-Shirt+Black" // Black
        ],
        // images: ["Shirt1.jpg", "Shirt2.jpg", "Shirt3.jpg"],
        sizes: ["Small", "Medium", "Large"],
        colors: ["#FFFFFF", "#8B0000", "#2B3BFF", "#000000", "#FFE338", "#808080", "#FFA500", "#79D021"],
        link: "https://buy.stripe.com/28o5n73aDgfFgaA6oq"
    },
    {
        id: 8,
        title: "HonestlyTwisted Hoodie",
        price: "$29.99",
        description: "Get cozy in the HonestlyTwisted Hoodie, which is the perfect blend of warmth, comfort, and style. Constructed from high-quality materials, it features a soft inner lining and a durable exterior, making it ideal for chilly days or casual outings. This hoodie will be functional and fashionable, coming in a wide variety of vibrant and neutral colors. Whether you are relaxing at home, hitting the gym, or stepping out with buddies, it's one wardrobe essential that will continue keeping you cool with effortless style.",
        images: [
            "https://placehold.co/500x500/ffe1e3/333?text=Hoodie+1",
            "https://placehold.co/500x500/000000/eee?text=Hoodie+Black", // Black
            "https://placehold.co/500x500/ffffff/333?text=Hoodie+White" // White
        ],
        // images: ["Hoodie1.jpg", "Hoodie2.jpg", "Hoodie3.jpg"],
        sizes: ["Small", "Medium", "Large"],
        colors: ["#FFFFFF", "#8B0000", "#2B3BFF", "#000000", "#FFE338", "#808080", "#FFA500", "#79D021"],
        link: "https://buy.stripe.com/28o7vfh1t3sT2jK001"
    },
];


document.addEventListener("DOMContentLoaded", () => {
    // --- DOM Element References ---
    const productGrid = document.getElementById('product-grid');
    const productDetailModal = document.getElementById('product-detail');
    const largeImage = document.getElementById('large-image');
    const thumbnailContainer = document.getElementById('thumbnail-images');
    const productTitle = document.getElementById('product-title');
    const productDescription = document.getElementById('product-description');
    const productPrice = document.getElementById('product-price');
    const buyLink = document.getElementById('buy-link');
    const closeModalButton = document.getElementById('close-modal-btn');
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    // --- Mobile Menu Toggle ---
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
        // Close menu when a link is clicked (optional, good UX)
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });
    } else {
        console.error("Mobile menu button or menu element not found.");
    }


    // --- Render Products ---
    if (productGrid) {
        products.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('product-card'); // Use class from style.css

            // Card Content
            card.innerHTML = `
                <img src="${product.images[0]}" alt="${product.title}" loading="lazy">
                <div class="product-content">
                    <h3>${product.title}</h3>
                    <div class="product-footer">
                         <p class="price">${product.price}</p>
                         <button class="buy-now-btn btn bg-gray-800 text-white hover:bg-gray-900 text-sm w-full" data-link="${product.link}">View Details</button>
                         </div>
                </div>
            `;

            // Add click listener to the card (excluding the button itself)
            // to show product details
            card.addEventListener('click', (e) => {
                // Don't trigger modal if the 'View Details' button was clicked directly
                if (!e.target.classList.contains('buy-now-btn')) {
                     showProductDetail(product);
                }
            });

             // Add click listener specifically to the button to open the modal
            const viewDetailsButton = card.querySelector('.buy-now-btn');
            if(viewDetailsButton){
                 viewDetailsButton.addEventListener('click', (e) => {
                    e.stopPropagation(); // Prevent card click listener from firing
                    showProductDetail(product); // Show modal when button is clicked
                 });
            }


            productGrid.appendChild(card);
        });
    } else {
        console.error("Product grid element not found.");
    }

    // --- Show Product Detail Modal ---
    const showProductDetail = (product) => {
        if (!productDetailModal || !largeImage || !thumbnailContainer || !productTitle || !productDescription || !productPrice || !buyLink) {
            console.error("One or more product detail modal elements are missing.");
            return;
        }

        // Populate Modal Content
        largeImage.src = product.images[0];
        largeImage.alt = product.title; // Add alt text
        thumbnailContainer.innerHTML = ''; // Clear previous thumbnails

        product.images.forEach((image, index) => {
            const thumb = document.createElement('img');
            thumb.src = image;
            thumb.alt = `${product.title} thumbnail ${index + 1}`; // Add alt text
            thumb.loading = 'lazy'; // Lazy load thumbnails

            // Highlight the first thumbnail initially
            if (index === 0) {
                 thumb.classList.add('active-thumb');
            }

            // Add click listener to change large image and highlight thumbnail
            thumb.addEventListener('click', () => {
                largeImage.src = image;
                largeImage.alt = `${product.title} - Image ${index + 1}`;
                // Update active thumbnail style
                Array.from(thumbnailContainer.children).forEach(child => {
                    child.classList.remove('active-thumb');
                });
                thumb.classList.add('active-thumb');
            });
            thumbnailContainer.appendChild(thumb);
        });

        productTitle.textContent = product.title;
        productDescription.textContent = product.description;
        productPrice.textContent = product.price;
        buyLink.href = product.link; // Set the correct buy link

        // Show the modal
        productDetailModal.classList.remove('hidden');
    };

    // --- Close Product Detail Modal ---
    if (productDetailModal) {
        // Close by clicking the background overlay
        productDetailModal.addEventListener('click', (event) => {
            // Check if the click is directly on the modal background
            if (event.target === productDetailModal) {
                productDetailModal.classList.add('hidden');
            }
        });
    }

    if (closeModalButton) {
        // Close by clicking the explicit close button
        closeModalButton.addEventListener('click', () => {
            productDetailModal.classList.add('hidden');
        });
    }

    // --- Cart Logic (Commented Out) ---
    /*
    const cart = [];
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const openCartButton = document.getElementById('open-cart');
    const closeCartButton = document.getElementById('close-cart');
    const cartElement = document.getElementById('cart');
    const checkoutButton = document.getElementById('checkout-button'); // Added checkout button reference

    const updateCartDisplay = () => {
        if (!cartItemsContainer || !cartTotal) return; // Check if elements exist

        cartItemsContainer.innerHTML = ''; // Clear the cart items container
        let total = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="text-center text-gray-500 p-4">Your cart is empty.</p>';
        } else {
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item'); // Use class from style.css
                cartItem.innerHTML = `
                    <img src="${item.images[0]}" alt="${item.title}" class="w-16 h-16 object-cover mr-4 rounded">
                    <div class="cart-item-details flex-grow">
                        <p class="font-semibold">${item.title}</p>
                        <p class="text-sm text-gray-600">${item.price}</p>
                    </div>
                    <button class="remove-from-cart text-red-500 hover:text-red-700 text-xl" data-id="${item.id}">&times;</button>
                `;
                cartItemsContainer.appendChild(cartItem);

                // Add listener for remove button
                cartItem.querySelector('.remove-from-cart').addEventListener('click', (e) => {
                    const itemIdToRemove = parseInt(e.target.getAttribute('data-id'));
                    removeFromCart(itemIdToRemove);
                });

                // Parse the price correctly (removes '$' and converts to float)
                total += parseFloat(item.price.replace('$', '').trim());
            });
        }

        // Update the total cost and format it properly
        cartTotal.textContent = `Total: $${total.toFixed(2)}`;

        // Enable/disable checkout button
        if (checkoutButton) {
             checkoutButton.disabled = cart.length === 0;
             checkoutButton.classList.toggle('opacity-50', cart.length === 0);
             checkoutButton.classList.toggle('cursor-not-allowed', cart.length === 0);
        }
    };

    const addToCart = (productId) => {
        const product = products.find(p => p.id === productId);
        if (product) {
            // Check if item already exists (optional: increment quantity instead)
            const existingItem = cart.find(item => item.id === productId);
            if (!existingItem) {
                 cart.push(product); // Add selected product to the cart
                 console.log("Added to cart:", product.title);
                 updateCartDisplay(); // Recalculate and display the updated cart
                 // Optional: Show confirmation message
                 showTemporaryMessage(`${product.title} added to cart!`);
            } else {
                 // Optional: Handle already in cart case (e.g., increment quantity or show message)
                 showTemporaryMessage(`${product.title} is already in your cart.`);
            }

        } else {
            console.error("Product not found for ID:", productId);
        }
    };

     const removeFromCart = (productId) => {
        const itemIndex = cart.findIndex(item => item.id === productId);
        if (itemIndex > -1) {
            cart.splice(itemIndex, 1); // Remove item from cart array
            updateCartDisplay(); // Update display
            console.log("Removed item with ID:", productId);
        }
    };


    // Add product to cart listener (delegated from document)
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('add-to-cart')) {
            const productId = parseInt(event.target.getAttribute('data-id'));
            addToCart(productId);
        }
    });

    // Open and close cart listeners
    if (openCartButton && cartElement) {
        openCartButton.addEventListener('click', () => {
            cartElement.classList.add('open');
        });
    }
    if (closeCartButton && cartElement) {
        closeCartButton.addEventListener('click', () => {
            cartElement.classList.remove('open');
        });
    }

     // Checkout button listener (Mockup)
     if (checkoutButton) {
         checkoutButton.addEventListener('click', () => {
             if (cart.length > 0) {
                 alert(`Checkout initiated with ${cart.length} items. Total: ${cartTotal.textContent}. (This is a mockup)`);
                 // In a real app, redirect to checkout page or integrate payment
                 cart.length = 0; // Clear cart after mock checkout
                 updateCartDisplay();
                 if(cartElement) cartElement.classList.remove('open'); // Close cart panel
             }
         });
     }

    // Initial cart display update on load
    updateCartDisplay();
    */

     // --- Helper: Temporary Message Display ---
     function showTemporaryMessage(message, duration = 3000) {
        let messageDiv = document.createElement('div');
        messageDiv.textContent = message;
        // Basic styling - consider using Tailwind classes or dedicated CSS
        messageDiv.style.position = 'fixed';
        messageDiv.style.bottom = '20px';
        messageDiv.style.left = '50%';
        messageDiv.style.transform = 'translateX(-50%)';
        messageDiv.style.padding = '10px 20px';
        messageDiv.style.backgroundColor = 'var(--primary-brand-color)'; // Use brand color
        messageDiv.style.color = 'white';
        messageDiv.style.borderRadius = '5px';
        messageDiv.style.zIndex = '1000';
        messageDiv.style.opacity = '0';
        messageDiv.style.transition = 'opacity 0.5s ease';
        document.body.appendChild(messageDiv);

        // Fade in
        setTimeout(() => { messageDiv.style.opacity = '1'; }, 10);


        // Fade out and remove
        setTimeout(() => {
            messageDiv.style.opacity = '0';
        }, duration - 500); // Start fading out before removal
         setTimeout(() => {
             if (messageDiv.parentNode) {
                messageDiv.parentNode.removeChild(messageDiv);
             }
        }, duration);
    }

}); // End DOMContentLoaded
