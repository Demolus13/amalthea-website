import React, { useEffect} from 'react';
import '../styles/Brainwiz.css'

function ContactForm() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page on component load
    }, []);

    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     contact: '',
    //     class: 'Class 9th',
    //     stream: 'Not applicable',
    //     school: '',
    //     address: '',
    //     city: '',
    //     state: '',
    //     guardianName: '',
    //     guardianContact: '',
    //     googleDriveLink1: '',
    //     googleDriveLink2: '',
    // });

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value,
    //     });
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const driveLinkPattern = /^https:\/\/drive\.google\.com\/.*$/;

    //     if (!driveLinkPattern.test(formData.googleDriveLink1) || !driveLinkPattern.test(formData.googleDriveLink2)) {
    //         alert('Please enter valid Google Drive links');
    //         return;
    //     }

    //     const scriptURL = 'https://docs.google.com/forms/u/0/d/1sVVvsl6RHEpFmnkucCIfhuwreoRy--kPTr-u2azqmQA/formResponse';
    //     const form = new FormData();
    //     form.append('entry.756603207', formData.name);
    //     form.append('entry.2010326846', formData.email);
    //     form.append('entry.2070518104', formData.contact);
    //     form.append('entry.1796367140', formData.class);
    //     form.append('entry.1820839827', formData.stream);
    //     form.append('entry.421132129', formData.school);
    //     form.append('entry.1800670499', formData.address);
    //     form.append('entry.993662820', formData.city);
    //     form.append('entry.147516377', formData.state);
    //     form.append('entry.151031277', formData.guardianName);
    //     form.append('entry.656237450', formData.guardianContact);
    //     form.append('entry.627039335', formData.googleDriveLink1);
    //     form.append('entry.1143467285', formData.googleDriveLink2);

    //     try {
    //         await fetch(scriptURL, { method: 'POST', mode: 'no-cors', body: form });
    //         alert('Thank you! Your form is submitted successfully.');
    //         setFormData({
    //             name: '',
    //             email: '',
    //             contact: '',
    //             class: '',
    //             stream: '',
    //             school: '',
    //             address: '',
    //             city: '',
    //             state: '',
    //             guardianName: '',
    //             guardianContact: '',
    //             googleDriveLink1: '',
    //             googleDriveLink2: '',
    //         });
    //     } catch (error) {
    //         console.error('Error!', error.message);
    //     }
    // };

    return (
        <>
        <div className="bw-bg"></div>
        <div className='bw-body'>
            <div className="bw-container">
                <h2>BrainWiz</h2>
                <h2>Registration Form is closed</h2>
                {/* <form onSubmit={handleSubmit}>
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
                            <option value="Not applicable">Not applicable</option>
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
                            pattern="[0-9]{10}"
                            title="Please enter a 10-digit phone number"
                            />
                    </div>
                    <div className="info" style={{paddingBottom: "15px"}}>
                        Please give access to these Google Drive Links
                    </div>
                    <div className="form-group">
                        <label htmlFor="googleDriveLink1">
                            Google Drive Link for School ID Card/Aadhar Card:
                        </label>
                        <input
                            type="url"
                            id="googleDriveLink1"
                            name="googleDriveLink1"
                            value={formData.googleDriveLink1}
                            onChange={handleInputChange}
                            placeholder="Paste your Google Drive link here"
                            required
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="googleDriveLink2">
                            Google Drive Link for Recent Photographs (Passport Size):
                        </label>
                        <input
                            type="url"
                            id="googleDriveLink2"
                            name="googleDriveLink2"
                            value={formData.googleDriveLink2}
                            onChange={handleInputChange}
                            placeholder="Paste your Google Drive link here"
                            required
                            />
                    </div>
                    <div className="form-group">
                        <button type="submit">Submit</button>
                    </div>
                </form> */}
                <div className="info">
                    For any further details please contact the following organisers,
                </div>
                <div className="organisers">Dewansh Singh Chandel - +91 80859 07445, dewanshsingh.chandel@iitgn.ac.in</div>
                <div className="organisers">Lavanya - +91 87084 93621, lavanya.lavanya@iitgn.ac.in</div>
                <div className="organisers">Farhan Obaid- +91 76673 36359, farhan.obaid@iitgna.ac.in</div>
            </div>
        </div>
        </>
    );
}

export default ContactForm;
