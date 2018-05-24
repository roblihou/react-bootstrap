import React from 'react';

// const SearchForm = () => (
//   <div className="searchForm">
//     <input type="text" />
//     <button>Search</button>
//   </div>
// );

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      searchText: event.target.value,
    });
    // console.log(this.state.searchText);
  }

  render() {
    return (
      <div className="searchForm">
        <input onChange={this.handleInputChange} type="text" value={this.state.searchText} />
        <button onClick={() => this.props.cityForecast(this.state.searchText)}>Search</button>
      </div>
    );
  }
}

export default SearchForm;
