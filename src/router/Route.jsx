import React from 'react';
import { Navigate, useRoutes } from 'react-router';
import AdminLayout from '../components/layout/AdminLayout.jsx';
import LazyLoad from './Lazy.jsx';

// 路由数据
export const RouteData = [
  {
    path: '/', // 首页跳转;
    element: <Navigate to="/dashboard" />,
  },
  {
    // 后台路由
    path: '/',
    element: <AdminLayout />,
    // 子页面
    children: [
      {
        path: 'dashboard', // 工作台
        element: LazyLoad(React.lazy(() => import('/src/pages/dashboard/Dashboard.jsx'))),
      },
      {
        path: 'users', // 用户中心
        children: [
          {
            path: 'user', // 用户管理
            element: LazyLoad(React.lazy(() => import('/src/pages/users/user/UsersUser.jsx'))),
          },
          {
            path: 'group', // 分组管理
            element: LazyLoad(React.lazy(() => import('/src/pages/users/group/UsersGroup.jsx'))),
          },
          {
            path: 'role', // 角色管理
            element: LazyLoad(React.lazy(() => import('/src/pages/users/role/UsersRole.jsx'))),
          },
        ],
      },
      {
        path: 'system', // 系统配置
        children: [
          {
            path: 'department', // 部门管理
            element: LazyLoad(
              React.lazy(() => import('/src/pages/system/department/SystemDepartment.jsx')),
            ),
          },
          {
            path: 'menu', // 菜单管理
            element: LazyLoad(React.lazy(() => import('/src/pages/system/menu/SystemMenu.jsx'))),
          },
          {
            path: 'api', // 接口管理
            element: LazyLoad(React.lazy(() => import('/src/pages/system/api/SystemAPI.jsx'))),
          },
          {
            path: 'setting', // 服务配置
            element: LazyLoad(
              React.lazy(() => import('/src/pages/system/setting/SystemSetting.jsx')),
            ),
          },
        ],
      },
      {
        path: 'help', // 帮助页
        element: LazyLoad(React.lazy(() => import('/src/pages/help/Help.jsx'))),
      },
      {
        path: '404', // 404
        element: LazyLoad(React.lazy(() => import('/src/pages/error/404.jsx'))),
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/404" />,
  },
];

// 生成路由列表
const RouteList = () => {
  return useRoutes(RouteData);
};

export default RouteList;
