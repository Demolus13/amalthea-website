import React, { useState } from 'react';
import '../styles/Brainwiz.css'

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '', // Name
        email: '', // Email
        contact: '', // Contact
        class: 'Class 9th', // Class
        stream: 'PCM', // Stream
        school: '', // School
        address: '', // Address
        city: '', // City
        state: '', // State
        guardianName: '', // Guardian Name
        guardianContact: '', // Guardian Contact
        googleDriveLink1: '', // Google Drive Link 1
        googleDriveLink2: '', // Google Drive Link 2
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
        const scriptURL =
            'https://docs.google.com/forms/u/0/d/1sVVvsl6RHEpFmnkucCIfhuwreoRy--kPTr-u2azqmQA/formResponse';
        const form = new FormData();
        form.append('entry.756603207', formData.name); // Name
        form.append('entry.2010326846', formData.email); // Email
        form.append('entry.2070518104', formData.contact); // Contact
        form.append('entry.1796367140', formData.class); // Class
        form.append('entry.1820839827', formData.stream); // Stream
        form.append('entry.421132129', formData.school); // School
        form.append('entry.1800670499', formData.address); // Address
        form.append('entry.993662820', formData.city); // City
        form.append('entry.147516377', formData.state); // State
        form.append('entry.151031277', formData.guardianName); // Guardian Name
        form.append('entry.656237450', formData.guardianContact); // Guardian Contact
        form.append('entry.627039335', formData.googleDriveLink1); // Google Drive Link 1
        form.append('entry.1143467285', formData.googleDriveLink2); // Google Drive Link 2

        try {
            await fetch(scriptURL, { method: 'POST', mode: 'no-cors', body: form });
            alert('Thank you! Your form is submitted successfully.');
            // Reset the form after successful submission
            setFormData({
                name: '', // Name
                email: '', // Email
                contact: '', // Contact
                class: '', // Class
                stream: '', // Stream
                school: '', // School
                address: '', // Address
                city: '', // City
                state: '', // State
                guardianName: '', // Guardian Name
                guardianContact: '', // Guardian Contact
                googleDriveLink1: '', // Google Drive Link 1
                googleDriveLink2: '', // Google Drive Link 2
            });
        } catch (error) {
            console.error('Error!', error.message);
        }
    };

    return (
        <div className='bw-body'>
            <div className="bw-container">
                <h2>BrainWiz Registration Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
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
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="class">Class:</label>
                        <select
                            id="class"
                            name="class"
                            value={formData.class}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="Class 9th">Class 9th</option>
                            <option value="Class 10th">Class 10th</option>
                            <option value="Class 11th">Class 11th</option>
                            <option value="Class 12th">Class 12th</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="stream">Stream: Only for 11th and 12th Students</label>
                        <select
                            id="stream"
                            name="stream"
                            value={formData.stream}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="PCM">PCM</option>
                            <option value="PCB">PCB</option>
                            <option value="PCMB">PCMB</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label style={{ paddingTop: '15px' }} htmlFor="school">
                            School:
                        </label>
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
                        <label htmlFor="address">Address:</label>
                        <textarea
                            id="address"
                            name="address"
                            rows="4"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City:</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State:</label>
                        <input
                            type="text"
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="guardianName">Guardian Name:</label>
                        <input
                            type="text"
                            id="guardianName"
                            name="guardianName"
                            value={formData.guardianName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="guardianContact">Guardian Contact Number:</label>
                        <input
                            type="tel"
                            id="guardianContact"
                            name="guardianContact"
                            value={formData.guardianContact}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="googleDriveLink">
                            Google Drive Link for School ID Card/Aadhar Card:
                        </label>
                        <input
                            type="text"
                            id="googleDriveLink1"
                            name="googleDriveLink1"
                            value={formData.googleDriveLink1}
                            onChange={handleInputChange}
                            placeholder="Paste your Google Drive link here"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="googleDriveLink">
                            Google Drive Link for Recent Photographs &#40;Passport Size&#41;:
                        </label>
                        <input
                            type="text"
                            id="googleDriveLink2"
                            name="googleDriveLink2"
                            value={formData.googleDriveLink2}
                            onChange={handleInputChange}
                            placeholder="Paste your Google Drive link here"
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit">Submit</button>
                    </div>
                </form>
                <div className="info">
                    For any further details please contact the following organisers,
                </div>
                <div className="organisers">Dewansh Singh Chandel - +91 80859 07445</div>
                <div className="organisers">Lavanya - +91 870-8493621</div>
                <div className="organisers">Farhan Obaid- +91 76673 36359</div>
            </div>
        </div>
    );
}

export default ContactForm;
