import React from 'react';
import { Card, Spin } from 'antd';

interface ApodImageProps {
  title: string;
  date: string;
  explanation: string;
  url: string;
}

const ApodImage: React.FC<ApodImageProps> = ({ title, date, explanation, url }) => {
  return (
    <Card
      title={title}
      bordered={false}
      style={{ width: 600 }}
      cover={<img alt={title} src={url} />}
    >
      <p>Date: {date}</p>
      <p>{explanation}</p>
    </Card>
  );
};

export default ApodImage;
