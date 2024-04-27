import React from 'react'

export default function Input({ children, tipo, nome, onChange }) {

    const handleChange = (e) => {
        onChange(e)
    }

    return (
        <div className="mb-3">
            <label htmlFor={nome} className="form-label">{children}</label>
            <input
                type={tipo}
                className="form-control"
                placeholder={`Digite seu ${children}`}
                name={nome}
                onChange={handleChange}
                required={true}
            />
        </div>
    )
}