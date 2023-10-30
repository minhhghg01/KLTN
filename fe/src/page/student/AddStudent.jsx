import { Button, Form, Input, Upload } from 'antd';
import { Link } from 'react-router-dom';
import { Select } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { uploadImage } from '../../api/image';
// import { createProductLine } from '../../api/productline';
// import { useAppContext } from '../../contexts/AppContext';
import { LeftOutlined, PlusOutlined } from '@ant-design/icons';
// import Loading from '../loading/Loading';
import './index.css';

const AddStudent = () => {
  const navigate = useNavigate();
//   const { openNotification } = useAppContext();
  const { Option } = Select;
  const [isLoading, setIsLoading] = useState(false);
  const [fileList, setFileList] = useState([]);
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
//   const onFinish = async (values) => {
//     setIsLoading(true);
//     const data = fileList.map((file) => {
//       return file.thumbUrl;
//     });
//     // const response = await uploadImage({ data: data });
//     if (response.success) {
//       const response1 = await createProductLine({
//         ...values,
//         img: response.data,
//         timePeriod: {
//           period: Number(values.period),
//           unit: Number(values.unit),
//         },
//       });
//       if (response1.success) {
//         openNotification('success', response1.msg);
//         navigate('/productline');
//       }
//       setIsLoading(false);
//       // }
//     }
//   };

  const selectAfter = (
    <Form.Item name="unit" noStyle>
      <Select
        className="select-after"
        name="unit"
        style={{
          width: 90,
        }}
      >
        <Option value={0}>Ngày</Option>
        <Option value={1}>Tháng</Option>
        <Option value={2}>Năm</Option>
      </Select>
    </Form.Item>
  );
  return (
    <div>
      <div className="w-1/12 mt-5">
        <Link to="/productline">
          <LeftOutlined />
        </Link>
      </div>
      {/* <Loading spinning={isLoading}> */}
        <div className="w-5/6 mt-5 mx-auto">
          <Form
            layout="vertical"
            // onFinish={onFinish}
            initialValues={{ remember: true }}
          >
            <Form.Item
              label="Tên học viên"
              type="text"
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập Tên của học viên!',
                },
              ]}
            >
              <Input name="name" placeholder="input placeholder" />
            </Form.Item>
            {/* <Form.Item
              label="Hình ảnh"
              type="file"
              name="img"
              rules={[
                {
                  required: true,
                  message: 'Please input your img!',
                },
              ]}
            >
              <Input
                type="file"
                onChange={handleFileInputChange}
                value={fileInputState}
                name="img"
                placeholder="input placeholder"
              />
            </Form.Item> */}
            <Form.Item
              label="Họ và tên đệm học viên"
              type="text"
              name="code"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập Họ và tên đệm của học viên!',
                },
              ]}
            >
              <Input name="code" placeholder="input placeholder" />
            </Form.Item>
            {/* Khối lượng bản thân */}
            <Form.Item
              label="Lớp"
              name="weight"
              type="text"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập Lớp của học viên!',
                },
              ]}
            >
              <Input name="weight" placeholder="input placeholder" />
            </Form.Item>
            {/* Dài */}
            <Form.Item
              label="Email"
              name="length"
              type="text"
              rules={[{ required: true, message: 'Vui lòng nhập Email của học viên!' }]}
            >
              <Input name="length" placeholder="input placeholder" />
            </Form.Item>
            {/* Rộng */}
            <Form.Item
              label="SĐT học viên"
              name="width"
              type="text"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập SĐT của học viên!',
                },
              ]}
            >
              <Input name="width" placeholder="input placeholder" />
            </Form.Item>
            {/* Cao */}
            <Form.Item
              label="SĐT phụ huynh"
              name="height"
              type="text"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập SĐT phụ huynh của học viên!',
                },
              ]}
            >
              <Input name="height" placeholder="input placeholder" />
            </Form.Item>
            
            <Upload
              // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              // fileList={fileList}
              // onPreview={handlePreview}
              onChange={(e) => {
                console.log(e.fileList);
                setFileList(e.fileList);
              }}
            >
              {uploadButton}
            </Upload>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form>
        </div>
      {/* </Loading> */}
    </div>
  );
};

export default AddStudent;