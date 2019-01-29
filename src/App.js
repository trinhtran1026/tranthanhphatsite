import React, { Component } from 'react';
import data from './data.json';
class App extends Component {

	renderItem(item) {
		return(
			<div key={item.index}>
				<h3>{item.code}</h3>
				<img src={item.image_path} alt='product' />
				<p>{item.category}</p>
			</div>
		)
	}

  render() {
    return (
      <div className="App">
				{
					data.map(item => this.renderItem(item))
				}
      </div>
    );
  }
}

export default App;
