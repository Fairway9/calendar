module.exports = require('./dist/pages/_app')

import { useState } from 'react';
import MyCalendar from '../components/MyCalendar';
import ContentForm from '../components/ContentForm';

export default function Home() {
  const [contentList, setContentList] = useState([]);

  const handleDateChange = (date) => {
    console.log('Tanggal yang dipilih:', date);
  };

  const handleContentSubmit = (content) => {
    setContentList([...contentList, content]);
  };

  return (
    <div>
      <h1>Kalender Konten</h1>
      <MyCalendar onDateChange={handleDateChange} />
      <ContentForm onSubmit={handleContentSubmit} />
      <div>
        {contentList.map((content, index) => (
          <div key={index}>
            <p>Tanggal: {content.date}</p>
            <p>Platform: {content.platform}</p>
            <p>Media: {content.media}</p>
            <p>Caption: {content.caption}</p>
            <p>Hashtag: {content.hashtag}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
