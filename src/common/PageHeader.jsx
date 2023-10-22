import '/src/assets/css/PageHeader.less';

// 页面头部，接收以下参数
// title: 名称
// notices: 说明列表
const AdminPageHeader = (props) => {
  // 接收变量
  const notices = props.notices;
  const listItem = notices.map((item) => <li key={item.id}>{item.content}</li>);
  return (
    <div className="change-common-page-header">
      <div className="change-title">{props.title}</div>
      <div className="change-notice">
        <div className="change-desc">以下是关于{props.title}页面的一些特殊说明，请知悉：</div>
        <div className="change-list">
          <ol>{listItem}</ol>
        </div>
      </div>
    </div>
  );
};

export default AdminPageHeader;
