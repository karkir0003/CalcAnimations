import React from "react";
import {Mafs, CartesianCoordinates, Plot} from "mafs";
import "mafs/core.css";
import "mafs/font.css";

function BasicFunction() {
    return (
        <Mafs>
            <CartesianCoordinates subdivisions={4}/>
            <Plot.OfX y = {(x) => x * x}/>
        </Mafs>
    )
};

export default BasicFunction;