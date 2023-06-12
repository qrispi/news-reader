import './Article.css';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Article({data, fetch}) {

    const [loading, setLoading] = useState('Loading');

    const date = new Date(data.publishedAt);

    useEffect(() => {
        fetch();
        setLoading('');
    }, []);

  return (
    <div className='article-container'>
        {!loading &&
            <div className='content-container'>
                <img 
                    onError={(e) => e.target.src = require('../../images/placeholder.png')} 
                    src={data.urlToImage ? data.urlToImage : require('../../images/placeholder.png')} 
                    className='article-img' 
                    alt='article image'
                />
                <h2 className='article-title'>{data.title}</h2>
                <h3>{date.toUTCString()}</h3>
                <h3>{data.author}</h3>
                <p className='article-text'>{data.content}</p>
                <a href={data.url}>Read More at {`${data.source.name}`} ➤</a>
                <NavLink to='/'>
                    <button className='back-button'>Return Home</button>
                </NavLink>
            </div>
        }
    </div>
  );
}

export default Article;