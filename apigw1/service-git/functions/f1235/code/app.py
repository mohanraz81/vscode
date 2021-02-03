from flask import Flask
app = Flask(__name__)
@app.route('/v1/r123457something', methods=['GET'])
def f1235():
	response={
		"status": 200
	}
	return(response)