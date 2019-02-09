import React from 'react';

const Result = props => {
    const { img } = props.info
    return (
        <div>
            <img src={img} alt="" />
            <br />
            <div className="text">
                <h2>Tarnów:</h2>
                <p>Longtidue: 20.986601<br />
                    Latidue: 50.015732 </p>
                <a href="https://www.latlong.net/" target="_blank" rel="noopener noreferrer">more coordinates</a>
            </div>
        </div>
    );
}

export default Result;