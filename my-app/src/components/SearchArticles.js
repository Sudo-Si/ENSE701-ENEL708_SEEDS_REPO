import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class SearchArticles extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
    //   isbn:'',
    //   author:'',
    //   description:'',
    //   published_date:'',
    //   publisher:''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {title: this.state.title};
    //searchArticles(data);

    axios
    .get('http://localhost:8082/api/books/'+data)
    .then(res => {
      // console.log("Print-showBookDetails-API-response: " + res.data);
      this.setState({
        book: res.data
      })
    })
    .catch(err => {
      console.log("Error from SearchArticals");
    })
  };

  render() {
    return (
      <div className="SearchArticles">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="CreateArticle" className="btn btn-outline-warning float-right">
                  Add New Article
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Software Engineering Evidence Decision Support</h1>
              <p className="lead text-center">
                  Article Search
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Article Title'
                    name='title'
                    className='form-control'
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                </div>
                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
              <table>
                <thead>
                  <tr>
                      <th>Author</th>
                      <th>Title</th>
                      <th>Journal</th>
                      <th>Publisher</th>
                      <th>Year</th>
                      <th>Eprint</th>
                      <th>Eprint Type</th>
                      <th>Eprint Class</th>
                      <th>Volume</th>
                      <th>Number</th>
                      <th>Page</th>
                      <th>Annote</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                      <td>Monte Falco</td>
                      <td>1658</td>
                      <td>Parco Foreste Casentinesi</td>
                  </tr>
                  <tr>
                      <td>Monte Falterona</td>
                      <td>1654</td>
                      <td>Parco Foreste Casentinesi</td>
                  </tr>
                </tbody>
              </table>
            </div>
            

          </div>
        </div>
         
      </div>
    );
  }
}

export default SearchArticles;