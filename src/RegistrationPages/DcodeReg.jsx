import React, { useEffect, useState } from 'react';
import '../styles/Dcode.css'

function ContactForm() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page on component load
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        date: '',
        email: '',
        contact: '',
        institute: '',
        codechef: '',
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

        const scriptURL = 'https://docs.google.com/forms/u/0/d/1WzAaWVD3Z3TNaP2iTaTEtEgJ92pn9z5FqJS_hVNQ80Y/formResponse';
        const form = new FormData();
        form.append('entry.477942464', formData.name);
        form.append('entry.2100802713', formData.date);
        form.append('entry.490651366', formData.email);
        form.append('entry.461942798', formData.contact);
        form.append('entry.348034365', formData.institute);
        form.append('entry.1365474181', formData.codechef);

        try {
            await fetch(scriptURL, { method: 'POST', mode: 'no-cors', body: form });
            alert('Thank you! Your form is submitted successfully.');
            setFormData({
                name: '',
                date: '',
                email: '',
                contact: '',
                institute: '',
                codechef: '',
            });
        } catch (error) {
            console.error('Error!', error.message);
        }
    };

    return (
        <>
            <div className="dcode-bg"></div>
            <div className='dcode-body'>
                <div className="dcode-container">
                    <h2>D'Code Registration Form</h2>
                    <div className="info" style={{ paddingTop: "15px" }}>
                        IIT Gandhinagar proudly presents "D'Code", an exhilarating online competitive coding competition set to take place during Amalthea '23. This event promises to captivate coding enthusiasts across India with its stimulating problems and enticing prizes.
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group" style={{ paddingTop: "15px" }}>
                            <label htmlFor="name">Your Name:</label>
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
                            <label htmlFor="date">Date of Birth:</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={formData.date}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Your Email:</label>
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
                            <label htmlFor="contact">Contact details:</label>
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
                            <label htmlFor="institute">Name of any institution/organization you're affiliated to (write NA for none):</label>
                            <input
                                type="text"
                                id="institute"
                                name="institute"
                                value={formData.institute}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="codechef">Your CodeChef Username:</label>
                            <input
                                type="text"
                                id="codechef"
                                name="codechef"
                                value={formData.codechef}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                    <div className="info">
                        For any further details please mail the following organiser,
                    </div>
                    <div className="organisers">Mrigankashekhar Shandilya - mrigankashekhar.shandilya@iitgn.ac.in</div>
                </div>
            </div>
        </>
    );
}

export default ContactForm;
