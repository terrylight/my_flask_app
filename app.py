from flask import Flask, render_template, request, redirect, url_for, flash
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import UserMixin, LoginManager, login_user, login_required, logout_user, current_user
import os

# Flask app setup
app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'mysecretkey')
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', 'sqlite:///site.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Database setup
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)

# Login manager setup
login_manager = LoginManager(app)
login_manager.login_view = 'login'

# Initialize database tables (with error handling)
def create_tables():
    try:
        with app.app_context():
            db.create_all()
            print("✅ Database tables created or already exist.")
    except Exception as e:
        print(f"❌ Error creating database tables: {e}")

# Call the create_tables function
create_tables()


# User model
class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(150), unique=True, nullable=False)
    password = db.Column(db.String(150), nullable=False)

# Contact Form model
class ContactForm(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), nullable=False)

# Product model
class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    price = db.Column(db.Float, nullable=False)
    description = db.Column(db.Text, nullable=True)

# User loader
@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

# Routes

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        new_entry = ContactForm(name=name, email=email)
        db.session.add(new_entry)
        db.session.commit()
        flash(f"Thank you for contacting us, {name}! We'll respond to {email} soon.", 'success')
        return redirect(url_for('contact'))
    return render_template('contact.html')

@app.route('/shop')
def shop():
    products = Product.query.all()
    return render_template('shop.html', products=products)

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
        user = User.query.filter_by(username=username).first()
        if user:
            flash('Username already exists.', 'danger')
            return redirect(url_for('register'))
        new_user = User(username=username, password=hashed_password)
        db.session.add(new_user)
        db.session.commit()
        flash('Registration successful.', 'success')
        return redirect(url_for('login'))
    return render_template('register.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        user = User.query.filter_by(username=username).first()
        if user and bcrypt.check_password_hash(user.password, password):
            login_user(user)
            flash('Login successful.', 'success')
            return redirect(url_for('dashboard'))
        else:
            flash('Login failed. Check username and password.', 'danger')
            return redirect(url_for('login'))
    return render_template('login.html')

@app.route('/dashboard')
@login_required
def dashboard():
    return render_template('dashboard.html')

@app.route('/logout')
@login_required
def logout():
    logout_user()
    flash('Logged out successfully.', 'info')
    return redirect(url_for('login'))

# New Routes

@app.route('/blog-post/<int:id>')
def blog_post(id):
    return render_template('blog_post.html', post_id=id)

@app.route('/subscribe', methods=['POST'])
def subscribe():
    email = request.form['email']
    # Logic to save the email to your database or send a confirmation
    flash(f"Subscription successful! Thank you for subscribing with {email}.", 'success')
    return redirect(url_for('home'))

@app.route('/terms')
def terms():
    return render_template('terms.html')  # Create terms.html

@app.route('/privacy-policy')
def privacy_policy():
    return render_template('privacy.html')  # Create privacy.html

@app.route('/shipping')
def shipping():
    return render_template('shipping.html')  # Create shipping.html

@app.route('/support')
def support():
    return render_template('support.html')  # Create support.html

@app.route('/privacy')
def privacy():
    return render_template('privacy.html')  # Create privacy.html

# Only for local testing
if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    app.run(host="0.0.0.0", port=port)
