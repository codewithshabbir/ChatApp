import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { supabase } from "../../lib/supabaseClient";
import { toast, ToastContainer } from "react-toastify";
import { NavLink, useNavigate } from "react-router";

const Authform = ({ mode }) => {
  const formState = mode == "Sign Up" ? "Sign Up" : "Sign In";
  const [isLoading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    if (formState == "Sign Up") {
      setLoading(true);
      try {
        const { data, error } = await supabase.auth.signUp({
          email: values.email,
          password: values.password,
          options: {
            emailRedirectTo: `${window.location.origin}/verify`,
            data: {
              full_name: values.username,
            }
          },
        });

        if (error) {
          toast.error(error.message || "Signup failed");
          return;
        }

        if (data) {
          toast.success(
            "Signup successful! Please check your email to verify."
          );
          form.resetFields();
        }
      } catch (err) {
        toast.error("An unexpected error occurred. Try again later.");
      } finally {
        setLoading(false);
      }
    }
    else if (formState == 'Sign In') {
      setLoading(true);
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: values.email,
          password: values.password,
        })
        if (error) {
          toast.error(error.message || "SignIn failed");
          return;
        }
        if (data) {
          toast.success(
            "SignIn successful!"
          );
          form.resetFields();
          navigate('/chat')
        }
      } catch (err) {
        toast.error("An unexpected error occurred. Try again later.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-md my-20">
      <ToastContainer position="top-right" />
      <h2 className="text-2xl font-bold text-center mb-6 uppercase">
        {formState}
      </h2>
      <Form
        form={form}
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
          {formState === "Sign Up" ? (
            <p className="text-sm">
              Already have an account?{" "}
              <NavLink
                to="/signin"
                className="text-blue-600 font-semibold hover:underline"
              >
                Sign In
              </NavLink>
            </p>
          ) : (
            <p className="text-sm">
              Don't have an account?{" "}
              <NavLink
                to="/signup"
                className="text-blue-600 font-semibold hover:underline"
              >
                Sign Up
              </NavLink>
            </p>
          )}
        </div>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            className="bg-blue-600 hover:bg-blue-700"
            loading={isLoading}
          >
            {formState}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Authform;