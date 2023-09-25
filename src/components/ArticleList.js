import * as React from "react";
import ArticleApi from "../api/src/api/ArticleApi";

function ArticleList() {
  const [articles, setArticles] = React.useState([]);
  const api = new ArticleApi();

  React.useEffect(() => {
    api.apiArticlesGet().then(setArticles).catch(console.error);
  }, []);

  return (
    <div>
      <h1>Artikelen</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleList;
