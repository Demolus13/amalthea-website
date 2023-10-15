import React, { useEffect, useState } from 'react';
import '../styles/IN.css'

function ContactForm() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page on component load
    }, []);

    const [formData, setFormData] = useState({
        name1: '',
        email1: '',
        contact1: '',
        organization: '',
        name2: '',
        email2: '',
        contact2: '',
        name3: '',
        email3: '',
        contact3: '',
        name4: '',
        email4: '',
        contact4: '',
        name5: '',
        email5: '',
        contact5: '',
        description: '',
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

        const scriptURL = 'https://docs.google.com/forms/u/0/d/1lNq0bGqHDkwj4cMStHuMs2oXKoSxOM-XkGmzkqsIenU/formResponse';
        const form = new FormData();
        form.append('entry.1086044381', formData.name1);
        form.append('entry.1187797945', formData.email1);
        form.append('entry.1083705191', formData.contact1);
        form.append('entry.1833928681', formData.organization);
        form.append('entry.122831519', formData.name2);
        form.append('entry.213562821', formData.email2);
        form.append('entry.866172778', formData.contact2);
        form.append('entry.1411075472', formData.name3);
        form.append('entry.767297511', formData.email3);
        form.append('entry.2029694120', formData.contact3);
        form.append('entry.1595449752', formData.name4);
        form.append('entry.1042296270', formData.email4);
        form.append('entry.1780324112', formData.contact4);
        form.append('entry.1416793288', formData.name5);
        form.append('entry.1003462715', formData.email5);
        form.append('entry.302657878', formData.contact5);
        form.append('entry.19268369', formData.description);
        form.append('entry.90771635', formData.googleDriveLink);

        try {
            await fetch(scriptURL, { method: 'POST', mode: 'no-cors', body: form });
            alert('Thank you! Your form is submitted successfully.');
            setFormData({
                name1: '',
                email1: '',
                contact1: '',
                organization: '',
                name2: '',
                email2: '',
                contact2: '',
                name3: '',
                email3: '',
                contact3: '',
                name4: '',
                email4: '',
                contact4: '',
                name5: '',
                email5: '',
                contact5: '',
                description: '',
                googleDriveLink: '',
            });
        } catch (error) {
            console.error('Error!', error.message);
        }
    };

    return (
        <>
            <div className="in-bg"></div>
            <div className='in-body'>
                <div className="in-container">
                    <h2>Innovation Nexus Registration</h2>
                    <div className="info" style={{ paddingTop: "15px" }}>
                        Welcome to Innovation Nexus,  a prestigious event within Amalthea. This form is your gateway to participating in an intellectually stimulating competition that allows you to tackle real-world problems, showcase your innovation, and connect with like-minded individuals from diverse backgrounds. <br /> <br /> <strong>Disclaimer:</strong><br />By registering for participation form in Innovation nexus, you acknowledge that you have read, understood, and agree to abide by the event's rules, guidelines, and code of conduct, as outlined in the provided rulebook.<br /> <br /> <strong>Final Submission:</strong><br />Ensure that all the information you provide is accurate and complete before submitting this form. Incomplete or inaccurate information may lead to disqualification or communication issues.
                    </div>
                    <form onSubmit={handleSubmit}>
                        <p style={{ paddingTop: "15px" }}>Member 1 (Team Leader):</p>
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
                            <label htmlFor="organization">Institution/Organization:</label>
                            <input
                                type="text"
                                id="organization"
                                name="organization"
                                value={formData.organization}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <p>Member 2:</p>
                        <div className="form-group">
                            <label htmlFor="name2">Full Name:</label>
                            <input
                                type="text"
                                id="name2"
                                name="name2"
                                value={formData.name2}
                                onChange={handleInputChange}
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
                                pattern="[0-9]{10}"
                                title="Please enter a 10-digit phone number"
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
                                pattern="[0-9]{10}"
                                title="Please enter a 10-digit phone number"
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
                            <label htmlFor="email4">Email:</label>
                            <input
                                type="email"
                                id="email4"
                                name="email4"
                                value={formData.email4}
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
                            <label htmlFor="description">A description of your problem statement and idea:</label>
                            <input
                                type="text"
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="info" style={{ paddingBottom: "15px" }}>
                            Please give access to this Google Drive Link
                        </div>
                        <div className="form-group">
                            <label htmlFor="googleDriveLink">
                                Video presentation of your idea (not more than 2 minutes)<br />Google Drive Link of the video:
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
                        For any further details please contact/mail the following organiser,
                    </div>
                    <div className="organisers">Kandarp Jani - +91 99099 78744, kandarp.jani@iitgn.ac.in</div>
                </div>
            </div>
        </>
    );
}

export default ContactForm;
