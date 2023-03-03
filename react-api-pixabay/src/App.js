import { useRef, useState } from 'react';
import './App.css';
import ImageGallery from './ImageGallery';

function App() {
  const [fetchData,setFetchData] = useState([]);
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault(); // enterキーで値が消えるのを防ぐ
    console.log(ref.current.value);

    // API URL
    const endPointUrl = `https://pixabay.com/api/?key=28694732-fab663a95887745904f6d3b5b&q=${ref.current.value}&image_type=photo`
    // APIを叩く（データフェッチング）
    fetch(endPointUrl)
      .then(((res) => {
        return res.json();
      }))
      .then((data) => {
        // console.log(data.hits);
        setFetchData(data.hits);
      })
  }

  return (
    <div className="container">
      <h2>API Pixabay</h2>
      <form onSubmit={(e) => {handleSubmit(e)}}>
        <input type="text" placeholder="画像を探す" ref={ref} />
      </form>
      <ImageGallery fetchData={fetchData}/>
    </div>
  );
}

export default App;
