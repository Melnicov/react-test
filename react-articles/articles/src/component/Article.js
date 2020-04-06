import React from "react";

export default function Article(props) {
    const {article, isOpen, onClick} = props
    console.log('---', 'Article class id open : ', isOpen)
    console.log('---', 'Article class is rendering with article id : ' + article.id)

    const body = isOpen && <section className='card-text'>{article.text}</section>
    return (
        <div className='card'>
            <h2 className='card-header'>
                {article.title}
                <button className='btn btn-primary' onClick={onClick}>{isOpen ? 'close' : 'open'}</button>
            </h2>
            <div className='card-body'>
                <h3>creation time : {(new Date(article.date).toDateString())}</h3>
                {body}
            </div>
        </div>
    )
}