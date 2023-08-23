import React, { Fragment, useState, useEffect } from "react"
import './flagGame.css'
import { ComposableMap, Geographies, Geography } from "react-simple-maps"

const FlagGame = (props) => {
    const [Flag, setFlag] = useState([{
        flag: null,
        titulo: null,
    }])
    const [AFlag, setAFlag] = useState(0)
    const [puntaje, setPuntaje] = useState(0)

    useEffect(() => {
        const obtenerAFlag = () => {
            fetch("https://countriesnow.space/api/v0.1/countries/flag/images")
                .then(res => res.json())
                .then(res => {
                    const updatedFlag = res.data.map(e => ({
                        flag: e.flag,
                        nombre: e.name.toUpperCase()
                    }))
                    setFlag(updatedFlag)
                })
        }
        obtenerAFlag()
    }, [])
    useEffect(()=>{
        setAFlag(Math.floor(Math.random() * Flag.length))
    }, [Flag])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (Flag[AFlag].nombre === document.getElementsByName("pais")[0].value.toUpperCase()) {
            document.getElementsByName("pais")[0].value = ''
            setAFlag(Math.floor(Math.random() * Flag.length))
            setPuntaje((e) => e + 10)
            console.log("correcto")
            console.log(document.getElementsByName("pais")[0].value)
        }
        else {
            document.getElementsByName("pais")[0].value = ''
            setPuntaje((e) => e -1)
            console.log("incorrecto")
            console.log(document.getElementsByName("pais")[0].value)
        }
    }
    
    return (
        <>

            <h1>Major Geographical Regions of the World</h1>
            <div class="container texto"><h5>¿de que pais se trata?</h5></div>
            <form onSubmit={handleSubmit}>
                <div class= "container-lg"> <ComposableMap>
        <Geographies geography={"https://raw.githubusercontent.com/deldersveld/topojson/master/world-land.json"}>
        {({ geographies }) =>
        geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} fill="#C4BFD4"stroke="#6C5E99"/>
        ))
        }
        </Geographies>
    </ComposableMap></div>
                <input type="text" name="pais" className="u-full-width" placeholder={Flag[AFlag].nombre} />
                <button type="submit" className="u-full-width button-primary">Submit</button>
                <h3>Tu puntaje es {puntaje}</h3>
            </form>
        </>
    )
}

export default FlagGame