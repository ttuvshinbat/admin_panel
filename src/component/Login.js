import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import "../style/login.css";
import { userService } from "../services/userService";
import { useUser } from "../contexts/UserContext";
import { NavLink } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useUser();
  const onFinish = (values) => {
    console.log("Success:", values);
    userService
      .loginUser({
        email: values.username,
        password: values.password,
      })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          userService.userInfoStorage(data);
          console.log(data);
          setUser({
            userName: data.data.name,
            email: data.data.email,
          });
        } else {
          alert("failed to login");
        }
      });
  };
  console.log(user);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div className="login-right">
        <p>a</p>
        <Form
          className="loginForm"
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}
