import logging
import os

from flask import Flask, render_template, url_for

app = Flask(__name__)
application = app  # for Apache WSGI

app.debug = "off"

# ...if being run on gunicorn
if __name__ != '__main__':
    gunicorn_logger = logging.getLogger('gunicorn.error')
    app.logger.handlers = gunicorn_logger.handlers
    app.logger.setLevel(gunicorn_logger.level)  

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
