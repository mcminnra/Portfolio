import logging
import os

from flask import Flask, redirect, render_template, request, url_for
from flask_sslify import SSLify

app = Flask(__name__)
sslify = SSLify(app)

@app.before_request
def before_request():
#     # Force https use
#     if request.url.startswith('http://') and not app.debug:
#         url = request.url.replace('http://', 'https://', 1)
#         return redirect(url, code=301)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/splash')
def splash():
    return render_template('splash.html')

# Files
@app.route('/humans.txt')
def humans():
    return app.send_static_file('humans.txt')

@app.route('/robots.txt')
def robots():
    return app.send_static_file('robots.txt')

@app.route('/favicon.ico')
def favicon():
    return app.send_static_file('favicon.ico')

# Errors
@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

if __name__ == '__main__':
    # Bind to PORT if defined, otherwise default to 5000.
    port = int(os.environ.get('PORT', 5000))
    app.run(host='127.0.0.1', port=port)
