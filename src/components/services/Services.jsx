import React from 'react'
import '../../styles/services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services_container'>
        <article className='service'>
          <div className='service_head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Web Usability</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>User experience</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Tracking information</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Search for resources</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className='service'>
          <div className='service_head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Create and test applications for web sites</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Troubleshoot website problems</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Maintain and update the website</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Monitor website traffic</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Website prototyping</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Submit design specifications</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Working with web designers</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className='service'>
          <div className='service_head'>
            <h3>Manage social networks</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Creation of a recreational channel</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Creation of educational channels</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Manage python discord server</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Search for resources</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Good writing skills</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services