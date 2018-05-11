import React, {Component} from 'react';

class ProductRow extends Component {
  render(){
    const product = this.props.product;
    return (
      <tr>
        <td>{product.name}</td>
        <td>{product.alias}</td>
        <td>{product.age}</td>
      </tr>
    )
  }
}

class ProductTable extends Component {
  render() {

    const rows = [];

    this.props.products.forEach((product) => {
      rows.push(
        <ProductRow
          product={product}
          key={product.name}
        />
      );
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Alias</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class Sort extends Component{
  sort(field){
    this.props.sortStateBy(field, this.props.products, this.props.direction);
  }
  render(){
    return(
      <div>
        <h2>Sort by</h2>
        <button onClick={this.sort.bind(this, 'name')}>Name</button>
        <button onClick={this.sort.bind(this, 'alias')}>Alias</button>
        <button onClick={this.sort.bind(this, 'age')}>Age</button>
      </div>
    )
  }
}

class Atelier extends Component{

  state = {
    'products':this.props.products,
    'direction':1
  };
  sortStateBy = (field, products, direction) => {
    products.sort( (a, b) => { if (a[field] > b[field]) { return -direction; } if (a[field] < b[field]) { return direction; } return 0; })
    this.setState({'products':products, 'direction': -direction});
  }

  render(){
    return (
      <div>
        <Sort direction={this.state.direction} products={this.props.products} sortStateBy={this.sortStateBy}/>
        <ProductTable products={this.props.products}/>
      </div>
    )
  }

}
export default Atelier;
