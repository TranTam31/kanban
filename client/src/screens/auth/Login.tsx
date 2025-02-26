import { Button, Card, Checkbox, Form, Input, Space, Typography } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SocialLogin from "./components/SocialLogin";
import handleAPI from "../../apis/handleAPI";

const { Title, Paragraph, Text } = Typography;

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRemember, setIsRemember] = useState(false);

  const [form] = Form.useForm();

  const handleLogin = async (values: { email: string; password: string }) => {
    console.log(values);
    try {
      const res = await handleAPI('/auth/register', values, 'post')
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div>
      <Card>
        <div className="text-center">
          <img 
            className="mt-3"
            src="https://firebasestorage.googleapis.com/v0/b/kanban-c0323.appspot.com/o/kanban-logo.png?alt=media&token=a3e8c386-57da-49a3-b9a2-94b8fd93ff83" alt=""
            style={{
              width:48,
              height:48
            }} />
          <Title level={2}>Login to your account</Title>
          <Paragraph type="secondary">
            Welcome back! Please enter your details.
          </Paragraph>
        </div>
        <Form layout="vertical" form={form} onFinish={handleLogin} disabled={isLoading} size="large">
          <Form.Item name={'email'} label='Email' rules={[
            {
              required: true,
              message: 'Please enter your email'
            }
          ]}>
            <Input allowClear maxLength={100} type='email' />
          </Form.Item>
          <Form.Item name={'password'} label='Password' rules={[
            {
              required: true,
              message: 'Please enter your password'
            }
          ]}>
            <Input.Password maxLength={100} type='email' />
          </Form.Item>
        </Form>

        <div className="row">
          <div className="col">
            <Checkbox checked={isRemember} onChange={(val) => setIsRemember(val.target.checked)}>
              Remember
            </Checkbox>
          </div>
          <div className="col text-right">
            <Link to={'/'}>Forgot password?</Link>
          </div>
        </div>

        <div className="mt-4 mb-3">
          <Button 
            onClick={() => form.submit()}
            type="primary"
            style={{width: '100%'}}
            size="large"
          >
            Login
          </Button>
        </div>
        <SocialLogin />
        <div className="mt-3 text-center">
          <Space>
            <Text>Don't have a account?</Text>
            <Link to={'/sign-up'}>Sign up</Link>
          </Space>
        </div>
      </Card>
    </div>
  );
};

export default Login;
