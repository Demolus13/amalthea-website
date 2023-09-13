import React, { useEffect, useState } from 'react';
import '../styles/Robowars.css'

function ContactForm() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page on component load
    }, []);

    const [formData, setFormData] = useState({
        teamname: '',
        name1: '',
        contact1: '',
        email1: '',
        name2: '',
        contact2: '',
        email2: '',
        name3: '',
        contact3: '',
        email3: '',
        name4: '',
        contact4: '',
        email4: '',
        name5: '',
        contact5: '',
        email5: '',
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

        const scriptURL = 'https://docs.google.com/forms/u/0/d/1EdPQXwaXiw_zz7cClSLNunKJlSx2Ahci0RwFe398JC8/formResponse';
        const form = new FormData();
        form.append('entry.885410789', formData.teamname);
        form.append('entry.1596401966', formData.name1);
        form.append('entry.1248385505', formData.contact1);
        form.append('entry.1796106927', formData.email1);
        form.append('entry.448792404', formData.name2);
        form.append('entry.431975505', formData.contact2);
        form.append('entry.889230415', formData.email2);
        form.append('entry.1313114890', formData.name3);
        form.append('entry.328984450', formData.contact3);
        form.append('entry.1999670641', formData.email3);
        form.append('entry.1521351325', formData.name4);
        form.append('entry.1173621349', formData.contact4);
        form.append('entry.1835794694', formData.email4);
        form.append('entry.291839970', formData.name5);
        form.append('entry.542093335', formData.contact5);
        form.append('entry.454925531', formData.email5);

        try {
            await fetch(scriptURL, { method: 'POST', mode: 'no-cors', body: form });
            alert('Thank you! Your form is submitted successfully.');
            setFormData({
                teamname: '',
                name1: '',
                contact1: '',
                email1: '',
                name2: '',
                contact2: '',
                email2: '',
                name3: '',
                contact3: '',
                email3: '',
                name4: '',
                contact4: '',
                email4: '',
                name5: '',
                contact5: '',
                email5: '',
            });
        } catch (error) {
            console.error('Error!', error.message);
        }
    };

    return (
        <>
        <div className="rw-bg"></div>
        <div className='rw-body'>
            <div className="rw-container">
                <h2>RoboWars Registration Form</h2>
                <div className="info" style={{paddingTop: "15px"}}>
                Register your team for Robowars @AMALTHEA here!!! <br /> Number of members allowed in a team are  3-5.
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group" style={{paddingTop: "15px"}}>
                        <label htmlFor="teamname">Team Name:</label>
                        <input
                            type="text"
                            id="teamname"
                            name="teamname"
                            value={formData.teamname}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <p>Member 1 &#40;Captain&#41;:</p>
                    <div className="form-group">
                        <label htmlFor="name1">Name:</label>
                        <input
                            type="text"
                            id="name1"
                            name="name1"
                            value={formData.name1}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact1">Contact Number:</label>
                        <input
                            type="tel"
                            id="contact1"
                            name="contact1"
                            value={formData.contact1}
                            onChange={handleInputChange}
                            required
                            pattern="[0-9]{10}"
                            title="Please enter a 10-digit phone number"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email1">Email:</label>
                        <input
                            type="email"
                            id="email1"
                            name="email1"
                            value={formData.email1}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <p>Member 2:</p>
                    <div className="form-group">
                        <label htmlFor="name2">Name:</label>
                        <input
                            type="text"
                            id="name2"
                            name="name2"
                            value={formData.name2}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact2">Contact Number:</label>
                        <input
                            type="tel"
                            id="contact2"
                            name="contact2"
                            value={formData.contact2}
                            onChange={handleInputChange}
                            required
                            pattern="[0-9]{10}"
                            title="Please enter a 10-digit phone number"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email2">Email:</label>
                        <input
                            type="email"
                            id="email2"
                            name="email2"
                            value={formData.email2}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <p>Member 3:</p>
                    <div className="form-group">
                        <label htmlFor="name3">Name:</label>
                        <input
                            type="text"
                            id="name3"
                            name="name3"
                            value={formData.name3}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact3">Contact Number:</label>
                        <input
                            type="tel"
                            id="contact3"
                            name="contact3"
                            value={formData.contact3}
                            onChange={handleInputChange}
                            required
                            pattern="[0-9]{10}"
                            title="Please enter a 10-digit phone number"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email3">Email:</label>
                        <input
                            type="email"
                            id="email3"
                            name="email3"
                            value={formData.email3}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <p>Member 4:</p>
                    <div className="form-group">
                        <label htmlFor="name4">Name:</label>
                        <input
                            type="text"
                            id="name4"
                            name="name4"
                            value={formData.name4}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact4">Contact Number:</label>
                        <input
                            type="tel"
                            id="contact4"
                            name="contact4"
                            value={formData.contact4}
                            onChange={handleInputChange}
                            pattern="[0-9]{10}"
                            title="Please enter a 10-digit phone number"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email4">Email:</label>
                        <input
                            type="email"
                            id="email4"
                            name="email4"
                            value={formData.email4}
                            onChange={handleInputChange}
                        />
                    </div>
                    <p>Member 5:</p>
                    <div className="form-group">
                        <label htmlFor="name5">Name:</label>
                        <input
                            type="text"
                            id="name5"
                            name="name5"
                            value={formData.name5}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact5">Contact Number:</label>
                        <input
                            type="tel"
                            id="contact5"
                            name="contact5"
                            value={formData.contact5}
                            onChange={handleInputChange}
                            pattern="[0-9]{10}"
                            title="Please enter a 10-digit phone number"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email5">Email:</label>
                        <input
                            type="email"
                            id="email5"
                            name="email5"
                            value={formData.email5}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit">Submit</button>
                    </div>
                </form>
                <div className="info">
                    For any further details please contact/mail the following organisers,
                </div>
                <div className="organisers">Aditya Mehta - +91 94294 28442, mehta.aditya@iitgn.ac.in</div>
                <div className="organisers">Hitesh Kumar - +91 95699 70238, hitesh.kumar@iitgn.ac.in</div>
            </div>
        </div>
        </>
    );
}

export default ContactForm;
