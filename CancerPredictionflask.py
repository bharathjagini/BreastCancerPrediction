from flask import Flask,jsonify
import numpy as np
import pickle 
import json
from flask_cors import CORS, cross_origin
from flask import request
from twilio.rest import Client
app = Flask(__name__)
cors = CORS(app)
account_sid ='AC64206d20e1b11dc96240ecadaf2c3be6'
auth_token = 'bf3135dcd4cba77ef62f1c376feb8675'
client = Client(account_sid, auth_token)
#cors = CORS(app, resources={"*": {"origins": "*"}})
#CORS(app)
model = pickle.load(open('model.pkl', 'rb'))
@app.route("/predictCancer",methods=['POST'])
#@cross_origin()
def hello():
    
    #new_quark = request.get_json()
    print('new_quark')
    print(request.is_json)
    content=request.get_json(force=True)
    print (content['radiusMean'])
    values=([content['radiusMean'],content['textureMean'],content['perimeterMean'],content['areaMean'],content['perimeterSe'],content['areaSe'],content['radiusWorst'],content['textureWorst'],content['perimeterWorst'],content['areaWorst']])
    final_Values = [np.array(values)]
    print(final_Values)
    #print(json.dumps(predictCancerReq))
   # print('predictCancerReq',predictCancerReq['radiusMean'])
    pred2=model.predict(final_Values)
    #pred=model.predict([[17.99,	10.38,	122.80,	1001.0,	8.589,	153.40,	25.38,	17.33,	184.60,	2019.0]])
    #pred1=model.predict([[13.54,	14.36,	87.46,	566.3,	2.058,	23.56,	15.11,	19.26,	99.70,	711.2]])
    print(pred2[0])
    result=pred2[0]
    msg=""
    if result==0:
        msg='Benign'
    else:
        msg='Malignant'

    message = client.messages.create(
                              body=msg,
                              from_='+14122754329‬',
                              to='+14027801331‬'

                          )
    print(message.sid)                      
    return str(result)
