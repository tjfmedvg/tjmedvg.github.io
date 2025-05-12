const products = [
     { id: 1, title: "HonestlyTwisted Oil", price: "$14.99", description: "Lightweight, hydrating oil for curls. This is the perfect tool to define and moisturize curls, making it the most important product in textured hair. Rich in natural ingredients, not only does it enhance curl patterns, but it also provides excellent protection against dryness and frizz. Whether you are styling your hair for an important event or just want added manageability on a regular basis, this oil leaves your strands soft, shiny, and nourished. It's perfect for all kinds of curls and is considered a go-to product for hair hydration.", images: ["Oil1.jpg", "Oil2.jpg", "Oil3.jpg"], sizes: ["Regular"], colors: ["#00FFFFFF"], link: "https://buy.stripe.com/14k16ReTl7J94rSbIP" },
     { id: 2, title: "HonestlyTwisted Spray", price: "$6.99", description: "Say goodbye to dry, brittle hair with this lightweight nourishing spray. It instantly refreshes and revitalizes hair with its lightweight formula. Perfect for mid-day touch-ups or post-wash hydration, it infuses your hair with moisturizing and protecting ingredients that enhance the natural beauty of your hair by taming flyaways and adding a subtle shine. Compact and convenient, it's ideal for those always on the go.", images: ["Spray1.jpg", "Spray2.jpg", "Spray3.jpg"], sizes: ["Regular"], colors: ["#00FFFFFF"], link: "https://buy.stripe.com/5kA02NaD56F57E4eV0" },
     { id: 3, title: "HonestlyTwisted Lipgloss", price: "$9.99", description: "Get luscious, shiny lips with our HonestlyTwisted Lipgloss, a hydrating formula that will keep your pout soft and supple all day. Perfect for any occasion, it gives rich shine without stickiness, while being gentle and nourishing to the lips. Available in two versatile colors-classic clear and bold red-you can create a look that's effortlessly natural or stunningly dramatic. Say hello to a lip gloss that feels as good as it looks.", images: ["Lipgloss1.jpg", "Lipgloss2.jpg", "Lipgloss3.jpg"], sizes: ["Regular"], colors: ["#FFFFFF", "#FF2029"], link: "https://buy.stripe.com/bIYbLv9z1bZp5vW003" },
     { id: 4, title: "HonestlyTwisted Durag", price: "$9.99", description: "HonestlyTwisted Durag, designed for comfort and style, protects your waves and keeps your hairstyle intact. Made from high-quality soft fabric, it allows for a snug fit with no tension or discomfort. Available in a range of colors from sleek neutrals to vibrant shades, this is perfect for nighttime protection and daytime flair. Be it wave maintenance, braids, or just looking for a stylish accessory; this durag has you covered.", images: ["Durag1.jpg", "Durag2.jpg", "Durag3.jpg"], sizes: ["Regular"], colors: ["#FFFFFF", "#8B0000", "#2B3BFF", "#FFE338"], link: "https://buy.stripe.com/3cs7vfdPh9Rh2jK4gl" },
     { id: 5, title: "HonestlyTwisted Bonnet", price: "$11.99", description: "Keep your hair healthy and protected with the HonestlyTwisted Bonnet-a stylish and functional solution for preserving your hairstyle. The interior is silky and smooth, preventing friction and breakage, making it perfect for all hair types, especially curls and coils. This colorful bonnet comes in a variety of vibrant colors and securely yet comfortably fits, making it as practical as it is fashionable. Whether you're sleeping or lounging, it's an essential tool in maintaining hair that's moisturized and damage-free.", images: ["Bonnet1.jpg", "Bonnet2.jpg", "Bonnet3.jpg"], sizes: ["Regular"], colors: ["#FFFFFF", "#8B0000", "#2B3BFF", "#FFE338", "#7434A4"], link: "https://buy.stripe.com/5kAg1L3aDfbB3nO8wA" },
     { id: 6, title: "HonestlyTwisted Beanie", price: "$11.99", description: "Stay cozy and stylish with the HonestlyTwisted Beanie, which is made for style and functionality. Its soft, breathable fabric keeps you warm without overheating, making it perfect for any season. You can mix and match different bold and neutral colors to your liking with this beanie. Whether you're braving cold weather or adding a casual accessory to an outfit, this beanie combines comfort and versatility like no other.", images: ["Beanie1.jpg", "Beanie2.jpg", "Beanie3.jpg"], sizes: ["Regular"], colors: ["#FFFFFF", "#8B0000", "#000000", "#FFE338", "#808080", "#FFA500", "#79D021"], link: "https://buy.stripe.com/8wM02N3aDgfFgaA6oq" },
     { id: 7, title: "HonestlyTwisted T-Shirt", price: "$19.99", description: "Show your style with the HonestlyTwisted T-Shirt, that ultimate wardrobe basic combining comfort and modern design in one. Because it's premium cotton, it's super soft and breathable-perfect for an everyday wear-outfit. Available in a range of sizes and colors, this T-shirt pairs well with everything from jeans to joggers, giving you endless styling options. Whether you're running errands, lounging at home, or hitting the streets, this shirt offers a relaxed yet polished vibe.", images: ["Shirt1.jpg", "Shirt2.jpg", "Shirt3.jpg"], sizes: ["Small", "Medium", "Large"], colors: ["#FFFFFF", "#8B0000", "#2B3BFF", "#000000", "#FFE338", "#808080", "#FFA500", "#79D021"], link: "https://buy.stripe.com/28o5n73aDgfFgaA6oq" },
     { id: 8, title: "HonestlyTwisted Hoodie", price: "$29.99", description: "Get cozy in the HonestlyTwisted Hoodie, which is the perfect blend of warmth, comfort, and style. Constructed from high-quality materials, it features a soft inner lining and a durable exterior, making it ideal for chilly days or casual outings. This hoodie will be functional and fashionable, coming in a wide variety of vibrant and neutral colors. Whether you are relaxing at home, hitting the gym, or stepping out with buddies, it's one wardrobe essential that will continue keeping you cool with effortless style.", images: ["Hoodie1.jpg", "Hoodie2.jpg", "Hoodie3.jpg"], sizes: ["Small", "Medium", "Large"], colors: ["#FFFFFF", "#8B0000", "#2B3BFF", "#000000", "#FFE338", "#808080", "#FFA500", "#79D021"], link: "https://buy.stripe.com/28o7vfh1t3sT2jK001" },
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
    const yearSpan = document.getElementById('current-year');

    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const closeButton = document.createElement("button");
    closeButton.innerHTML = "&times;";
    closeButton.classList.add("close-button");
    closeButton.setAttribute('aria-label', 'Close product details');
    const modalContent = productDetail.querySelector('.product-detail-content');
    if (modalContent) {
        modalContent.appendChild(closeButton);
         closeButton.addEventListener("click", closeModal);
    } else {
        console.error("Modal content container not found!");
    }

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card bg-[var(--card-bg)] rounded-xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1.5 flex flex-col cursor-pointer';

        const fallbackImgUrl = `https://placehold.co/400x400/e5e7eb/9ca3af?text=Not+Found`;

        card.innerHTML = `
            <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-100 relative">
                 <img src="${product.images[0]}" alt="${product.title}" class="w-full h-full object-cover object-center transition-transform duration-400 group-hover:scale-105" onerror="this.onerror=null; this.src='${fallbackImgUrl}';">
                 <div class="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div class="p-5 flex flex-col flex-grow">
                <h3 class="text-lg font-semibold text-[var(--text-dark)] mb-1 truncate group-hover:text-[var(--primary-color)] transition-colors duration-200">${product.title}</h3>
                <p class="price text-lg font-bold text-[var(--primary-color)] mb-4">${product.price}</p>
                <div class="mt-auto pt-4 border-t border-gray-100">
                      <a href="${product.link}" target="_blank" class="buy-now-card-btn w-full block bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black text-white font-semibold px-4 py-2.5 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center text-sm transform hover:scale-105 group">
                        <span class="transition-transform duration-300 group-hover:translate-x-1 inline-block">Buy Now &rarr;</span>
                     </a>
                </div>
            </div>
        `;

        card.addEventListener('click', (e) => {
            // Check if the click target or its parent is the Buy Now button
            if (e.target.closest('.buy-now-card-btn')) {
                // If it is the buy now button, let the default link behavior happen
                return;
            }
            // Otherwise, show the product detail modal
            showProductDetail(product);
        });

        productGrid.appendChild(card);
    });

    const showProductDetail = (product) => {
        const fallbackImgUrl = `https://placehold.co/500x500/e5e7eb/9ca3af?text=No+Image`;
        const fallbackThumbUrl = `https://placehold.co/100x100/e5e7eb/9ca3af?text=Thumb`;

        largeImage.style.opacity = 0;
        largeImage.src = product.images[0] || fallbackImgUrl;
        largeImage.onload = () => { largeImage.style.opacity = 1; };
        largeImage.onerror = () => {
            largeImage.src = fallbackImgUrl;
            largeImage.style.opacity = 1;
         };
        largeImage.alt = `${product.title} - Main View`;

        thumbnailContainer.innerHTML = '';
        product.images.forEach((image, index) => {
            const thumb = document.createElement('img');
            thumb.src = image || fallbackThumbUrl;
            thumb.alt = `${product.title} thumbnail ${index + 1}`;
            thumb.className = 'h-16 w-16 md:h-20 md:w-20 object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-[var(--primary-color)] transition-all duration-200 shadow-sm hover:shadow-md';
            thumb.onerror = () => { thumb.src = fallbackThumbUrl; };

            if (index === 0) {
                thumb.classList.add('thumbnail-active');
                thumb.classList.remove('border-transparent');
            }

            thumb.addEventListener('click', () => {
                largeImage.style.opacity = 0;
                setTimeout(() => {
                     largeImage.src = image || fallbackImgUrl;
                     largeImage.onload = () => { largeImage.style.opacity = 1; };
                     largeImage.onerror = () => {
                         largeImage.src = fallbackImgUrl;
                         largeImage.style.opacity = 1;
                     };
                }, 150);


                Array.from(thumbnailContainer.children).forEach((child) => {
                    child.classList.remove('thumbnail-active');
                    child.classList.add('border-transparent');
                    child.style.transform = 'scale(1)';
                });
                thumb.classList.add('thumbnail-active');
                 thumb.classList.remove('border-transparent');
                 thumb.style.transform = 'scale(1.05)';
            });
            thumbnailContainer.appendChild(thumb);
        });

        productTitle.textContent = product.title;
        productDescription.textContent = product.description;
        productPrice.textContent = product.price;
        buyLink.href = product.link;
        buyLink.setAttribute('aria-label', `Buy ${product.title} now`);

        productDetail.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        productDetail.focus();
    };

    productDetail.addEventListener('click', (event) => {
        if (event.target === productDetail) {
            closeModal();
        }
    });
     productDetail.addEventListener('keydown', (event) => {
         if (event.key === 'Escape') {
             closeModal();
         }
     });

    function closeModal() {
         const modalContent = productDetail.querySelector('.product-detail-content');
         if (modalContent) {
            modalContent.style.transform = 'scale(0.95) translateY(10px)';
            modalContent.style.opacity = 0;
         }
         productDetail.style.opacity = 0;

         setTimeout(() => {
            productDetail.classList.add('hidden');
            document.body.style.overflow = '';
            productDetail.style.opacity = '';
            if (modalContent) {
                modalContent.style.transform = '';
                modalContent.style.opacity = '';
            }
         }, 350);
    }

});


