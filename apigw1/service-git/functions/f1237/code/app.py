from flask import Flask
app = Flask(__name__)
@app.route('/v1/r123456/t1/<test>/s1/<m1>', methods=['POST'])
def f1237(test, m1):
	response={
		"status": 200
	}
	return(response)