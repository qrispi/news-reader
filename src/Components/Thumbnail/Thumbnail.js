import './Thumbnail.css';

function Thumbnail({data}) {

  return (
    <div className='thumbnail'>
        <img onError={(e) => e.target.src = require('../../images/placeholder.png')} src={data.urlToImage ? data.urlToImage : require('../../images/placeholder.png')} className='thumb-img' alt='thumbnail image' />
        <h2 className='thumb-title'>{data.title}</h2>
    </div>
  );
}

export default Thumbnail;