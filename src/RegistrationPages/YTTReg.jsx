import React, { useEffect, useState } from 'react';
import '../styles/YTT.css'

function ContactForm() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page on component load
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        class: '',
        school: '',
        principal: '',
        contact: '',
        address: '',
        googleDriveLink: '',
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

        const driveLinkPattern = /^https:\/\/drive\.google\.com\/.*$/;

        if (!driveLinkPattern.test(formData.googleDriveLink)) {
            alert('Please enter valid Google Drive link');
            return;
        }

        const scriptURL = 'https://docs.google.com/forms/u/0/d/1sEVU1XrnhAXxr6g0Wimq7eD3zw4XIPzmlz-Bkr17Fho/formResponse';
        const form = new FormData();
        form.append('entry.111559602', formData.name);
        form.append('entry.116842325', formData.class);
        form.append('entry.60307568', formData.school);
        form.append('entry.1457998634', formData.principal);
        form.append('entry.1214496840', formData.contact);
        form.append('entry.1464946204', formData.address);
        form.append('entry.115801175', formData.googleDriveLink);

        try {
            await fetch(scriptURL, { method: 'POST', mode: 'no-cors', body: form });
            alert('Thank you! Your form is submitted successfully.');
            setFormData({
                name: '',
                class: '',
                school: '',
                principal: '',
                contact: '',
                address: '',
                googleDriveLink: '',
            });
        } catch (error) {
            console.error('Error!', error.message);
        }
    };

    return (
        <>
        <div className="ytt-bg"></div>
        <div className='ytt-body'>
            <div className="ytt-container">
                <h2>Youth Tech-Tic Registration Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group" style={{paddingTop: "15px"}}>
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
                        <label htmlFor="name">Class and Roll Number:</label>
                        <input
                            type="text"
                            id="class"
                            name="class"
                            value={formData.class}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">School Name:</label>
                        <input
                            type="text"
                            id="school"
                            name="school"
                            value={formData.school}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Principal Name:</label>
                        <input
                            type="text"
                            id="principal"
                            name="principal"
                            value={formData.principal}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact">School Contact details:</label>
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
                        <label htmlFor="address">School Address:</label>
                        <textarea
                            id="address"
                            name="address"
                            rows="4"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                        ></textarea>
                    </div>
                    <div className="info" style={{paddingBottom: "15px"}}>
                        Please give access to this Google Drive Link
                    </div>
                    <div className="form-group">
                        <label htmlFor="googleDriveLink">
                            Google Drive Link for School ID Card/other Identity Card:
                        </label>
                        <input
                            type="url"
                            id="googleDriveLink"
                            name="googleDriveLink"
                            value={formData.googleDriveLink}
                            onChange={handleInputChange}
                            placeholder="Paste your Google Drive link here"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit">Submit</button>
                    </div>
                </form>
                <div className="info">
                    For any further details please contact the following organisers,
                </div>
                <div className="organisers">Harshit Kumar - +91 92790 39288, harshit.harshit@iitgn.ac.in</div>
                <div className="organisers">Suteekshna Mishra - +91 90444 12185, suteekshna.mishra@iitgn.ac.in</div>
            </div>
        </div>
        </>
    );
}

export default ContactForm;
