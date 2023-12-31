import React from 'react';
import AdminPageHeader from '../../../common/PageHeader.jsx';

// 用户管理
const UsersUser = () => {
  const title = '用户管理'; // 页面标题
  const notices = [
    // 提示信息
    {
      id: 1,
      content: '用户管理说明：管理员用户可以对用户进行搜索查看，新增创建，编辑修改，禁用启用，锁定解锁，删除等操作。',
    },
    {
      id: 2,
      content: '用户状态说明：未激活（用户创建后未登录过），锁定（密码错误次数达到上限），禁用（可以用于替代用户删除）。',
    },
    {
      id: 3,
      content: '用户删除说明：删除用户后，用户信息在数据库中依然存在，默认删除属于软删除，想要找回可以联系管理员。',
    },
  ];

  return (
    <>
      <AdminPageHeader title={title} notices={notices} />
    </>
  );
};

export default UsersUser;
