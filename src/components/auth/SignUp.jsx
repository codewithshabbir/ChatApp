import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { supabase } from '../../lib/supabaseClient';

const SignupForm = () => {
    const onFinish = async (values) => {
        console.log('Form values:', values);
        // API call or further logic here
        try {
            const { data, error } = await supabase.auth.signUp({
                email: values.email,
                password: values.password
            })
            console.log(data);
            
        } catch (error) {
            console.log(error);

        }
    };

    return (
        <div style={{ maxWidth: 400, margin: '0 auto', padding: '2rem' }}>
            <h2 style={{ textAlign: 'center' }}>Signup</h2>
            <Form
                name="signup"
                onFinish={onFinish}
                layout="vertical"
                autoComplete="off"
            >
                <Form.Item
                    name="username"
                    label="Username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input prefix={<UserOutlined />} placeholder="Username" />
                </Form.Item>

                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        { required: true, message: 'Please input your email!' },
                        { type: 'email', message: 'Please enter a valid email!' },
                    ]}
                >
                    <Input prefix={<MailOutlined />} placeholder="Email" />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                    hasFeedback
                >
                    <Input.Password prefix={<LockOutlined />} placeholder="Password" />
                </Form.Item>

                <Form.Item
                    name="confirmPassword"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        { required: true, message: 'Please confirm your password!' },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('Passwords do not match!');
                            },
                        }),
                    ]}
                >
                    <Input.Password prefix={<LockOutlined />} placeholder="Confirm Password" />
                </Form.Item>

                <Form.Item name="agree" valuePropName="checked" rules={[
                    {
                        validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject('You must accept the terms'),
                    },
                ]}>
                    <Checkbox>
                        I agree to the <a href="#">terms and conditions</a>
                    </Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                        Sign Up
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default SignupForm;