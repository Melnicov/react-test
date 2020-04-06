import React, {PureComponent} from "react";
import ArticleList from "./ArticleList";
import articles from '../fixtures'
import 'bootstrap/dist/css/bootstrap.css'
import {connect} from 'react-redux'

class App extends PureComponent {
    state = {
        isReverted: false,
        openArticleId: null,
        isLoadedArticleId: false,
    }
    articles = articles.slice()

    componentDidMount() {
        console.log('---', 'App class is fetching')
        fetch('http://localhost:3001/getId')
            .then(res => res.json())
            .then(
                (result) => {
                    console.log('---', 'App class is fetched with result id : ' + result.openArticleId)
                    this.setState({
                        openArticleId: result.openArticleId,
                        isLoadedArticleId: true,
                    })
                },
                (error) => {
                    console.log('error' + error)
                })
    }

    sendOpenArticleIdToServer = id => {
        console.log('---', 'App class is posting')
        fetch('http://localhost:3001/postId', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({id: id})
        })
            .then(res => console.log(res.json()))
    }

    render() {
        if (this.state.isLoadedArticleId) {
            console.log('---', 'App class is rendering after loaded data')
            console.log('---', 'App class openArticle id : ', this.state.openArticleId)
            return (
                <div className='container'>
                    <div className='jumbotron'>
                        <h1 className='display-3'>App name</h1>
                        <h2>Opened article title is : {this.props.openedArticle}</h2>
                        <h2>Opened article id is : {this.state.openArticleId}</h2>
                        <button onClick={this.handleClick}>Revert</button>
                    </div>
                    <ArticleList openArticleId={this.state.openArticleId}
                                 articles={this.state.isReverted ? this.articles.slice().reverse() : this.articles}
                                 handleOpenArticleId={this.handleOpenArticleId}/>
                </div>
            )
        } else {
            console.log('---', 'App class is rendering before loaded data')
            return (
                <div className='container'>
                    Loading data...
                </div>
            )
        }
    }

    handleClick = () => {
        this.setState({
            isReverted: !this.state.isReverted
        })
    }

    handleOpenArticleId = (id, title) => {
        this.setState({
            openArticleId: this.state.openArticleId === id ? null : id
        })

        this.sendOpenArticleIdToServer(id)

        this.props.dispatch({
            type: 'open_article',
            openedArticle: title
        })
    }
}

const mapStateToProps = state => {
    return {openedArticle: state.openedArticle}
}
const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
