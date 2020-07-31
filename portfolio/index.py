import logging
import os

from flask import Flask, redirect, render_template, request, url_for
from flask_sslify import SSLify

app = Flask(__name__)
sslify = SSLify(app, permanent=True)


# Page Routes
@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')


@app.route('/_ah/warmup')
def warmup():
    # Handle your warmup logic here, e.g. set up a database connection pool
    return '', 200, {}


# File Routes
@app.route('/sitemap.xml')
def sitemap():
    return app.send_static_file('sitemap.xml')


@app.route('/robots.txt')
def robots():
    return app.send_static_file('robots.txt')


@app.route('/favicon.ico')
def favicon():
    return app.send_static_file('favicon.ico')


# Error Routes
@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404


@app.errorhandler(500)
def server_error(e):
    return render_template('500.html'), 500


if __name__ == '__main__':
    # Bind to PORT if defined, otherwise default to 5000.
    port = int(os.environ.get('PORT', 5000))
    app.run(host='127.0.0.1', port=port)
