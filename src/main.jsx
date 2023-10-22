import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd'; // 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/es/locale/zh_CN';
import 'antd/dist/antd.css'; // Antd 样式
import 'misans/lib/misans-400-regular.min.css'; // 字体
import '/src/assets/css/AntdOverwrite.css'; // 修改默认样式

import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  // autoInsertSpaceInButton：解决按钮的文本为两个汉字时中间自动补充空格的问题
  <ConfigProvider locale={zhCN} autoInsertSpaceInButton={false}>
    <App />
  </ConfigProvider>,
);
