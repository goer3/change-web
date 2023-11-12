import React from 'react';
import '/src/assets/css/Login.less';
import { Logo, LogoGray } from '../../common/Resource.jsx';

// 注释
const Login = () => {
  return (
    <>
      <div className="hero">
        <img className="img-fluid hero-bg-1 up-down-animation" src="/src/assets/images/background/feature-bg-2.png" alt="" />
        <img className="img-fluid hero-bg-5 up-down-animation" src="/src/assets/images/background/blue-half-cycle.png" alt="" />
        <img className="img-fluid hero-bg-4 up-down-animation" src="/src/assets/images/background/seo-ball-1.png" alt="" />
        <img className="img-fluid hero-bg-3 left-right-animation" src="/src/assets/images/background/seo-half-cycle.png" alt="" />
        <img className="img-fluid hero-bg-8 left-right-animation" src="/src/assets/images/background/service-half-cycle.png" alt="" />
        <img className="img-fluid hero-bg-6 up-down-animation" src="/src/assets/images/background/yellow-triangle.png" alt="" />
        <img className="img-fluid hero-bg-7 left-right-animation" src="/src/assets/images/background/team-bg-triangle.png" alt="" />
        <img className="img-fluid hero-bg-2 up-down-animation" src="/src/assets/images/background/team-bg-dots.png" alt="" />
      </div>
      <div className="login">
        <div className="login-header">
          <img src={LogoGray} alt="" />
        </div>
        <div className="login-main">
          <div className="login-box">
            <div className="login-box-left">
              <img src={Logo} alt="" />
              <div className="login-box-left-bg"></div>
            </div>
            <div className="login-box-right">
              <div className="login-title">Sign in</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
