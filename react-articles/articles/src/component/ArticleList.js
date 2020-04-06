import React from "react";
import Article from "./Article";

export default function ArticleList(props) {
    console.log('---', 'ArticleList class is rendering', 'open article id : ', props.openArticleId)
    const articleElements = props.articles.map(article =>
        <li key={article.id}>
            <Article article={article} isOpen={props.openArticleId == article.id}
                     onClick={props.handleOpenArticleId.bind(this, article.id, article.title)}/>
        </li>
    )
    return (
        <ul>
            {articleElements}
        </ul>
    )
}