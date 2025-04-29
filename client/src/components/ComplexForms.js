import React, { useState } from 'react';

const ComplexForms = () => {
    const [name, setName] = useState({
        firstName: "",
        lastName: "",
        email: ""
    });

    const handleForm = (e) => {
        const { name: fieldName, value } = e.target;
       if(name===firstName){
        return{
                firstName: value,
                lastName: name.lastName,
                email: name.email
        }
       }
    };

    return (
        <div className='complex-forms-container'>
            <h3>Complex Forms {name.firstName} {name.lastName}</h3>
            <form className='forms-container'>
                <input
                    type="text"
                    name="firstName"
                    value={name.firstName}
                    onChange={handleForm}
                    placeholder="First Name"
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    value={name.lastName}
                    onChange={handleForm}
                    placeholder="Last Name"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={name.email}
                    onChange={handleForm}
                    placeholder="Email"
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ComplexForms;
