import { Button, Form, Input } from 'antd';
import { KeyOutlined, UserOutlined } from '@ant-design/icons';
import { USER_COUNT, USER_PASSWORD } from '@/constant/text';
const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const App: React.FC = () => (
    <Form
        name="basic"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <Form.Item<FieldType>
            name="username"
            rules={[{ required: true, message: USER_COUNT }]}
        >
            <Input prefix={<UserOutlined />} />
        </Form.Item>

        <Form.Item<FieldType>
            name="password"
            rules={[{ required: true, message: USER_PASSWORD }]}
        >
            <Input.Password prefix={<KeyOutlined />} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 0, span: 24 }} >
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                注册
            </Button>
        </Form.Item>
    </Form>
);

export default App;