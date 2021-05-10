import { Component } from 'react';
import "./CancerPrediction.css"
import axios from 'axios';


 

class CancePrediction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            predictCancerReq: {
                radiusMean: 17.99,
                textureMean: 10.38,
                perimeterMean: 122.80,
                areaMean: 1001.0,
                perimeterSe: 8.589,
                areaSe: 153.40,
                radiusWorst: 25.38,
                textureWorst: 17.33,
                perimeterWorst: 184.60,
                areaWorst: 2019.0
            },
            predictCancerResult:0,
        }
    }
    radiusMeanChanged = (e) => {
        const predictCancerReq = this.state.predictCancerReq;
        predictCancerReq.radiusMean = e.target.value;
        this.setState({
            predictCancerReq: predictCancerReq
        })
    }
    textureMeanChanged = (e) => {
        const predictCancerReq = this.state.predictCancerReq;
        predictCancerReq.textureMean = e.target.value;
        this.setState({
            predictCancerReq: predictCancerReq
        })
    }
    perimeterMeanChanged = (e) => {
        const predictCancerReq = this.state.predictCancerReq;
        predictCancerReq.perimeterMean = e.target.value;
        this.setState({
            predictCancerReq: predictCancerReq
        })
    }
    areaMeanChanged = (e) => {
        const predictCancerReq = this.state.predictCancerReq;
        predictCancerReq.areaMean = e.target.value;
        this.setState({
            predictCancerReq: predictCancerReq
        })
    }
    perimeterSeChanged = (e) => {
        const predictCancerReq = this.state.predictCancerReq;
        predictCancerReq.perimeterSe = e.target.value;
        this.setState({
            predictCancerReq: predictCancerReq
        })
    }
    areaSeChanged = (e) => {
        const predictCancerReq = this.state.predictCancerReq;
        predictCancerReq.areaSe = e.target.value;
        this.setState({
            predictCancerReq: predictCancerReq
        })
    }
    radiusWorstChanged = (e) => {
        const predictCancerReq = this.state.predictCancerReq;
        predictCancerReq.radiusWorst = e.target.value;
        this.setState({
            predictCancerReq: predictCancerReq
        })
    }
    textureWorstChanged = (e) => {
        const predictCancerReq = this.state.predictCancerReq;
        predictCancerReq.textureWorst = e.target.value;
        this.setState({
            predictCancerReq: predictCancerReq
        })
    }
    perimeterWorstChanged = (e) => {
        const predictCancerReq = this.state.predictCancerReq;
        predictCancerReq.perimeterWorst = e.target.value;
        this.setState({
            predictCancerReq: predictCancerReq
        })
    }
    areaWorstChanged = (e) => {
        const predictCancerReq = this.state.predictCancerReq;
        predictCancerReq.areaWorst = e.target.value;
        this.setState({
            predictCancerReq: predictCancerReq
        })
    }
    predictCancer = async () => {
        console.log(this.state.predictCancerReq)
       const validated= await this.validateValues();
        if(validated){
        axios
            .post(
                 "http://127.0.0.1:5000/predictCancer",this.state.predictCancerReq
            )
            .then(response => {
                console.log("Status Code : ", response.status);
                if (response.status === 200) {
                    console.log(response);
                    this.setState({
                    predictCancerResult:response.data
                    })
if(response.data===1)
{
    alert("Malignant")
   
}
else
alert("Benign")

                }
            })
            .catch(error => {
                console.log(error.response);

            });
        }
    }
   
    validateValues=()=>{
        return new Promise((resolve,reject)=>{
        const check = new RegExp("[+-]?([0-9]*[.])?[0-9]+$");
     if (check.exec(this.state.predictCancerReq.radiusMean) === null)
    {
        alert("Please enter proper value")
        return resolve(false);
    }
    if (check.exec(this.state.predictCancerReq.textureWorst) === null)
    {
        alert("Please enter proper value")
        return resolve(false);
    }
    if (check.exec(this.state.predictCancerReq.perimeterMean) === null)
    {
        alert("Please enter proper value")
        return resolve(false);
    }
      if (check.exec(this.state.predictCancerReq.areaMean) === null)
    {
        alert("Please enter proper value")
        return resolve(false);
    }
    if (check.exec(this.state.predictCancerReq.perimeterSe) === null)
    {
        alert("Please enter proper value")
        return resolve(false);
    }
    if (check.exec(this.state.predictCancerReq.areaSe) === null)
    {
        alert("Please enter proper value")
        return resolve(false);
    }
    if (check.exec(this.state.predictCancerReq.radiusWorst) === null)
    {
        alert("Please enter proper value")
        return resolve(false);
    }
    if (check.exec(this.state.predictCancerReq.textureWorst) === null)
    {
        alert("Please enter proper value")
        return resolve(false);
    }
    if (check.exec(this.state.predictCancerReq.perimeterWorst) === null)
    {
        alert("Please enter proper value")
        return resolve(false);
    }
    if (check.exec(this.state.predictCancerReq.areaWorst) === null)
    {
        alert("Please enter proper value")
        return resolve(false);
    }
    return resolve(true);
})
}
    render() {
        return (
            <div className="predictionFeatures">
                <h1>Breast Cancer Prediction</h1>
                <div className="predGridContainer">

                    <div className="predDetails1">
                        <div className="editRadiusMean">
                            <span className="predLabels" >Radius Mean</span><br />

                            <input type="text" name="radiusMean" className="predData" style={{ height: '30px', marginTop: '15px' }} value={this.state.predictCancerReq.radiusMean} onChange={this.radiusMeanChanged} />
                        </div>

                        <div className="editTextureMean">
                            <span className="predLabels">Texture Mean</span><br />
                            <input type="text" name="textureMean" className="predData" value={this.state.predictCancerReq.textureMean} onChange={this.textureMeanChanged} />
                        </div>

                        <div className="editPerimeterMean">
                            <span className="predLabels">Perimeter Mean</span><br />
                            <input type="text" name="perimeterMean" className="predData" value={this.state.predictCancerReq.perimeterMean} onChange={this.perimeterMeanChanged} />
                        </div>

                        <div className="editAreaMean">
                            <span className="predLabels">Area Mean</span><br />
                            <input type="text" name="areaMean" className="predData" value={this.state.predictCancerReq.areaMean} onChange={this.areaMeanChanged} />
                        </div>
                        <div className="editPerimeterSe">
                            <span className="predLabels">Perimeter Se</span><br />
                            <input type="text" name="perimeterSe" className="predData" value={this.state.predictCancerReq.perimeterSe} onChange={this.perimeterSeChanged} />
                        </div>
                    </div>
                    <div className="predDetails2">
                        <div className="editAreaSe">
                            <span className="predLabels">Area Se</span><br />
                            <input type="text" name="areaSe" className="predData" value={this.state.predictCancerReq.areaSe} onChange={this.areaSeChanged} />
                        </div>
                        <div className="editRadiusWorst">
                            <span className="predLabels">Radius Worst</span><br />
                            <input type="text" name="radiusWorst" className="predData" value={this.state.predictCancerReq.radiusWorst} onChange={this.radiusWorstChanged} />
                        </div>
                        <div className="editTextureWorst">
                            <span className="predLabels">Texture Worst</span><br />
                            <input type="text" name="textureWorst" className="predData" value={this.state.predictCancerReq.textureWorst} onChange={this.textureWorstChanged} />
                        </div>
                        <div className="editPerimeterWorst">
                            <span className="predLabels">Perimeter Worst</span><br />
                            <input type="text" name="perimeterWorst" className="predData" value={this.state.predictCancerReq.perimeterWorst} onChange={this.perimeterWorstChanged} />
                        </div>
                        <div className="editAreaWorst">
                            <span className="predLabels">Area Worst</span><br />
                            <input type="text" name="areaWorst" className="predData" value={this.state.predictCancerReq.areaWorst} onChange={this.areaWorstChanged} />
                        </div>
                    </div>

                </div>
                <button className="predictBtn" onClick={this.predictCancer}>Predict</button>
            </div>
        );
    }
}

export default CancePrediction;