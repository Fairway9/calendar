import { useState } from 'react';

export default function ContentForm({ onSubmit }) {
  const [content, setContent] = useState({
    date: '',
    platform: '',
    media: '',
    caption: '',
    hashtag: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(content);
    setContent({ date: '', platform: '', media: '', caption: '', hashtag: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Tanggal: <input type="date" name="date" value={content.date} onChange={handleChange} /></label>
      <label>Platform: <input type="text" name="platform" value={content.platform} onChange={handleChange} /></label>
      <label>Media: <input type="text" name="media" value={content.media} onChange={handleChange} /></label>
      <label>Caption: <input type="text" name="caption" value={content.caption} onChange={handleChange} /></label>
      <label>Hashtag: <input type="text" name="hashtag" value={content.hashtag} onChange={handleChange} /></label>
      <button type="submit">Tambah Konten</button>
    </form>
  );
}