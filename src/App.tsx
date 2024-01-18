import { useState, useEffect } from 'react';
import { Spin, DatePicker } from 'antd';
import axios from 'axios';
import moment from 'moment';
import Header from './components/Header';
import ApodImage from './components/ApodImage';
import DateRangePicker from './components/DatePicker';
import './App.css'

const API_KEY = 'mGhlCVvNkbs1vAh2c3ISX4BjEzO39by9a0xS8aM5';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [apodData, setApodData] = useState<any>({});
  const [selectedDate, setSelectedDate] = useState(moment());

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${selectedDate.format('YYYY-MM-DD')}`
        );
        setApodData(response.data);
      } catch (error) {
        console.error('Error fetching APOD data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedDate]);

  const handleDateChange = (dates: any) => {
    if (dates && dates.length === 2) {
      setSelectedDate(dates[0]);
    }
  };

  return (
    <div className='app'>
      <Header title="NASA Astronomy Picture of the Day" />
      <DateRangePicker onChange={handleDateChange} />
      {loading ? (
        <Spin size="large" />
      ) : (
        <ApodImage
          title={apodData.title}
          date={apodData.date}
          explanation={apodData.explanation}
          url={apodData.url}
        />
      )}
    </div>
  );
};

export default App;
