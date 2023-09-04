import React, { Fragment, useState, useEffect } from "react"
import { Link, Route } from "react-router-dom"
import './CambioClimatico.css'
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"
import Problematica from "./Problematica"

const CambioClimatico = (props) => {
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

            <h1>CAUSAS DEL CAMBIO CLIMATICO</h1>
                <div class="box"> <ComposableMap>
        <Geographies geography={  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"}>
        {({ geographies }) =>
        geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} fill="#C4BFD4"stroke="#6C5E99"/>
        ))
        }
        </Geographies>
        <Marker coordinates={[134.367299, -25.152789]}>
        <circle r={10} fill="#9CEBAF" stroke="#6C5E99" /><text textAnchor="middle" dy={"0.3rem"} fill="#6C5E99" fontSize={"1rem"}>
            1</text></Marker>

        <Link to={`/CambioClimatico/Problematica/:2`}><Marker coordinates={[42.092147, 33.835654]}>
        <circle r={10} fill="#9CEBAF" stroke="#6C5E99" /><text textAnchor="middle" dy={"0.3rem"} fill="#6C5E99" fontSize={"1rem"}>
            2</text></Marker></Link>

        <Marker coordinates={[16.189470, -26.000684]}>
        <circle r={10} fill="#9CEBAF" stroke="#6C5E99" /><text textAnchor="middle" dy={"0.3rem"} fill="#6C5E99" fontSize={"1rem"}>
            3</text></Marker>

        <Marker coordinates={[-68.537086, -39.811215]}>
        <circle r={10} fill="#9CEBAF" stroke="#6C5E99" /><text textAnchor="middle" dy={"0.3rem"} fill="#6C5E99" fontSize={"1rem"} onClick="">
            4</text></Marker>

        <Marker coordinates={[-65.599710, -3.543632]}>
            <circle r={10} fill="#9CEBAF" stroke="#6C5E99"> </circle><text textAnchor="middle" dy={"0.3rem"} fill="#6C5E99" fontSize={"1rem"}>
            5</text></Marker>
        
        <Marker coordinates={[-107.386353, 42.411751]}>
        <circle r={10} fill="#9CEBAF" stroke="#6C5E99" /><text textAnchor="middle" dy={"0.3rem"} fill="#6C5E99" fontSize={"1rem"}>
            6</text></Marker>
        
    </ComposableMap></div>

        
    
        </>
    )
}

export default CambioClimatico