import React from "react"
import styles from './Weather.module.css'
class Weather extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            "location":"Montreal",
            "apiKey":"f9754b5541972d483a5a8c8b839e5d46",
            "temp":"",
            "status":""
        }

    }
    componentDidMount() {
        this.getWeather(this.state.location)
     }

    handleChange=(event)=>{

        this.setState({[event.target.name]:event.target.value})
        if(event.target.value===""){
            document.getElementById("response_data").innerHTML=""
            this.setState({'status':'select a city above'})
        }

     }
     getWeather=()=>{

        this.setState({'status':''})
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+this.state.location+"&appid="+ this.state.apiKey,
        {
            method: 'GET',
        }
    )
        .then((response) => {
            console.log(response)
            if (!response.ok) {
                document.getElementById("response_data").innerHTML=''
                this.setState({'location':''})
                this.setState({'status':'Error: city not found'})
                return {}
            } else {

                return response.json()
            }

        })
        .then(

            (data) => {



                if (Object.keys(data).length !== 0) {


                    this.setState({temp: data['main'].temp-273.15})



                    let html = ''
                     html += '<table>'

                        html += '<tr><td>CurrentTemp: ' + Math.round(this.state.temp*100)/100 + 'C</td></tr><tr><td>description: ' + data['weather'].map(function(p) {return p['description']}) + '</td><tr><td>pressure: '+data['main'].pressure+'hpa</td><tr><td>humidity: '+data['main'].humidity+'%</td></tr>'


                     document.getElementById("response_data").innerHTML = html

                }
            },

            (error) => {


                this.setState({'status':'Error: failed to fetch'})

            }
        )


     }

render() {
    return (

        <div className={styles.table}>
            Weather Data from <a href="https://openweathermap.org/">OpenWeathermap.org</a><br/>
            Type a city followed an optional country 2 letter code.<br/>
            <br/>
            For example type Montreal or Montreal,ca to specify Canada(ca) <a href="https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes">see ISO 3166 country code</a><br/>

<input className={styles.input} type="text"name="location"id=""value={this.state.location} placeholder="Enter a city" onChange={(event) => this.handleChange(event)} />
<button  className={styles.button} type='button' onClick={()=>this.getWeather()}>Search</button>

<div  id="response_data"></div>
<div> {this.state.status}</div>
        </div>
    )
}

}
export default Weather