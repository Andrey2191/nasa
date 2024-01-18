import React from 'react';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

interface DateRangePickerProps {
  onChange: (dates: any) => void;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({ onChange }) => {
  return (
    <RangePicker
      format="YYYY-MM-DD"
      onChange={onChange}
    />
  );
};

export default DateRangePicker;
