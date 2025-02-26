import { Button, Card, Checkbox, Form, Input, message, Space, Typography } from "antd";
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import SocialLogin from "./components/SocialLogin";
import handleAPI from "../../apis/handleAPI";

const { Title, Paragraph, Text } = Typography;

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRemember, setIsRemember] = useState(false);

  const [form] = Form.useForm();

  const handleLogin = async (values: { email: string; password: string }) => {
    setIsLoading(true)
    console.log(values);
    try {
      const res = await handleAPI('/auth/register', values, 'post')
      console.log(res)
    } catch (error: any) {
      console.log(error)
      message.error(error.message)
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <div>
      <Card>
        <div className="text-center">
          <Title level={2}>Create an account</Title>
          <Paragraph type="secondary">
            Welcome back! Please enter your details.
          </Paragraph>
        </div>
        <Form layout="vertical" form={form} onFinish={handleLogin} disabled={isLoading} size="large">
          <Form.Item name={'name'} label='Name' rules={[
            {
              required: true,
              message: 'Please enter your name'
            }
          ]}>
            <Input allowClear />
          </Form.Item>
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
            },
            () => ({validator: (_, value) => {
              if(value.length < 6) {
                return Promise.reject(new Error('Your password need more than 6 letters'))
              } else {
                return Promise.resolve()
              }
            }})
          ]}>
            <Input.Password maxLength={100} type='email' />
          </Form.Item>
        </Form>

        <div className="mt-4 mb-3">
          <Button 
            loading={isLoading}
            onClick={() => form.submit()}
            type="primary"
            style={{width: '100%'}}
            size="large"
          >
            Sign up
          </Button>
        </div>
        <SocialLogin />
        <div className="mt-3 text-center">
          <Space>
            <Text>Already have an account?</Text>
            <Link to={'/login'}>Login</Link>
          </Space>
        </div>
      </Card>
    </div>
  );
}

export default SignUp
