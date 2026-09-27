import { useState } from "react"
import { bmiInfo } from "../data/gymData"
import "../styles/BMICalculator.css"
function BmiCalculator(){

    const [formData, setFormData] = useState({
        height: "",
        heightUnit: "cm",
        weight: ""
    })

    const [bmi, setBmi] = useState(null)
    const [category, setCategory] = useState("")
    const [suggestion, setSuggestion] = useState("")

    const [error, setError] = useState({
        height:"",
        weight:""
    })


    function handleChange(e){
        const {name,value} = e.target

        setFormData((prev)=>({
            ...prev,
            [name]:value
        }))
    }


    function handleSubmit(e){
        e.preventDefault()

        let newError = {
            height:"",
            weight:""
        }

        if(formData.height.trim()===""){
            newError.height="Height is required"
        }

        if(formData.weight.trim()===""){
            newError.weight="Weight is required"
        }

        setError(newError)

        if(newError.height || newError.weight){
            return
        }

        const heightNumber = Number(formData.height)
        const weightNumber = Number(formData.weight)

        if(heightNumber <=0 || weightNumber <=0){
            return
        }

        let heightMeter

        if(formData.heightUnit==="cm"){
            heightMeter = heightNumber / 100
        }
        else if(formData.heightUnit==="ft"){
            heightMeter = heightNumber * 0.3048
        }

        const calculatedBMI = weightNumber / (heightMeter * heightMeter)
        const finalBMI = calculatedBMI.toFixed(2)

        setBmi(finalBMI)

        const bmiCategory = getBmiCategory(Number(finalBMI))
        setCategory(bmiCategory)

        const bmiSuggestion = getSuggestion(bmiCategory)
        setSuggestion(bmiSuggestion)
    }

    function handleReset(){
        setFormData({
            height:"",
            heightUnit:"cm",
            weight:""
        })

        setBmi(null)
        setCategory("")
        setSuggestion("")
        setError({
            height:"",
            weight:""
        })
    }

    function getBmiCategory(bmiValue){
        if(bmiValue < 18.5){
            return "Underweight"
        }
        else if(bmiValue < 25){
            return "Normal Weight"
        }
        else if(bmiValue < 30){
            return "Overweight"
        }
        else{
            return "Obese"
        }
    }

    function getSuggestion(category){
        return bmiInfo[category].suggestion
    }

    return (
        <div className="bmi-card">
            <h2>Calculate Your BMI</h2>

            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>Height</label>

                    <input
                    type="number"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                    placeholder="Enter your height"
                    />

                    <select
                    name="heightUnit"
                    value={formData.heightUnit}
                    onChange={handleChange}
                    >
                        <option value="cm">
                            CM
                        </option>

                        <option value="ft">
                            Feet
                        </option>

                    </select>

                    {error.height && 
                    <p>{error.height}</p>
                    }
                </div>

                <div className="input-group">
                    <label>Weight</label>

                    <input
                    type="number"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    placeholder="Enter your weight"
                    />

                    {error.weight &&
                    <p>{error.weight}</p>
                    }

                </div>

                <div className="bmi-buttons">
                    <button 
                    type="submit"
                    className="calculate-btn"
                    >
                        Calculate
                    </button>

                    <button
                    type="button"
                    onClick={handleReset}
                    className="reset-btn"
                    >
                        Reset
                    </button>
                </div>
            </form>

            <div className="result-box">
                {bmi && (
                    <>
                    <h3>
                        Your BMI : {bmi}
                    </h3>

                    <h4>
                        {category}
                    </h4>

                    <p>
                        {suggestion}
                    </p>
                    </>
                )}
            </div>
        </div>
    )
}


export default BmiCalculator
