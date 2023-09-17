import { Button, Checkbox, Form, Input } from 'antd';
import { UserOutlined, KeyOutlined } from '@ant-design/icons';
import { USER_PASSWORD, USER_COUNT } from "@/constant/text"
import { useRouter } from 'next/router'


type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const Login: React.FC = () => {

    const router = useRouter()

    const onFinish = (values: any) => {
        // 转跳路由
        router.push('/disk/main')
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
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

            <Form.Item<FieldType>
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 0, span: 16 }}
            >
                <Checkbox>记住我</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ span: 24 }}>
                <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                    登录
                </Button>
            </Form.Item>
        </Form>
    );

}

export default Login;