import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

export const FirstStep = ({ changeStep, data, setData }) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const submit = dataForm => {

        const isEmpty = Object.values(dataForm).some((value) => value === '');
        if (!isEmpty) {
            changeStep(true)
            setData(dataForm)
        }
    }

    useEffect(() => {
        if(data) {
            reset(data)
        }
    }, [])
    

    return (
        <form className='row' onSubmit={handleSubmit(submit)}>
            <div className='col-md-12'>
                <div className="mb-3">
                    <label htmlFor="inputFirstnName" className="form-label">Nombre del cliente</label>
                    <input {...register('inputFirstnName', { required: 'Este campo es requerido' })} className={`form-control form-control-lg ${ errors.inputFirstnName ? 'invalid-field' : null }`} type="text" id="inputFirstnName" placeholder="Escribe aqui" />
                    {errors.inputFirstnName && <span className="invalid-field">{errors.inputFirstnName.message}</span>}
                </div>
            </div>
            <div className='col-md-12'>
                <div className="mb-3">
                    <label htmlFor="inputLastName" className="form-label">Apellido del cliente</label>
                    <input {...register('inputLastName', { required: 'Este campo es requerido' })} className={`form-control form-control-lg ${ errors.inputLastName ? 'invalid-field' : null }`} type="text" id="inputLastName" placeholder="Escribe aqui" />
                    {errors.inputLastName && <span className="invalid-field">{errors.inputLastName.message}</span>}

                </div>
            </div>
            <div className='col-md-12'>
                <div className="mb-3">
                    <label htmlFor="inputLinkedin" className="form-label">URL del Lnkedin</label>
                    <input {...register('inputLinkedin', { required: 'Este campo es requerido' })} className={`form-control form-control-lg ${ errors.inputLinkedin ? 'invalid-field' : null }`} type="url" id="inputLinkedin" placeholder="Escribe aqui" />
                    {errors.inputLinkedin && <span className="invalid-field">{errors.inputLinkedin.message}</span>}

                </div>
            </div>
            <div className='col-md-12'>
                <div className="mb-3">
                    <label htmlFor="inputEmail" className="form-label">Email</label>
                    <input {...register('inputEmail', { required: true, pattern: /^\S+@\S+$/i })} className={`form-control form-control-lg ${ errors.inputEmail ? 'invalid-field' : null }`} type="email" id="inputEmail" placeholder="Escribe aqui" />
                    {errors.inputEmail && errors.inputEmail.type === 'required' && (
                        <span className="invalid-field">Este campo es requerido</span>
                    )}
                    {errors.inputEmail && errors.inputEmail.type === 'pattern' && (
                        <span className="invalid-field">Ingresa un correo electrónico válido</span>
                    )}
                </div>
            </div>
            <div className='col-md-6'>
                <div className="mb-3">
                    <label htmlFor="inputTelephone" className="form-label">Telefono</label>
                    <input {...register('inputTelephone', { required: 'Este campo es requerido' })} className={`form-control form-control-lg ${ errors.inputTelephone ? 'invalid-field' : null }`} type="tel" id="inputTelephone" placeholder="Escribe aqui" />
                    {errors.inputTelephone && <span className="invalid-field">{errors.inputTelephone.message}</span>}
                </div>
            </div>
            <div className='col-md-6'>
                <div className="mb-3">
                    <label htmlFor="inputBirthday" className="form-label">Fecha de nacimiento</label>
                    <input {...register('inputBirthday', { required: true })} className={`form-control form-control-lg ${ errors.inputBirthday ? 'invalid-field' : null }`} type="date" id="inputBirthday" placeholder="Escribe aqui" />
                    {errors.inputBirthday && <span className="invalid-field">{errors.inputBirthday.message}</span>}
                </div>
            </div>
            <div className='app__step__buttons'>
                <button className='btn btn-lg btn-primary'>Siguiente</button>
            </div>
        </form>
    )
}
