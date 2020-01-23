#! /usr/bin/python
# -*- coding:utf-8 -*-

from flask import Flask
from flask import request
from flask import jsonify
from flask import json
import jsonpath
app = Flask(__name__)

@app.route('/')
def index():
    return "Hello !"

@app.route('/foo', methods=['POST'])
def foo():
    data = request.json
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
