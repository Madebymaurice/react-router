import React, {Component} from 'react';

class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {texte: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({value : e.target.value});
    let lowRegex = new RegExp(/^[a-z]{1,6}$/g);
    let mediumRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{6,}$/g);
    let hightRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,}$/g);
    if (e.target.value.match(hightRegex)){
      this.setState({
        texte : 'Mot de passe fort'
      });
    } else if (e.target.value.match(mediumRegex)){
      this.setState({
        texte : 'Mot de passe moyen'
      });
    } else if (e.target.value.match(lowRegex)) {
      this.setState({
        texte : 'Mot de passe faible'
      });
    }
  }

  handleSubmit(e) {
    if (this.state.texte === 'Mot de passe faible') {
      alert('Votre mot de passe est trop faible');
      e.preventDefault();
    }

  }

  render() {
    return (
      <div>
        <p>{this.state.texte}</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Mot de passe
            <input type="password" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Password;
