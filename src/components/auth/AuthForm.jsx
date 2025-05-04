import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { supabase } from "../../lib/supabaseClient";

const Authform = () => {
  const [formState, setFormState] = useState("Sign Up");

  const handleClick = () => {
    formState == "Sign Up" ? setFormState("Sign In") : setFormState("Sign Up");
  };

  const onFinish = async (values) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-md my-20">
      <h2 className="text-2xl font-bold text-center mb-6 uppercase">
        {formState}
      </h2>
      <Form
        name="signup"
        onFinish={onFinish}
        layout="vertical"
        autoComplete="off"
      >
        {formState == "Sign Up" && (
          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Username"
              className="py-2"
            />
          </Form.Item>
        )}

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Please enter a valid email!" },
          ]}
        >
          <Input
            prefix={<MailOutlined />}
            placeholder="Email"
            className="py-2"
          />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "Please input your password!" }]}
          hasFeedback
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Password"
            className="py-2"
          />
        </Form.Item>

        {formState == "Sign Up" && (
          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              { required: true, message: "Please confirm your password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject("Passwords do not match!");
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Confirm Password"
              className="py-2"
            />
          </Form.Item>
        )}

        <div className="text-sm flex pb-4 gap-2">
          {formState == "Sign Up"
            ? "Already have an account?"
            : "Don't have an account?"}
          <p
            onClick={handleClick}
            className="text-blue-600 hover:underline cursor-pointer font-bold"
          >
            {formState == "Sign Up" ? "Sign In" : "Sign Up"}
          </p>
        </div>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            className="bg-blue-600 hover:bg-blue-700"
          >
            {formState}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Authform;
