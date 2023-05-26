import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "mapbox-gl/dist/mapbox-gl.css";


function myApp({Component, pageProps}){
    return <Component {...pageProps}/>
}

export default myApp;