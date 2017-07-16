#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = 'Ryder McMinn'
SITENAME = 'Ryder McMinn'
SITEURL =  '' #'http://www.rydermcminn.com'

PATH = 'content'

TIMEZONE = 'America/Indianapolis'

DEFAULT_LANG = 'en'

DEFAULT_METADATA = {
    'Status': 'Draft',
}

#Analytics
GOOGLE_ANALYTICS = 'UA-46448239-3'

 # Static Files
STATIC_PATHS = [
    'images',
    'author/images',
    'extra/favicon.ico'
]
EXTRA_PATH_METADATA = {
    'extra/favicon.ico': {'path': 'favicon.ico'}
}

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (('Pelican', 'http://getpelican.com/'),
         ('Python.org', 'http://python.org/'),
         ('Jinja2', 'http://jinja.pocoo.org/'),
         ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('twitter', 'https://twitter.com/rydermcminn'),
          ('github', 'https://github.com/rmcminn'),
          ('envelope','mailto:mcminnra@gmail.com'))

DEFAULT_PAGINATION = 5

# Theme
THEME = "pelican-themes/attila"
HEADER_COVER = 'images/space.jpeg'

AUTHORS_BIO = {
  "mcminnra": {
    "name": "Ryder McMinn",
    "cover": "images/spaceman.jpg",
    "image": "https://arulrajnet.github.io/attila-demo/assets/images/avatar.png",
    "email": "mailto:mcminnra@gmail.com",
    "website": "http://rydermcminn.com",
    "location": "Bloomington, IN",
    "bio": "#DataScience Graduate Student at Indiana University // Amateur Mad Scientist and Hopeful Space Explorer."
  }
}

# Plugins
PLUGIN_PATHS = ['pelican-plugins']
PLUGINS = []

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True
