const cakeData = {
    1: { title: "Cocoa Delight", info: "Cocoa Delight is a rich, moist cake made with premium cocoa for a deep chocolate flavor, balanced with a hint of vanilla. Perfectly layered and frosted with smooth chocolate icing, it's an indulgent treat for any chocolate lover.", price: 9000, image: "/static/images/cake1.png" },
    2: { title: "Classic Vanilla Bliss", info: "Classic Vanilla Bliss is a soft, fluffy cake made with pure vanilla extract, giving it a delicate, sweet aroma and light golden color. Each layer is filled and topped with smooth vanilla buttercream, making it a timeless treat for any occasion.", price: 10000, image: "/static/images/cake2.png" },
    3: { title: "Strawberry Dream", info: "A light, moist cake infused with real strawberries and layered with creamy strawberry frosting, offering a sweet, fruity burst in every bite.", price: 9.000, image: "/static/images/cake3.png" },
    4: { title: "Crimson Velvet", info: "A velvety, rich cake with a hint of cocoa, paired with smooth cream cheese frosting for a perfectly balanced, indulgent treat.", price: 25, image: "/static/images/cake4.png" },
    5: { title: "Lavender Essence", info: "Delicately flavored with lavender essence, this soft, pastel cake brings a subtle floral note, topped with a light vanilla or lavender-infused frosting.", price: 25, image: "/static/images/cake5.png" },
    6: { title: "Espresso Crumble", info: "A moist coffee-flavored cake with a crunchy cinnamon crumble topping, perfect for pairing with a hot cup of coffee.", price: 25, image: "/static/images/cake6.png" },
    7: { title: "Honey Gold", info: "A classic, buttery cake with a golden hue, topped with a smooth vanilla buttercream for a simple yet elegant dessert.", price: 25, image: "/static/images/cake7.png" },
    8: { title: "Festive Fruit Delight", info: "Packed with assorted dried fruits and a hint of spices, this dense cake is ideal for holiday celebrations or anytime indulgence.", price: 25, image: "/static/images/cake8.png" },
    9: { title: "Mocha Chocolate Cake", info: "A rich, moist chocolate cake infused with espresso for a bold mocha flavor, layered with creamy chocolate-coffee frosting. Perfect for coffee and chocolate lovers alike.", price: 25, image: "/static/images/cake9.png" },
    10: { title: "Cherry Blossom", info: "A light and airy cake with real cherries mixed into the batter and topped with a cherry-infused frosting for a fresh, fruity finish.", price: 25, image: "/static/images/cake10.png" },
    11: { title: "Banana Caramel Cake", info: "A soft, banana-infused cake layered with smooth caramel frosting and drizzled with homemade caramel sauce, delivering a sweet, creamy finish with every bite.", price: 25, image: "/static/images/cake11.png" },
    12: { title: "Coconut Almond Dream,", info: "A luxurious, creamy cake layered with coconut and almond flavors, finished with a light coconut cream frosting and shredded coconut topping.", price: 25, image: "/static/images/cake12.png" }
};

function addToFavorites(cakeId) {
    const cake = cakeData[cakeId];
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Check if the item is already in favorites
    const exists = favorites.some(item => item.id === cakeId);
    if (!exists) {
        favorites.push({
            id: cakeId,
            title: cake.title,
            price: cake.price,
            image: cake.image,
        });
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert(`${cake.title} added to favorites!`);
    } else {
        alert(`${cake.title} is already in favorites.`);
    }
}

document.querySelectorAll('.like-cake').forEach(button => {
    button.addEventListener('click', (e) => {
        const cakeId = button.dataset.id; // Assuming data-id holds the cake ID
        addToFavorites(cakeId);
    });
});
