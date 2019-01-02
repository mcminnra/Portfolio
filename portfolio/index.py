import logging
import os

from flask import Flask, render_template, request, url_for

app = Flask(__name__)
application = app  # for Apache WSGI

app.debug = "off"

# ...if being run on gunicorn
if __name__ != '__main__':
    gunicorn_logger = logging.getLogger('gunicorn.error')
    app.logger.handlers = gunicorn_logger.handlers
    app.logger.setLevel(gunicorn_logger.level)

# Logging
def log_access():
    referer = request.environ.get('HTTP_REFERER')
    ip = request.environ.get('HTTP_X_REAL_IP', request.remote_addr)
    user_agent = request.environ.get('HTTP_USER_AGENT')
    app.logger.info(f'[{request.full_path}] IP: {ip}, Referer: {referer}, User-Agent: {user_agent}')   

@app.route('/')
def index():
    log_access()
    return render_template('index.html')

@app.route('/splash')
def splash():
    log_access()
    return render_template('splash.html')

# Files
@app.route('/humans.txt')
def humans():
    log_access()
    return app.send_static_file('humans.txt')

@app.route('/robots.txt')
def robots():
    log_access()
    return app.send_static_file('robots.txt')

@app.route('/favicon.ico')
def favicon():
    return app.send_static_file('favicon.ico')

# Errors
@app.errorhandler(404)
def page_not_found(e):
    log_access()
    app.logger.error(f'404 Error - {request.full_path}')
    return render_template('404.html'), 404

if __name__ == '__main__':
    # Bind to PORT if defined, otherwise default to 5000.
    port = int(os.environ.get('PORT', 5000))
    app.run(host='127.0.0.1', port=port)
