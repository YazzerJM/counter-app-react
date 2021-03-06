import PropTypes from 'prop-types';

// import { Fragment } from "react";

const PrimeraApp = ({ saludo, subtitulo }) => {

    
    return (
        <>
            {/* <pre> { JSON.stringify( saludo, null, 3 ) } </pre> */}
            <h1> { saludo } </h1>
            <p> { subtitulo } </p>
        </>
    );

}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;