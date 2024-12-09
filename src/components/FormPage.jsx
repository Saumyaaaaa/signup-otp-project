import { useState } from "react";
import {
  Form,
  Input,
  Button,
  Select,
  Upload,
  Typography,
  Row,
  Col,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;
const { Option } = Select;

const FormPage = () => {
  const [formData, setFormData] = useState({
    legalName: "",
    doingBusinessAs: "",
    companyRegNumber: "",
    taxRegNumber: "",
    websiteURL: "",
    industryName: "",
    dropdownSelection: "",
    accountUsageIntent: "",
    randomCountPerMonth: "",
    expectedVisits: "",
    purposeDescription: "",
    contactEmail: "",
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
    console.log("Form submitted:", values);
  };

  const requiredLabel = (text) => (
    <span>
      {text} <span className="text-red-500">*</span>
    </span>
  );

  return (
    
  

<div className="min-h-screen w-full bg-gray-50 p-4">
    <div className="max-w-4xl sm:max-w-5xl md:max-w-6xl mx-auto flex items-center justify-center">
      {/* Full width and height container */}
      <div className="w-full max-w-4xl mx-auto px-4">
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 lg:p-10">
          <Title level={2} className="text-center mb-5">
            Tell us more about your business
          </Title>
          <Paragraph className="text-gray-600 text-center mb-8">
            Your info is like the Wi-Fi password—totally crucial for keeping
            things running, impressing the money folks, and making sure you get
            top-notch service without any buffering!
          </Paragraph>
          <Form layout="vertical" onFinish={handleSubmit}>
            <Form.Item label={requiredLabel("Legal Name")}>
              <Input
                value={formData.legalName}
                onChange={(e) => handleChange("legalName")(e.target.value)}
              />
            </Form.Item>
            <Form.Item label={requiredLabel("Doing Business As")}>
              <Input
                value={formData.doingBusinessAs}
                onChange={(e) => handleChange("doingBusinessAs")(e.target.value)}
              />
            </Form.Item>
            <Form.Item label={requiredLabel("Company Registration Number")}>
              <Input
                value={formData.companyRegNumber}
                onChange={(e) =>
                  handleChange("companyRegNumber")(e.target.value)
                }
              />
            </Form.Item>
            <Form.Item label="Tax Registration Number">
              <Input
                value={formData.taxRegNumber}
                onChange={(e) => handleChange("taxRegNumber")(e.target.value)}
              />
            </Form.Item>
            <Form.Item label={requiredLabel("Website URL")}>
              <Input
                value={formData.websiteURL}
                onChange={(e) => handleChange("websiteURL")(e.target.value)}
              />
            </Form.Item>
            <Form.Item label={requiredLabel("Industry Name")}>
              <Input
                value={formData.industryName}
                onChange={(e) => handleChange("industryName")(e.target.value)}
              />
            </Form.Item>
            <Form.Item label={requiredLabel("One Random Dropdown?")}>
              <Select
                value={formData.dropdownSelection}
                onChange={handleChange("dropdownSelection")}
              >
                <Option value="">Select an option</Option>
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
                <Option value="option3">Option 3</Option>
              </Select>
            </Form.Item>
            <Form.Item label={requiredLabel("Account Usage Intent")}>
              <Input
                value={formData.accountUsageIntent}
                onChange={(e) =>
                  handleChange("accountUsageIntent")(e.target.value)
                }
              />
            </Form.Item>
            <Form.Item label={requiredLabel("Random Count Per Month")}>
              <Input
                type="number"
                value={formData.randomCountPerMonth}
                onChange={(e) =>
                  handleChange("randomCountPerMonth")(e.target.value)
                }
              />
            </Form.Item>
            <Form.Item
              label={requiredLabel("Expected Total Visits in this Page")}
            >
              <Input
                type="number"
                value={formData.expectedVisits}
                onChange={(e) =>
                  handleChange("expectedVisits")(e.target.value)
                }
              />
            </Form.Item>
            <Form.Item label={requiredLabel("Purpose of Using Fake Form")}>
              <Input.TextArea
                value={formData.purposeDescription}
                onChange={(e) =>
                  handleChange("purposeDescription")(e.target.value)
                }
              />
            </Form.Item>
            <Form.Item label={requiredLabel("Contact Email")}>
              <Input
                type="email"
                value={formData.contactEmail}
                onChange={(e) => handleChange("contactEmail")(e.target.value)}
              />
            </Form.Item>
            <Form.Item label={requiredLabel("Certification of Incorporation")}>
              <Upload
                beforeUpload={() => false}
                onChange={(info) =>
                  handleFileChange("incorporationCertificate")(info.file)
                }
              >
                <Button icon={<UploadOutlined />}>
                  Click to upload or drag and drop
                </Button>
              </Upload>
            </Form.Item>
            <Form.Item label={requiredLabel("Company Logo")}>
              <Upload
                beforeUpload={() => false}
                onChange={(info) => handleFileChange("companyLogo")(info.file)}
              >
                <Button icon={<UploadOutlined />}>
                  Click to upload or drag and drop
                </Button>
              </Upload>
            </Form.Item>
            <Row justify="space-between" className="mt-5">
              <Col>
                <Button
                  type="default"
                  onClick={() => console.log("Go to Previous Step")}
                  className="px-6 py-2"
                >
                  Previous
                </Button>
              </Col>
              <Col>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="bg-red-500 hover:bg-red-700 text-white px-6 py-2"
                >
                  Next
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FormPage;
