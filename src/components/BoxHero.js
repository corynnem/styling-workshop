import React from 'react';
import Radium from 'radium'


const styles = {
    boxhero: {
        backgroundColor: 'black',
        height: '80vh',
        color: '#F78A7E',
        textAlign: 'center',
        paddingTop: '12em'
    },
    button: {
        backgroundColor: '#F78A7E',
        borderColor: '#F78A7E',
        borderRadius: '50px',
        height: '4em',
        width: '10em',
            ":hover": {
            backgroundColor: "#FFAAA0",
            borderColor: "#FFAAA0"
        }
    }, 
  
}


const BoxHero = () => {

    return (
        <div style={styles.boxhero}>
            <h2>SEE THE STARS THE WAY NATURE INTENDED</h2>
            <button style={styles.button}>SHOP NOW</button>
        </div>
    )
}

export default Radium(BoxHero);