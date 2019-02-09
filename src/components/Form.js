import React from 'react';
import '../css/Form.css'



const Form = props => {

    return (
        <React.Fragment>
            <form onSubmit={props.submit}>
                <input className="textbox"
                    type="text"

                    onChange={props.long}
                    placeholder="longitude"
                />

                <input className="textbox"
                    type="text"

                    onChange={props.lat}
                    placeholder="latitude"
                />
                <br></br>
                <input className="textbox zoom"
                    type="text"
                    onChange={props.zoom}
                    placeholder="zoom (always 0.000 or more)"
                />

                <button className="btn">
                    Wyszukaj
                </button>



            </form>

        </React.Fragment>
    )
}

export default Form;