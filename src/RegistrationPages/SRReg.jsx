import React, { useEffect, useState } from 'react';
import '../styles/Stockrush.css'

function ContactForm() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page on component load
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        age: '',
        email: '',
        contact: '',
        college: '',
        year: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const scriptURL = 'https://docs.google.com/forms/u/0/d/1UTKTzpeI64o6qsz4aLe2H6RjuzHeh2JFKrOQ4H4q7N8/formResponse';
        const form = new FormData();
        form.append('entry.2128191058', formData.name);
        form.append('entry.188663897', formData.age);
        form.append('entry.1692089057', formData.email);
        form.append('entry.336668551', formData.contact);
        form.append('entry.930871370', formData.college);
        form.append('entry.2005007222', formData.year);

        try {
            await fetch(scriptURL, { method: 'POST', mode: 'no-cors', body: form });
            alert('Thank you! Your form is submitted successfully.');
            setFormData({
                name: '',
                age: '',
                email: '',
                contact: '',
                college: '',
                year: '',
            });
        } catch (error) {
            console.error('Error!', error.message);
        }
    };

    return (
        <>
        <div className="sr-bg"></div>
        <div className='sr-body'>
            <div className="sr-container">
                <h2>StockRush Registration Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name" style={{paddingTop: "15px"}}>Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age:</label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            value={formData.age}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact">Contact Number:</label>
                        <input
                            type="tel"
                            id="contact"
                            name="contact"
                            value={formData.contact}
                            onChange={handleInputChange}
                            required
                            pattern="[0-9]{10}"
                            title="Please enter a 10-digit phone number"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="college">
                            College:
                        </label>
                        <input
                            type="text"
                            id="college"
                            name="college"
                            value={formData.college}
                            onChange={handleInputChange}
                            required
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="year">Year of Graduation:</label>
                        <input
                            type="tel"
                            id="year"
                            name="year"
                            value={formData.year}
                            onChange={handleInputChange}
                            required
                            pattern="[0-9]{4}"
                            title="Please enter a valid year"
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit">Submit</button>
                    </div>
                </form>
                <div className="info">
                    For any further details please contact the following organisers,
                </div>
                <div className="organisers">Dhruv Sharma - +91 78283 73852, dhruv.sharma@iitgn.ac.in</div>
                <div className="organisers">Kandarp Jani - +91 99099 78744, kandarp.jani@iitgn.ac.in</div>
            </div>
        </div>
        </>
    );
}

export default ContactForm;
