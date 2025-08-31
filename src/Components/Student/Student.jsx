import { faker } from "@faker-js/faker"
import React from "react";

class Student extends React.Component {
  render() {
  return (
    <div className='col-4 p-1'>     
      <div className='row border'>
        <div className='col-2'>
          <img 
         /*src={`https://ui-avatars.com/api/?name=${props.name}`} 
          src={props.headshot}*/
          src={faker.image.avatar()}
          alt={this.props.name} 
          className='w-100 rounded-circle py-2'
          />
        </div>
        <div className='col-8 py-4' >
          {this.props.name} <br/>
          Programing Experience: {this.props.experience} years 
        </div>
        <div className='col-2 py-4'>
          {this.props.children}
        </div>
         
      </div>
    </div>
  )
}}
export default Student;