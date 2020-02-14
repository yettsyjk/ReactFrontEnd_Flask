import React, {Component} from 'react'

class SearchBar extends Component {
    state = {
        query: '',
    }
    //handleInputChange function setState this.search.value
    handleInputChange = () => {
        this.setState({
            query: this.search.value
        })
    // getInfo = () => {
    //     this.setState({
    //         results: results
    //     })
    // }
    }
    render() {
        return (
            <form>
                <input
                placeholder="Search for..."
                ref={input => this.search = input}
                onChange={this.handleInputChange}
                />
                <p>{this.state.query}</p>
            </form>
        )
    }
}
export default SearchBar