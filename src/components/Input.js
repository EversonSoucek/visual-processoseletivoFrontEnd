import React from 'react';
import { IMaskInput } from 'react-imask';
import Form from 'react-bootstrap/Form';

export default function Input({ children, tipo, nome, onChange, valor }) {
    const handleChange = (e) => {
        onChange(e);
    };

    let mask, inputType = "text";
    if (nome === "cpf") {
        mask = "000.000.000-00";
    } else if (nome === "numero") {
        mask = "(00) 00000-0000";
    } else {
        mask = null;
        inputType = tipo;
    }

    return (
        <div className="mb-3">
            <label htmlFor={nome} className="form-label">{children}</label>
            <Form.Control
                as={mask ? IMaskInput : 'input'}
                mask={mask}
                type={inputType}
                className="form-control"
                placeholder={`Digite seu ${children}`}
                name={nome}
                onChange={handleChange}
                value={valor}
                required={true}
            />
        </div>
    );
}
