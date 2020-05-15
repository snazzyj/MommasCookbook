import React, { Component, Fragment } from 'react';
import CkBkContext from '../ckbkcontext';

class SearchBox extends Component {

    static contextType = CkBkContext;

    state = {
        term: '',
        error: '',
    }

    //update state value with user inputted term
    handleSearchInput = (e) => {
        this.setState({
            term: e.currentTarget.value
        })
    }

    //generate a search url with the queried term
    //if no results found, display an error saying so
    //else set context to fill the search results
    //push to the next page
    handleSearch = () => {
        const queryItem = this.state.term;
        const searchUrl = 'http://localhost:8000/api/search?query=' + queryItem
        fetch(searchUrl, {
            method: 'GET'
        })
        .then(res => {
            if(res.ok){
                return res.json()
            } else {
                this.setState({
                    error: 'No results found'
                })
            }
        })
        .then(data => {
            this.context.fillRecipeList(data)
            this.props.history.push('/searchresults')
        })
    }

    render() {
        const {error} = this.state;
        return (
            <Fragment>
                <label>
                    <input onChange={this.handleSearchInput} />
                </label>
                <button onClick={this.handleSearch}>Search</button>
                <p>{error}</p>
            </Fragment>
        )
    }

}

export default SearchBox;
