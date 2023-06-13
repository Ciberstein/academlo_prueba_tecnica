import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2';

export const SecondStep = ({ changeStep, setImg }) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const [selectedImage, setSelectedImage] = useState([null, null]);
    const [previewImage, setPreviewImage] = useState([null, null]);

    const submit = dataForm => {

        const isEmpty = Object.values(dataForm).some((value) => value === '');
        if (!isEmpty) {
            setImg(previewImage)
            Swal.fire({
                title: '¿Desea continuar?',
                text: "Sus datos serán enviados",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, enviar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                changeStep(true)

                }
            })
        }
    }

    const handleImg = (e, index) => {

        const file = e.target.files[0];

        if (file) {

            const reader = new FileReader();

            const newPreviewImage = [...previewImage]
            const newSelectedImage = [...selectedImage]

            reader.onload = () => {
                newSelectedImage[index] = file
                setSelectedImage(newSelectedImage);
                newPreviewImage[index] = reader.result
                setPreviewImage(newPreviewImage);
            };
        
            reader.readAsDataURL(file);


        } else {

            setSelectedImage([null, null]);
            setPreviewImage([null, null]);
        }
    }

    return (
        <form className='row' onSubmit={handleSubmit(submit)}>
            <div className='col-md-12'>
                <div className="app__file__container">
                    <label htmlFor="file1" className="form-label">
                        Sube una foto de frente de tu DNI
                        {errors.file1 && <span className="invalid-field">{` (${errors.file1.message})`}</span>}
                    </label>
                    <label htmlFor="file1" className={`app__file__label ${ errors.file1 ? 'invalid-field' : null }`} >
                        {
                            previewImage[0] ?
                                <img src={previewImage[0]} alt="Preview" className='app__prev__img'/>
                            :
                            <>
                                <i className="fa-solid fa-arrow-up-from-bracket"></i>
                                <span>Subir una foto del frente</span>                            
                            </>
                        }
                    </label> 
                    <input className="d-none" {...register('file1', { required: 'Este campo es requerido' })} type="file" id="file1" accept='image/*' onChange={ (e) => handleImg (e, 0)} />
                </div>
            </div>
            <div className='col-md-12'>
                <div className="app__file__container">
                    <label htmlFor="file2" className="form-label">
                        Ahora sube una foto del dorso de tu DNI
                        {errors.file2 && <span className="invalid-field">{` (${errors.file2.message})`}</span>}
                    </label>
                    <label htmlFor="file2" className={`app__file__label ${ errors.file1 ? 'invalid-field' : null }`}>
                        {
                            previewImage[1] ?
                                <img src={previewImage[1]} alt="Preview" className='app__prev__img'/>
                            :
                            <>
                                <i className="fa-solid fa-arrow-up-from-bracket"></i>
                                <span>Subir una foto del dorso</span>                       
                            </>
                        }
                    </label>
                    <input className="d-none" {...register('file2', { required: 'Este campo es requerido' })} type="file" id="file2" accept='image/*' onChange={ (e) => handleImg (e, 1) } />
                </div>
            </div>
            <div className='col-md-12'>
                <div className="form-check app__form__check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        I want to protect my data by signing and NDA
                    </label>
                </div>
            </div>
            <div className='app__step__buttons'>
                <button className='btn btn-lg btn-outline-primary' onClick={() => changeStep(false)}>Atrás</button>
                <button className='btn btn-lg btn-primary'>Guardar</button>
            </div>
        </form>
    )
}
