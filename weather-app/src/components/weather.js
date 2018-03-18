import React from "react";

//We can make it stateless by just removing this and passing props into arrow function and removing this class keyword and converting it into a const
const Weather=props=> (
            <div className="weather__info">
                {props.city && props.country && <p className="weather__key"> Location:
                    <span className="value">  {props.city}, {props.country}</span>
                </p>}

                {props.temperature && <p className="weather__key"> Temperature:
                    <span className="value">  {props.temperature}</span>
                </p>}
                {props.humidity && <p className="weather__key"> Humidity:
                    <span className="value"> {props.humidity}</span>
                </p>}
                {props.description && <p className="weather__key"> Description:
                    <span className="value">  {props.description}</span>
                </p>}
                <span className="weather__error">{props.error && <p className="weather__key">{props.error}</p>}</span>
            </div>


);
export default Weather;