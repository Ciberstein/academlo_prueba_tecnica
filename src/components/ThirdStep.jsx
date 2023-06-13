import React from 'react'

export const ThirdStep = ({ img, data }) => {

    const info = {
        "Nombre": `${data.inputFirstnName} ${data.inputLastName}`,
        "Email" : data.inputEmail,
        "Nacimiento" : data.inputBirthday,
        "Telefono" : data.inputTelephone,
        "Linkedin" : data.inputLinkedin
    }

    console.log(info)

    return (
        <div className='app__third__step_container'>
            <div className='app__img__finish__container'>
                <img className='app__img__finish' src={img[0]} alt="preview" />
            </div>
            <h5 className='app__final__msg'>¡Tu formulario ha sido subido con éxito!</h5>
        </div>
    )
}
