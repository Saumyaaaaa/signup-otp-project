import React, { useState } from "react";
import { Upload, Typography, Form, Input, Row, Col, Select } from "antd";
import { LiaFileAlt } from "react-icons/lia"; // Import the icon

const { Title, Paragraph } = Typography;

const FormPage = () => {
  const [formData, setFormData] = useState({
    legalName: "",
    doingBusinessAs: "",
    companyRegNumber: "",
    randomRegNumber: "",
    websiteURL: "",
    industryName: "",
    accountUsageIntent: "",
    randomDropdown: "",
    productDescription: "",
    contactEmail: "",
    incorporationCertificate: null,
    companyLogo: null,
  });

  const handleChange = (name) => (value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (name) => ({ file }) => {
    setFormData({ ...formData, [name]: file });
  };

  const handleSubmit = (values) => {
    console.log("Form submitted:", { ...formData, ...values });
  };

 const requiredLabel = (text) => (
    <span className="flex justify-between items-center">
      <span>{text}</span>
      <span style={{ color: 'red', marginLeft: '5px' }}>*</span>
    </span>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center px-4">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6 md:p-8">
        <Title level={2} className="text-center mb-5">
          Tell us more about your business
        </Title>
        <Paragraph className="text-gray-600 text-center mb-8">
          Provide us with your company details to ensure top-notch service!
        </Paragraph>
        <Form layout="vertical" onFinish={handleSubmit}>
          {/* Text Fields */}
          <Row gutter={[16, 16]}>
  <Col xs={24} md={12}>
    <Form.Item
      label={requiredLabel("Legal Name")}
      name="legalName"
      rules={[{ required: true }]}
    >
      <Input
        value={formData.legalName}
        onChange={(e) => handleChange("legalName")(e.target.value)}
      />
    </Form.Item>
  </Col>
  <Col xs={24} md={12}>
    <Form.Item label="Doing Business As"
    name="Doing Business As"
    rules={[{ required: true }]}
    >
      <Input
        value={formData.doingBusinessAs}
        onChange={(e) => handleChange("doingBusinessAs")(e.target.value)}
      />
    </Form.Item>
  </Col>
  <Col xs={24} md={12}>
    <Form.Item
      label={requiredLabel("Company Registration Number")}
      name="companyRegNumber"
      rules={[{ required: true }]}
    >
      <Input
        value={formData.companyRegNumber}
        onChange={(e) => handleChange("companyRegNumber")(e.target.value)}
      />
    </Form.Item>
  </Col>
  <Col xs={24} md={12}>
    <Form.Item label="Random Registration Number"
    name="randomRegNumber"
      rules={[{ required: true }]}

    >
      <Input
        value={formData.randomRegNumber}
        onChange={(e) => handleChange("randomRegNumber")(e.target.value)}
      />
    </Form.Item>
  </Col>
  <Col xs={24} md={12}>
    <Form.Item
      label={requiredLabel("Website URL")}
      name="websiteURL"
      rules={[{ required: true }]}
    >
      <Input
        value={formData.websiteURL}
        onChange={(e) => handleChange("websiteURL")(e.target.value)}
      />
    </Form.Item>
  </Col>
  <Col xs={24} md={12}>
    <Form.Item
      label={requiredLabel("Industry Name")}
      name="industryName"
      rules={[{ required: true }]}
    >
      <Input
        value={formData.industryName}
        onChange={(e) => handleChange("industryName")(e.target.value)}
      />
    </Form.Item>
  </Col>
  <Col xs={24} md={12}>
    <Form.Item
      label={requiredLabel("One Random Dropdown?")}
      name="oneRandomDropdown"
      rules={[{ required: true }]}
    >
      <Select
        placeholder="options nai options" // Placeholder text
        value={formData.oneRandomDropdown} // Selected value
        onChange={(value) => handleChange("oneRandomDropdown")(value)} // Handler for selection
      >
        {/* Dropdown Options */}
        <Option value="Option 1">Option 1</Option>
        <Option value="Option 2">Option 2</Option>
        <Option value="Option 3">Option 3</Option>
      </Select>
    </Form.Item>
  </Col>
  <Col xs={24} md={12}>
    <Form.Item
      label={requiredLabel("Which Dropdown would you like to select?")}
      name="selectDropdown"
      rules={[{ required: true }]}
    >
     <Select
        placeholder="More Options" // Placeholder text
        value={formData.oneRandomDropdown} // Selected value
        onChange={(value) => handleChange("oneRandomDropdown")(value)} // Handler for selection
      >
        {/* Dropdown Options */}
        <Option value="Option 1">Option 1</Option>
        <Option value="Option 2">Option 2</Option>
        <Option value="Option 3">Option 3</Option>
      </Select>
    </Form.Item>
  </Col>
  <Col xs={24} md={12}>
    <Form.Item
      label={requiredLabel("Another Random Dropdown Appears")}
      name="anotherDropdown"
      rules={[{ required: true }]}
    >
     <Select
        placeholder="Return the options" // Placeholder text
        value={formData.oneRandomDropdown} // Selected value
        onChange={(value) => handleChange("oneRandomDropdown")(value)} // Handler for selection
      >
        {/* Dropdown Options */}
        <Option value="Option 1">Option 1</Option>
        <Option value="Option 2">Option 2</Option>
        <Option value="Option 3">Option 3</Option>
      </Select>
    </Form.Item>
  </Col>
  <Col xs={24} md={12}>
    <Form.Item
      label={requiredLabel("Account Usage Intent")}
      name="accountUsageIntent"
      rules={[{ required: true }]}
    >
      <Input
      placeholder="Account Usage Intent"
        value={formData.accountUsageIntent}
        onChange={(e) => handleChange("accountUsageIntent")(e.target.value)}
      />
    </Form.Item>
  </Col>
  <Col xs={24} md={12}>
    <Form.Item
      label={requiredLabel("Random count per month")}
      name="randomCount"
      rules={[{ required: true }]}
    >
      <Input
        placeholder="Put the value, get the answer"
        value={formData.randomCount}
        onChange={(e) => handleChange("randomCount")(e.target.value)}
      />
    </Form.Item>
  </Col>
  <Col xs={24} md={12}>
    <Form.Item
      label={requiredLabel("Expected total visits in this page")}
      name="expectedVisits"
      rules={[{ required: true }]}
    >
      <Input
        placeholder="In Number"
        value={formData.expectedVisits}
        onChange={(e) => handleChange("expectedVisits")(e.target.value)}
      />
    </Form.Item>
  </Col>
  <Col xs={24} md={12}>
    <Form.Item
      label={requiredLabel("Purpose of using fake form")}
      name="fakeFormPurpose"
      rules={[{ required: true }]}
    >
      <Input
        placeholder="Ek description toh banta hai"
        value={formData.fakeFormPurpose}
        onChange={(e) => handleChange("fakeFormPurpose")(e.target.value)}
      />
    </Form.Item>
  </Col>
  <Col xs={24} md={12}>
    <Form.Item label="Ek Description toh banta hai"
    name="Ek Description toh banta hai"
      rules={[{ required: true }]}>
      <Input
        placeholder="Product Description"
        value={formData.productDescription}
        onChange={(e) => handleChange("productDescription")(e.target.value)}
      />
    </Form.Item>
  </Col>
</Row>

          <Form.Item label={requiredLabel("Contact Email")} name="contactEmail" rules={[{ required: true, type: "email" }]}>
            <Input
             placeholder="Contact Email"
              value={formData.contactEmail}
              onChange={(e) => handleChange("contactEmail")(e.target.value)}
            />
          </Form.Item>

          {/* File Upload Section */}
          <Form.Item label={<strong>{requiredLabel("Certification of Incorporation")}</strong>} name="incorporationCertificate" rules={[{ required: true }]}>
            <p className="text-gray-500 mt-2 text-sm">Upload the incorporation certificate</p>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center text-center">
              <Upload
                beforeUpload={() => false}
                onChange={handleFileChange("incorporationCertificate")}
              >
                <div className="w-24 h-24 bg-gray-100 rounded-full flex justify-center items-center mb-4">
                  <LiaFileAlt className="text-gray-700" size={32} />
                </div>
                <p>
                  <span className="font-semibold underline cursor-pointer">
                    Click to upload
                  </span>{" "}
                  or drag and drop
                </p>
              </Upload>
              <p className="text-gray-500 text-sm">Maximum file size 50 MB</p>
            </div>
          </Form.Item>

          {/* Company Logo File Upload Section */}
          <Form.Item label={<strong>{requiredLabel("Company Logo")}</strong>} name="companyLogo" rules={[{ required: true }]}>
            <p className="text-gray-500 mt-2 text-sm">Upload the company logo</p>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center text-center">
              <Upload
                beforeUpload={() => false}
                onChange={handleFileChange("companyLogo")}
              >
                <div className="w-24 h-24 bg-gray-100 rounded-full flex justify-center items-center mb-4">
                  <LiaFileAlt className="text-gray-700" size={32} />
                </div>
                <p>
                  <span className="font-semibold underline cursor-pointer">
                    Click to upload
                  </span>{" "}
                  or drag and drop
                </p>
              </Upload>
              <p className="text-gray-500 text-sm">Maximum file size 50 MB</p>
            </div>
          </Form.Item>

          {/* Submit Section */}
          <Row justify="space-between" className="mt-5">
            <Col>
              <button
                type="button"
                onClick={() => console.log("Go to Previous Step")}
                className="px-6 py-2 border border-black text-black rounded-md hover:bg-gray-200"
              >
                Previous
              </button>
            </Col>
            <Col>
              <button
                type="submit"
                className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Next
              </button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default FormPage;
