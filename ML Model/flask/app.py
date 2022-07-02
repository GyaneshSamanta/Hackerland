from msilib.schema import File
from flask import Flask, render_template, request
from werkzeug.utils import secure_filename
import os

app = Flask('__name__')
app.config['SECRET_KEY']='password'
app.config['UPLOAD_FOLDER']='static/files'

@app.route('/',methods=['GET','POST'])
def home():
    return 'Server is running'
@app.route('/upload',methods=['GET','POST'])
def upload():
    if request.method == 'POST':
        file=request.files['file']
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        return 'File uploaded successfully'
    else:
        return 'Get request to /upload'


if __name__ == "__main__":
    app.run(debug=True)