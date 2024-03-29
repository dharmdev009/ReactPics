import React from 'react';

class SearchBar extends React.Component {
    state = { term: "" };
    onFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.term);
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={event => this.onFormSubmit(event)} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.term} onChange={event => this.setState({ term: event.target.value })} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;