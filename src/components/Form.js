

import React, { Component } from 'react'


 class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            priority:"high",
            errors: "",
            tasks: this.props.tasks,
            
    };
    
        this.handleChange = this.handleChange.bind(this);
        this.handlepriority = this.handlepriority.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.validate = this.validate.bind(this);
      }
    
      handleChange(event) {
          
        this.setState({value: event.target.value});
      }
      
      handlepriority(event) {
          console.log(event.target.value);
          this.setState({priority: event.target.value});
         
      }
    
      handleSubmit(event) {
       event.preventDefault();
       this.props.addTask(this.state.value,this.state.priority);
       this.setState({value: "",priority:"high" });
          
      }

  render(props) { 
    
      
    return (
        <form onSubmit={this.handleSubmit}> 

        <div className='form-group'>
    
        <label>Todo*</label>
        <br/>
        
        <input
          type="text"
          className='input'
          placeholder='add task'
          value={this.state.value} onChange={this.handleChange}
        />
       
        <br/>
        
        
        
        <label>Priority </label>
        <br/>
        
        <select className='select'
         value={this.state.priority} onChange={this.handlepriority}>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
  
        </select>

        </div>
        
        <div>
        <button type="submit" className='add-button'  disabled={!this.state.value} >
          Add Task
        </button>
        </div>
      </form>
    )
  }
}

export default Form

// function Form(props) {
