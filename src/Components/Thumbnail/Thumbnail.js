import './Thumbnail.css';

function Thumbnail({data}) {
  return (
    <div className='thumbnail'>
        <img src={data.urlToImage} className='thumb-img' alt='thumbnail image'/>
        <h2 className='thumb-title'>{data.title}</h2>
    </div>
  );
}

export default Thumbnail;