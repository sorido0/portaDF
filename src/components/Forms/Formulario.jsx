
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import './formulario.scss';


export const Formulario = () => {

        const form = useRef();

        const { register , formState: { errors } } = useForm();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_fd47gpo', 'template_4k7prfw', form.current, '9ScVzPdc3ybSJb3PV')
            .then((result) => {
                console.log(result.text);
                if (result.text === "OK") {
                    mensajeExitoso();
                }
            }, (error) => {
                console.log(error.text);
            });
        };


        const mensajeExitoso = () => {
            toast.success('Mensaje enviado correctamente', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            document.getElementById("formulario").reset();
        };
  

    return (
        <div className="noseForm">

            <ToastContainer />
            <form
                ref={form}
                id="formulario"
                className="formulario"
                onSubmit={sendEmail}
            >

                <div className="form-group">
                    <input type="email" name="correo" id="correo" placeholder="Correo"
                        {...register("correo", {
                            required: "Correo requerido",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Correo invalido"
                            }
                        })}
                    />

                        {
                            errors.correo?.message && <p className="error">{errors.correo.message}</p>
                        }

                </div>

                <div className="form-group">
                    <input type="text" name="nombre" id="nombre" placeholder="Nombre" required="nombre"/>
                       
                </div>

                <div className="form-group">
                    <input type="text" name="numero" id="numero" placeholder="809-000-0000" required/>
                       
                </div>

                <div className="form-group">
                    <input type="text" name="asunto" id="asunto" placeholder="Asunto" required/>
                       
                </div>

                <div className="form-group todoElAncho">
                    <textarea className="textTarea" name="mensaje" id="mensaje" cols="30" rows="10" placeholder="Mensaje" required >
                      
                    </textarea>
                </div>


                <button type="submit" className="btn btn-primary" onSubmit={sendEmail}>Enviar</button>

            </form>
        </div>
    );
}