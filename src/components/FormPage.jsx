import React, { useState } from 'react';
import { Form, Input, Button, Select, Upload, Typography, Row, Col } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { Option } = Select;

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

  const handleChange = (name) => (value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (name) => (file) => {
    setFormData({ ...formData, [name]: file });
  };

  const handleSubmit = (values) => {
    console.log('Form submitted:', values);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Title level={2}>Tell us more about your business</Title>
      <Paragraph>Your info is like the Wi-Fi password—totally crucial for keeping things running, impressing the money folks, and making sure you get top-notch service without any buffering!</Paragraph>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="Legal Name *" required>
          <Input value={formData.legalName} onChange={(e) => handleChange('legalName')(e.target.value)} />
        </Form.Item>
        <Form.Item label="Doing Business As *" required>
          <Input value={formData.doingBusinessAs} onChange={(e) => handleChange('doingBusinessAs')(e.target.value)} />
        </Form.Item>
        <Form.Item label="Company Registration Number *" required>
          <Input value={formData.companyRegNumber} onChange={(e) => handleChange('companyRegNumber')(e.target.value)} />
        </Form.Item>
        <Form.Item label="Tax Registration Number">
          <Input value={formData.taxRegNumber} onChange={(e) => handleChange('taxRegNumber')(e.target.value)} />
        </Form.Item>
        <Form.Item label="Website URL *" required>
          <Input value={formData.websiteURL} onChange={(e) => handleChange('websiteURL')(e.target.value)} />
        </Form.Item>
        <Form.Item label="Industry Name *" required>
          <Input value={formData.industryName} onChange={(e) => handleChange('industryName')(e.target.value)} />
        </Form.Item>
        <Form.Item label="One Random Dropdown? *" required>
          <Select value={formData.dropdownSelection} onChange={handleChange('dropdownSelection')}>
            <Option value="">Select an option</Option>
            <Option value="option1">Option 1</Option>
            <Option value="option2">Option 2</Option>
            <Option value="option3">Option 3</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Account Usage Intent *" required>
          <Input value={formData.accountUsageIntent} onChange={(e) => handleChange('accountUsageIntent')(e.target.value)} />
        </Form.Item>
        <Form.Item label="Random Count Per Month *" required>
          <Input type="number" value={formData.randomCountPerMonth} onChange={(e) => handleChange('randomCountPerMonth')(e.target.value)} />
        </Form.Item>
        <Form.Item label="Expected Total Visits in this Page *" required>
          <Input type="number" value={formData.expectedVisits} onChange={(e) => handleChange('expectedVisits')(e.target.value)} />
        </Form.Item>
        <Form.Item label="Purpose of Using Fake Form *" required>
          <Input.TextArea value={formData.purposeDescription} onChange={(e) => handleChange('purposeDescription')(e.target.value)} />
        </Form.Item>
        <Form.Item label="Contact Email *" required>
          <Input type="email" value={formData.contactEmail} onChange={(e) => handleChange('contactEmail')(e.target.value)} />
        </Form.Item>
        <Form.Item label="Certification of Incorporation *" required>
          <Upload beforeUpload={() => false} onChange={(info) => handleFileChange('incorporationCertificate')(info.file)}>
            <Button icon={<UploadOutlined />}>Click to upload or drag and drop</Button>
          </Upload>
        </Form.Item>
        <Form.Item label="Company Logo *" required>
          <Upload beforeUpload={() => false} onChange={(info) => handleFileChange('companyLogo')(info.file)}>
            <Button icon={<UploadOutlined />}>Click to upload or drag and drop</Button>
          </Upload>
        </Form.Item>
        <Row justify="space-between">
          <Col>
            <Button type="default" onClick={() => console.log('Go to Previous Step')}>Previous</Button>
          </Col>
          <Col>
            <Button type="primary" htmlType="submit">Next</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default FormPage;