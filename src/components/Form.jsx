import { useState } from "react";
import useClimate from "../hooks/useClimate"

const Form = () => {

    const [alert, setAlert] = useState("");

    const { search, searchData, getClimate } = useClimate();

    const { city, country = "" } = search;

    const handleSubmit = e => {
        setAlert('');
        e.preventDefault();

        if (Object.values(search).includes("")) {
            setAlert('Todos los campos son obligatorios');
            return;
        }

        getClimate(search);
    }

    return (
        <div className="container">
            {alert && <p>{alert}</p>}
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="city">Ciudad</label>
                    <input type="text" name="city" id="city" onChange={searchData} value={city} />
                </div>
                <div className="field">
                    <label htmlFor="country">País</label>
                    <select name="country" id="country" onChange={searchData} value={country}>
                        <option value="">-- Seleccione --</option>
                        <option value="CL">Chile</option>
                        <option value="MX">Mexico</option>
                        <option value="BH">Baréin</option>
                        <option value="SA">Arabia Saudita</option>
                        <option value="AU">Australia</option>
                        <option value="AZ">Azerbaijan</option>
                        <option value="US">Estados Unidos</option>
                        <option value="IT">Italia</option>
                        <option value="MC">Monáco</option>
                        <option value="ES">España</option>
                        <option value="CA">Canadá</option>
                        <option value="AT">Austria</option>
                        <option value="BG">Reino Unido</option>
                        <option value="HU">Hungría</option>
                        <option value="BE">Bélgica</option>
                        <option value="NL">Países Bajos</option>
                        <option value="SG">Singapur</option>
                        <option value="JP">Japón</option>
                        <option value="QA">Qatar</option>
                        <option value="BR">Brasil</option>
                        <option value="AE">Emiratos Árabes Unidos</option>
                    </select>
                </div>

                <input type="submit" value="Consultar Clima" />
            </form>
        </div>
    )
}

export default Form