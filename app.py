from flask import Flask, render_template, request, redirect, url_for, session

app = Flask(__name__)
app.secret_key = 'your_secret_key'


cakes = [
    {"id": 1, "name": "Chocolate Cake", "info": "Delicious chocolate cake.", "price": 20,
     "image": "https://bittersweetpastry.com/cdn/shop/files/VIP_Cake_2024.jpg?v=1725742432"},
    {"id": 2, "name": "Vanilla Cake", "info": "Creamy vanilla cake.", "price": 18,
     "image": "https://bizu.ph/cdn/shop/files/StrawberryRoseCake2_1200x1200.webp?v=1725958540"},
    {"id": 3, "name": "Strawberry Cake", "info": "Fresh strawberry cake.", "price": 22,
     "image": "https://www.peggyporschen.com/cdn/shop/files/PP_Val24_LoveHeartLC_CO_002_1200x1200.jpg?v=1706346321"},
    {"id": 4, "name": "Red Velvet Cake", "info": "Rich red velvet cake.", "price": 25,
     "image": "https://laneandgreyfare.com/wp-content/uploads/2022/02/Strawberry-Red-Velvet-Cake-1.jpg"},
]

@app.route('/')
def home():
    return render_template('home.html', cakes=cakes)

@app.route('/registration', methods=['GET', 'POST'])
def registration():
    if request.method == 'POST':
        # Handle registration logic (e.g., save user info)
        return redirect(url_for('home'))
    return render_template('registration.html')

@app.route('/account')
def account():
    # Placeholder for account details
    return render_template('account.html')

@app.route('/settings')
def settings():
    return render_template('settings.html')

@app.route('/favorites')
def favorites():
    if 'favorites' not in session:
        session['favorites'] = []
    favorites_cakes = [cakes[int(cake_id) - 1] for cake_id in session['favorites']]
    return render_template('favorites.html', favorites=favorites_cakes)

@app.route('/like/<int:cake_id>')
def like(cake_id):
    if 'favorites' not in session:
        session['favorites'] = []
    if cake_id not in session['favorites']:
        session['favorites'].append(cake_id)
    return redirect(url_for('home'))

@app.route('/remove_favorite/<int:cake_id>')
def remove_favorite(cake_id):
    if 'favorites' in session and cake_id in session['favorites']:
        session['favorites'].remove(cake_id)
    return redirect(url_for('favorites'))

@app.route('/cart', methods=['POST'])
def add_to_cart():
    if 'cart' not in session:
        session['cart'] = []
    cart_item = {
        'cake_id': request.form['cake_id'],
        'quantity': request.form['quantity'],
        'name': request.form['name'],
        'phone': request.form['phone']
    }
    session['cart'].append(cart_item)
    session.modified = True  # Mark session as modified
    return redirect(url_for('home'))

@app.route('/view_cart')
def view_cart():
    if 'cart' not in session:
        session['cart'] = []
    cart_items = [cakes[int(item['cake_id']) - 1] for item in session['cart']]
    return render_template('cart.html', cart=cart_items)

if __name__ == '__main__':
    app.run(debug=True)
