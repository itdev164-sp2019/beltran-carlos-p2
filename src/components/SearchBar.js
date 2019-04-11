import React from 'react';

class SearchBar extends React.Component{
    
   state = {term: '' };
    
   onFormSubmit = (event) => {
       event.preventDefault();

       this.props.onSubmit(this.state.term);
   }
    
    render(){
        return (
            <div className="ui  container">
                <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <input type="text" style={{opacity: .75}}value={this.state.term} onChange={ e => this.setState({term: e.target.value})}></input>
                </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;