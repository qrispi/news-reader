import './Article.css';

function Article({data}) {

    const date = new Date(data.publishedAt)
  return (
    <div className='article-container'>
        <div className='content-container'>
            <img src={data.urlToImage} className='article-img' alt='article image'/>
            <h2 className='article-title'>{data.title}</h2>
            <h3>{date.toUTCString()}</h3>
            <h3>{data.author}</h3>
            <p className='article-text'>{data.content}</p>
            <a href={data.url}>Read More at {`${data.source.name}`} ➤</a>
        </div>
    </div>
  );
}

export default Article;