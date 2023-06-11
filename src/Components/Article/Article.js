import './Article.css';

function Article({data}) {
  return (
    <div>
      <h2>{data.title}</h2>
    </div>
  );
}

export default Article;