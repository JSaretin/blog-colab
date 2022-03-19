from flask import Flask 
from flask_cors import CORS

# this will create a flask instance
app = Flask(__name__)
CORS(app, origins="*")


# valid var names
# post_id
# postId (not encourage in Python though)
# You can not use " in var decleration 


@app.get('/') # this will work
def home(): # this will raise an error, because you did not pass a "post_id" in the expected url
    return "Hello world"

@app.delete('/delete/<post_id>')
def delete_post(post_id):
    return f"post deleted {post_id}"

@app.post('/crate-post')
def create_new_post():
    return "post created"

@app.put('/update-post/<post_id>')
def update_post(post_id):
    return "updated post"



#This is simply to run the file
if '__main__'  == __name__:
    app.run(debug=True)