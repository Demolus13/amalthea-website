import React, { useState } from 'react';
import './Brainwiz.css'

function RegistrationForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        class: 'Class 9th',
        stream: 'PCM',
        school: '',
        address: '',
        city: '',
        state: '',
        guardianName: '',
        guardianContact: '',
        googleDriveLink: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const scriptURL = "https://script.google.com/macros/s/AKfycbwDWQeHlG63fMfnQtPof6iz1D3yROUgVm3Xj0bpHSr-cKnInDmuyS3lf6F15n8MDrUp-g/exec";


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(scriptURL,
                {
                    method: 'POST',
                    mode: 'no-cors',
                    body: JSON.stringify(formData),
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                }
            );
            console.log(response);
            if (response.ok) {
                alert('Thank you! Your form is submitted successfully.');
                window.location.reload();
            } else {
                throw new Error('Failed to submit the form.');
            }
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
                            <option value="Science">PCM</option>
                            <option value="Commerce">PCB</option>
                            <option value="Arts">PCMB</option>
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
                            id="googleDriveLink"
                            name="googleDriveLink"
                            value={formData.googleDriveLink}
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

export default RegistrationForm;
