import React, { Component } from 'react'

class News extends Component {

    constructor()
    {
        super();

        this.state = {

            articles: [],
            searchResults: ""
        }
    }

    // this function gets called automatically ONCE

    componentDidMount = async () => {

        // lifecycle method
        // mounted = user can now see it
        // we put the api call here because we only wanna do it once 

        console.log("Component did mount.");

        let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0cf790498275413a9247f8b94b3843fd"

        let response  = await fetch(url)

        let results = await response.json();

        this.setState({
            articles: results.articles
        }, ()=>{
            console.log(this.state.articles)
        })

    }

    news = () => {

        let {articles, searchResults} = {...this.state}

        let articleList = articles.map((article, index) => {

            return <li key={index}>

                <h3>{article.title}</h3>
                <img src={article.urlToImage}/>
                <p>{article.description}</p>

            </li>
        })

        return articleList
    }

    handleChange = (e) => {
        this.setState({
            searchResults: e.target.value
        })
    }

    render()
    {   
        // let nums = [1, 2, 3, 4, 5, 6, 7];
        // let newArray = nums.filter(element => {
        //     return element > 5
        // })

        let {articles, searchResults} = {...this.state};

        let filteredList = articles.filter(article => {

            // filter out news articles based on what user is typing in input field
            return article.title.toLowerCase().includes(searchResults.toLowerCase());
        });

        let articleList = filteredList.map((article, index) => {

            return <li key={index}>

                <h3>{article.title}</h3>
                <img src={article.urlToImage}/>
                <p>{article.description}</p>

            </li>
        })

        return (
            <>
                <h1>News Articles</h1>

                <input type="text" onChange={this.handleChange}></input>

                <ul>
                    {articleList}
                </ul>
            </>
        )
    }
}

export default News
