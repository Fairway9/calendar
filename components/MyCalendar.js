import Calendar from 'react-calendar';
import { useState } from 'react';

export default function MyCalendar({ onDateChange }) {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (date) => {
    setDate(date);
    onDateChange(date);
  };

  return (
    <div>
      <Calendar onChange={handleDateChange} value={date} />
      <p>Tanggal yang dipilih: {date.toDateString()}</p>
    </div>
  );
}
