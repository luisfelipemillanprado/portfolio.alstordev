'use client';
import { ConfigProvider, FloatButton } from 'antd';
import { PlusOutlined, ArrowUpOutlined, SendOutlined } from '@ant-design/icons';
// --
export default function FloatingButton(props) {
  const { trigger, visibilityHeight } = props;
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'var(--font-family-1)',
          colorBgElevated: 'var(--second-card-background-color)',
          colorText: 'var(--second-font-color)',
        },
      }}
    >
      <FloatButton.Group trigger={trigger} type='default' style={{ right: 24 }} icon={<PlusOutlined />}>
        <FloatButton.BackTop icon={<ArrowUpOutlined />} duration={100} visibilityHeight={visibilityHeight} />
        <FloatButton icon={<SendOutlined />} />
      </FloatButton.Group>
    </ConfigProvider>
  );
}
