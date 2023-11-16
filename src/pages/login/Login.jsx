import {
  DingtalkOutlined,
  KeyOutlined,
  MailOutlined,
  MessageOutlined,
  UserOutlined,
  SafetyOutlined,
  InsuranceOutlined
} from '@ant-design/icons';
import { Button, Checkbox, Divider, Form, Input, Space } from 'antd';
import React from 'react';
import { Logo, LogoGray } from '../../common/Resource.jsx';
import '/src/assets/css/Login.less';

// 注释
const Login = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
      <>
        <div className="hero">
          < img className="login-img-fluid login-change-bg-1 up-down-animation" src="/src/assets/images/background/feature-bg-2.png" alt="" />
          <img
              className="login-img-fluid login-change-bg-5 up-down-animation"
              src="/src/assets/images/background/blue-half-cycle.png"
              alt=""
          />
          < img className="login-img-fluid login-change-bg-4 up-down-animation" src="/src/assets/images/background/seo-ball-1.png" alt="" />
          <img
              className="login-img-fluid login-change-bg-3 left-right-animation"
              src="/src/assets/images/background/seo-half-cycle.png"
              alt=""
          />
          <img
              className="login-img-fluid login-change-bg-8 left-right-animation"
              src="/src/assets/images/background/service-half-cycle.png"
              alt=""
          />
          <img
              className="login-img-fluid login-change-bg-6 up-down-animation"
              src="/src/assets/images/background/yellow-triangle.png"
              alt=""
          />
          <img
              className="login-img-fluid login-change-bg-7 left-right-animation"
              src="/src/assets/images/background/team-bg-triangle.png"
              alt=""
          />
          < img className="login-img-fluid login-change-bg-2 up-down-animation" src="/src/assets/images/background/team-bg-dots.png" alt="" />
        </div>
        <div className="login">
          <div className="login-header">
            < img src={LogoGray} alt="" />
          </div>
          <div className="login-main">
            <div className="login-box">
              <div className="login-box-left">
                < img src={Logo} alt="" />
                <div className="login-box-left-bg"></div>
              </div>
              <div className="login-box-right">
                <div className="login-qr-code">
                  < img src="/src/assets/images/background/QR-Code.png" alt="" />
                </div>
                <div className="login-title">Sign in</div>
                <Divider className="login-line">Welcome</Divider>
                <div>
                  <Form
                      name="login"
                      className="login-form"
                      initialValues={{
                        remember: true,
                      }}
                      onFinish={onFinish}>
                    <Form.Item
                        name="account"
                        rules={[
                          {
                            required: true,
                            message: '请使用工号 / 手机号 / 邮箱登录!',
                          },
                        ]}>
                      <Input className="login-input" prefix={<UserOutlined />} placeholder="工号 / 手机号 / 邮箱" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                          {
                            required: true,
                            message: '请输入你的密码!',
                          },
                        ]}>
                      <Input.Password className="login-input" prefix={<KeyOutlined />} placeholder="密码" />
                    </Form.Item>
                    <Form.Item>
                      <Input className="login-input" prefix={<InsuranceOutlined />} placeholder="VIP ACCESS 验证码" />
                    </Form.Item>
                    {/*<Form.Item>*/}
                    {/*  <Space direction="horizontal">*/}
                    {/*    <Input*/}
                    {/*      prefix={<MessageOutlined />}*/}
                    {/*      placeholder="短信验证码"*/}
                    {/*      style={{*/}
                    {/*        width: '170px',*/}
                    {/*      }}*/}
                    {/*    />*/}
                    {/*    <Button className="login-btn login-code-btn">获取验证码</Button>*/}
                    {/*  </Space>*/}
                    {/*</Form.Item>*/}
                    {/*<Form.Item>*/}
                    {/*  <Space direction="horizontal">*/}
                    {/*    <Input*/}
                    {/*        prefix={<MailOutlined />}*/}
                    {/*        placeholder="邮件验证码"*/}
                    {/*        style={{*/}
                    {/*          width: '170px',*/}
                    {/*        }}*/}
                    {/*    />*/}
                    {/*    <Button className="login-btn login-code-btn">获取验证码</Button>*/}
                    {/*  </Space>*/}
                    {/*</Form.Item>*/}
                    <Form.Item>
                      <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>记住密码 |</Checkbox>
                      </Form.Item>
                      <a href="">忘记密码？</a>
                    </Form.Item>

                    <Form.Item>
                      <Button htmlType="submit" className="login-btn login-form-button">
                        登录
                      </Button>
                      <div>
                        没有账号？
                        <a href="">
                          直接钉钉扫码自动创建 <DingtalkOutlined />
                        </a >
                      </div>
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

export default Login;