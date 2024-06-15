from flask import Flask, render_template, request, redirect, url_for
from PIL import Image, ImageChops, ImageEnhance
import tensorflow as tf
import numpy as np

app = Flask(__name__)

# @app.route('/predict', methods=['GET', 'POST'])
# def predict():
#     if request.method == 'POST':
#         make_prediction()
#         return redirect(url_for('predict'))
#     return render_template('predict.html')

@app.route('/predict', methods=['GET', 'POST'])
def predict():
    result = None
    if request.method == 'POST':
        result = make_prediction()
    return render_template('predict.html', result=result)

def make_prediction():
    filepath='aa-Cover-vhobga052m2s92bvuc37ca5556-20170807014459.jpeg'
    model=tf.keras.models.load_model('image_tampering_ft.h5')
    classes=["Tampered","Authentic"]
    img = prepare_image(filepath)
    prediction = model.predict(img.reshape(1,224,224,3))
    return classes[int(tf.round(prediction[0]))]
    

def convert_to_ela_image(path, quality):
    temp_filename = 'temp_file_name.jpg'
    image = Image.open(path).convert('RGB')
    image.save(temp_filename, 'JPEG', quality = quality)
    temp_image = Image.open(temp_filename)
    ela_image = ImageChops.difference(image, temp_image)
    extrema = ela_image.getextrema()
    max_diff = max([ex[1] for ex in extrema])
    if max_diff == 0:
        max_diff = 1
    scale = 255.0 / max_diff
    ela_image = ImageEnhance.Brightness(ela_image).enhance(scale)
    return ela_image

image_size = (224,224)
def prepare_image(image_path):
    return np.array(convert_to_ela_image(image_path, 90).resize(image_size)).flatten() / 255.0

