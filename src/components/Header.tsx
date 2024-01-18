import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

interface HeaderProps {
  title: string;
  subTitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subTitle }) => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Title level={2}>{title}</Title>
      {subTitle && <Title level={4}>{subTitle}</Title>}
    </div>
  );
};

export default Header;
