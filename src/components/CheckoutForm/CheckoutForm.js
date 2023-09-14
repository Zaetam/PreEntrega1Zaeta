import { useState } from "react"
import './CheckoutForm.css';


const CheckoutForm =({onConfirm}) => {
    const [name, setName]=useState('')
    const [phone, setPhone]=useState('')
    const [email, setEmail]=useState('')

    const handleConfirm= (event) =>{
        event.preventDefault()

        if (!name || !phone || !email) {
                        alert("Por favor, completa todos los campos.");
                        return; // Detiene el proceso si falta algún dato
        }

        const userData={
            name,phone,email
        }

        onConfirm(userData)
    }

    return(
        <div className="flex-formulario">
  <form onSubmit={handleConfirm}>
    <fieldset className="fieldset shadow-lg p-3 mb-5 bg-body-tertiary rounded">
      <div className="form-group">
        <label htmlFor="name">Nombre</label>
        <input
          className='Input'
          type='text'
          id="name"
          value={name}
          onChange={({target})=> setName(target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Teléfono</label>
        <input
          className='Input'
          type='text'
          id="phone"
          value={phone}
          onChange={({target})=> setPhone(target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">E-mail</label>
        <input
          className='Input'
          type='email'
          id="email"
          value={email}
          onChange={({target})=> setEmail(target.value)}
        />
      </div>

      <div>
        <button type='submit' className="btn btn-primary">Enviar Orden</button>
      </div>
    </fieldset>
  </form>
</div>




    )
}


export default CheckoutForm