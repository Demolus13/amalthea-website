import React, { useEffect, useState } from 'react';
import '../styles/DRA.css'

function ContactForm() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page on component load
    }, []);

    const [formData, setFormData] = useState({
        teamname: '',
        name: '',
        contact: '',
        email: '',
        aadhar: '',
        googleDriveLink: '',
        read: '',
        yes: '',
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
        if (!(formData.read === 'Read')) {
            alert('Please go through the RuleBook beside Register button');
            return;
        }
        if (!(formData.yes === 'Yes')) {
            alert("Type 'Yes' in order to agree");
            return;
        }

        const scriptURL = 'https://docs.google.com/forms/u/0/d/1KceJWTLK-dVhBZ_PFOWwtGbWp-Wkfk1ejWvl63uIuN8/formResponse';
        const form = new FormData();
        form.append('entry.1259816121', formData.name);
        form.append('entry.1723072036', formData.contact);
        form.append('entry.2048512827', formData.email);
        form.append('entry.2132717047', formData.teamname);
        form.append('entry.1754055822', formData.aadhar);
        form.append('entry.99355105', formData.googleDriveLink);
        form.append('entry.1407759009', formData.read);
        form.append('entry.774401373', formData.yes);

        try {
            await fetch(scriptURL, { method: 'POST', mode: 'no-cors', body: form });
            alert('Thank you! Your form is submitted successfully.');
            setFormData({
                teamname: '',
                name: '',
                contact: '',
                email: '',
                aadhar: '',
                googleDriveLink: '',
                read: '',
                yes: '',
            });
        } catch (error) {
            console.error('Error!', error.message);
        }
    };

    return (
        <>
            <div className="dra-bg"></div>
            <div className='dra-body'>
                <div className="dra-container">
                    <div className="logo-container">
                        <div id="GOG"></div>
                        <div id="Gujsail"></div>
                        <div id="IITGN"></div>
                    </div>
                    <h2>Drone Racing Amalthea Registration</h2>
                    <div className="info" style={{ paddingTop: "15px" }}>
                        Registration form for DRA'23. <br /> <br /> Amalthea presents DRA in its newest edition this year. This year's DRA comes with a twist. A 2 Day format with 2nd day extravaganza on the banks of Sabarmati(Sabarmati River Front). <br /> <br /> Total prize pool for the event is 2 Lakhs. <br /> <br /> Event will be a 2-day format: <br /> ‣Day 1(9 AM to 4 PM) will be on IIT Gandhinagar Campus and only racers who qualify for Day-2 will be invited for Day-2. <br /> ‣Day 2(12 PM to 9 PM) will be at  Sabarmati River Front with semi-finals and finals through Atal Bridge.
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group" style={{ paddingTop: "15px" }}>
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
                        <p>Player:</p>
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
                        <div className="info" style={{ paddingBottom: "15px" }}>
                            We will not share your data with anyone. This is only for verification purposes.
                        </div>
                        <div className="form-group">
                            <label htmlFor="aadhar">Id proof (Aadhar Number):</label>
                            <input
                                type="tel"
                                id="aadhar"
                                name="aadhar"
                                value={formData.aadhar}
                                onChange={handleInputChange}
                                pattern="^\d{4}(\s\d{4})*$"
                                title="Please enter a 12-digit aadhar number"
                                placeholder='xxxx xxxx xxxx'
                                required
                            />
                        </div>
                        <div className="info" style={{ paddingBottom: "15px" }}>
                            Please give access to this Google Drive Link
                        </div>
                        <div className="form-group">
                            <label htmlFor="googleDriveLink">
                                Google Drive Link for Aadhar Card scanned copy (Both sides):
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
                            <label htmlFor="read">I have read the RuleBook and drone specifications and agree to adhere to it:</label>
                            <input
                                type="text"
                                id="read"
                                name="read"
                                value={formData.read}
                                onChange={handleInputChange}
                                required
                                placeholder="Type 'Read' to agree"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="yes">I agree all decisions made by Amalthea team will be final:</label>
                            <input
                                type="text"
                                id="yes"
                                name="yes"
                                value={formData.yes}
                                onChange={handleInputChange}
                                required
                                placeholder="Type 'Yes' to agree"
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                    <div className="info">
                        For any further details please contact/mail the following organisers,
                    </div>
                    <div className="organisers">Arvind Singh (Gujsail) - +91 84601 83787, Mgr-mktg-gujsail@Gujarat.gov.in</div>
                    <div className="organisers">Jinil Patel - +91 83206 14132, jinilkumar.patel@iitgn.ac.in</div>
                    <div className="organisers">Shubham Agrawal - +91 72785 03333, shubham.agrawal@iitgn.ac.in</div>
                    <div className="organisers">Suteekshna Mishra - +91 90444 12185, suteekshna.mishra@iitgn.ac.in</div>
                    <div className="organisers">Harshit Kumar - +91 92790 39288, harshit.harshit@iitgn.ac.in</div>
                </div>
            </div>
        </>
    );
}

export default ContactForm;
