import React, { Component } from 'react'
import Select from 'react-select'
import axios from 'axios'

export default class TestList extends Component {

  constructor(props){
    super(props)
    this.state = {
      selectOptions : [],
      companyId: "",
      companyName: ''
    }
  }

 async getOptions(){
    const res = await axios.get('http://athenabe1-env.eba-sqdwnu7u.us-east-2.elasticbeanstalk.com/api/viewCompanies')
    const data = res.data

    const options = data.map(d => ({
      "value" : d.companyId,
      "label" : d.companyName

    }))

    this.setState({selectOptions: options})

  }

  handleChange(e){
   this.setState({companyId:e.value, companyName:e.label})
  }

  componentDidMount(){
      this.getOptions()
  }
    

  render() {
    console.log(this.state.selectOptions)
    return (
      <div>
        <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)} />
    <p>You have selected <strong>{this.state.companyName}</strong> whose id is <strong>{this.state.companyId}</strong></p>
      </div>
    )
  }
}