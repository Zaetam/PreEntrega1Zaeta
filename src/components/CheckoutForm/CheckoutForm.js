import { useState } from "react"

const CheckoutForm =({onConfirm}) => {
    const [name, setName]=useState('')
    const [phone, setPhone]=useState('')
    const [email, setEmail]=useState('')

    const handleConfirm= (event) =>
        event.preventDefault()

        const userData={
            name,phone,email
        }

        onConfirm(userData)

    return(
        <div>
            <form onSubmit={handleConfirm}>
                <label>
                    Nombre
                    <input
                        className='Input'
                        type='text'
                        value={name}
                        onChange={({target})=> setName(target.value)}
                    />
                </label>

                <label>
                    Teléfono
                    <input
                        className='Input'
                        type='text'
                        value={phone}
                        onChange={({target})=> setPhone(target.value)}
                    />
                </label>

                <label>
                    E-mail
                
                    <input
                        className='Input'
                        type='email'
                        value={email}
                        onChange={({target})=> setEmail(target.value)}
                    />
                </label>

                <div>
                    <button type='submit'>Enviar Orden</button>
                </div>

            </form>
        </div>




    )
}

export default CheckoutForm