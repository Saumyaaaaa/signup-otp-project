import React, { useState } from 'react';

const FormPage = () => {
  const [formData, setFormData] = useState({
    legalName: '',
    doingBusinessAs: '',
    companyRegNumber: '',
    taxRegNumber: '',
    websiteURL: '',
    industryName: '',
    dropdownSelection: '',
    accountUsageIntent: '',
    randomCountPerMonth: '',
    expectedVisits: '',
    purposeDescription: '',
    contactEmail: '',
    incorporationCertificate: null,
    companyLogo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <h1>Tell us more about your business</h1>
      <p>Your info is like the Wi-Fi password—totally crucial for keeping things running, impressing the money folks, and making sure you get top-notch service without any buffering!</p>
      <form onSubmit={handleSubmit}>
        <label>
          Legal Name *
          <input type="text" name="legalName" value={formData.legalName} onChange={handleChange} required />
        </label>
        <label>
          Doing Business As *
          <input type="text" name="doingBusinessAs" value={formData.doingBusinessAs} onChange={handleChange} required />
        </label>
        <label>
          Company Registration Number *
          <input type="text" name="companyRegNumber" value={formData.companyRegNumber} onChange={handleChange} required />
        </label>
        <label>
          Tax Registration Number
          <input type="text" name="taxRegNumber" value={formData.taxRegNumber} onChange={handleChange} />
        </label>
        <label>
          Website URL *
          <input type="url" name="websiteURL" value={formData.websiteURL} onChange={handleChange} required />
        </label>
        <label>
          Industry Name *
          <input type="text" name="industryName" value={formData.industryName} onChange={handleChange} required />
        </label>
        <label>
          One Random Dropdown? *
          <select name="dropdownSelection" value={formData.dropdownSelection} onChange={handleChange} required>
            <option value="">Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </label>
        <label>
          Account Usage Intent *
          <input type="text" name="accountUsageIntent" value={formData.accountUsageIntent} onChange={handleChange} required />
        </label>
        <label>
          Random Count Per Month *
          <input type="number" name="randomCountPerMonth" value={formData.randomCountPerMonth} onChange={handleChange} required />
        </label>
        <label>
          Expected Total Visits in this Page *
          <input type="number" name="expectedVisits" value={formData.expectedVisits} onChange={handleChange} required />
        </label>
        <label>
          Purpose of Using Fake Form *
          <textarea name="purposeDescription" value={formData.purposeDescription} onChange={handleChange} required />
        </label>
        <label>
          Contact Email *
          <input type="email" name="contactEmail" value={formData.contactEmail} onChange={handleChange} required />
        </label>
        <label>
          Certification of Incorporation *
          <input type="file" name="incorporationCertificate" onChange={handleFileChange} required />
          <p>Click to upload or drag and drop (Max file size: 50 MB)</p>
        </label>
        <label>
          Company Logo *
          <input type="file" name="companyLogo" onChange={handleFileChange} required />
          <p>Click to upload or drag and drop (Max file size: 50 MB)</p>
        </label>
        <div>
          <button type="button" onClick={() => console.log('Go to Previous Step')}>Previous</button>
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default FormPage;