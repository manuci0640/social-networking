import React, { Component } from 'react'
import Moment from 'react-moment'

class ProfileCreds extends Component {
  render() {
    const { experience, education } = this.props

    const expItems = experience.map(exp => (
      <li class="list-group-item">
        <h4>{exp.company}</h4>
        <p>
          <Moment format="YYYY/MM/DD" >{exp.from}</Moment> -{' '}
          {exp.to === null ? ("Now") : (<Moment format="YYYY/MM/DD" >{exp.to}</Moment>)}
        </p>
        <p>
          <strong>Position: </strong>{exp.title}
        </p>
        <p>
          {exp.description === "" ? null : (
            <span>
              <strong>Description: </strong>{exp.description}
            </span>
          )}
        </p>
      </li>
    ))

    const eduItems = education.map(edu => (
      <li class="list-group-item">
        <h4>{edu.school}</h4>
        <p>
          <Moment format="YYYY/MM/DD" >{edu.from}</Moment> -{' '}
          {edu.to === null ? ("Now") : (<Moment format="YYYY/MM/DD" >{edu.to}</Moment>)}
        </p>
        <p>
          <strong>Degree: </strong>{edu.degree}
        </p>
        <p>
          <strong>Field Of Study: </strong>{edu.major}
        </p>
        <p>
          {edu.description === "" ? null : (
            <span>
              <strong>Description: </strong>{edu.description}
            </span>
          )}
        </p>
      </li >

    ))

    return (
      <div class="row">

        <div class="col-md-6">
          <h3 class="text-center text-info">Experience</h3>
          {expItems.length > 0 ? (
            <ul class="list-group">{expItems}</ul>) :
            <p className="text-center">No Experience</p>}
        </div>

        <div class="col-md-6">
          <h3 class="text-center text-info">Education</h3>
          {eduItems.length > 0 ? (
            <ul class="list-group">{eduItems}</ul>) :
            <p className="text-center">No Education</p>}
        </div>
      </div >
    )
  }
}

export default ProfileCreds
