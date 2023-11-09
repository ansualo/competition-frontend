import { useState } from 'react'
import './Form.css'
import { registerParticipant } from '../../apiCalls';

export const Form = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [errorEmail, setErrorEmail] = useState('')
    const [confirmation, setConfirmation] = useState('')

    const handleSubmit = () => {

        const participant = {
            name: name,
            email: email,
            date_of_birth: dateOfBirth,
        }

        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            setErrorEmail("Incorrect email");
        } else {
            registerParticipant(participant)
                .then(res => {
                    console.log(res.data.message)
                    setConfirmation("Thank you for entering our competition! The lucky winner will be drawn at random after the competition closes. Good luck!")
                })
                .catch(error => console.log(error))
        }
    }

    return (
        <>
            {confirmation !== ""

                ? (<div className="confirmation">{confirmation}</div>)
                : (
                    <form className="formDesign">
                        <label>Name:</label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <label>Email:</label>
                        <input
                            type="email"
                            placeholder="example@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <div className="error">{errorEmail}</div>

                        <label>Date of birth:</label>
                        <input
                            type="date"
                            value={dateOfBirth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                        />

                        <button type="button" className="submitButton" onClick={handleSubmit}>
                            Submit
                        </button>
                    </form>
                )
            }
        </>
    )
}