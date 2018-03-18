import React from "react";
import Title from "./components/title";
import Form from "./components/form"
import Weather from "./components/weather"
const API_Key = "c19c5c647b083a229f7be182dfc11336";

class App extends React.Component {

    state = {
        city: undefined,
        temperature: undefined,

        country: undefined,
        humidity: undefined,
        error: undefined,
        description: undefined
    }

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_Key}`
        )

        const data = await api_call.json();
        if (city && country) {
            console.log(data);
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ""
            })
        } else {
            this.setState({
                city: undefined,
                temperature: undefined,

                country: undefined,
                humidity: undefined,
                error: "Please enter the Values",
                description: undefined
            })
        }
    }

    render() {


        return (
            <div>
                <div className="wrapper">
                    <div className="main ">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5 title-container">
                                    <Title/>
                                </div>
                                <div className="col-lg-7 form-container">
                                    <Form getWeather={this.getWeather}/>
                                    <Weather
                                        city={this.state.city}
                                        country={this.state.country}
                                        temperature={this.state.temperature}
                                        humidity={this.state.humidity}
                                        description={this.state.description}
                                        error={this.state.error}
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default App;
