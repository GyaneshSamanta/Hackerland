from flask import Flask, render_template
from flask_wtf import FlaskForm
from wtforms import FileField
app = Flask('__name__')


@app.route('/')
@app.route('/home')
def home():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)