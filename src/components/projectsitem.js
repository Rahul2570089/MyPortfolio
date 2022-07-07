import React from 'react'
import '../App.css'

const ProjectItem = (props) => {
    return (
        <div className='d-flex justify-content-center mx-5 my-4 col-md-3' style={{height: '32rem'}}>
            <div className="card" style={{ width: '20rem' }}>
                <img className="card-img-top" src={props.photo} alt="..." style={{ height: '15rem', width: '19rem' }} />
                <div className="card-body">
                    <h5 style={{height: '2rem', color: 'black'}} className="card-title d-flex justify-content-center">{props.name}</h5>
                    <div className='description d-flex justify-content-center'>
                        <p className="card-text" style={{color: 'black'}}>{props.description}</p>
                    </div>
                    <a href="/" className="btn btn-primary mx-2 align-self-end">View Code</a>
                    <a href="/" className="btn btn-primary mx-2 align-self-end">View demo</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem