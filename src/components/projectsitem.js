import React from 'react'
import '../App.css'

const ProjectItem = (props) => {
    return (
        <div className='cardd d-flex justify-content-center my-5 col-xl-4' style={{ height: props.heightCard, boxShadow: 'white' }}>
            <div className="card" style={{ width: '20rem' }}>
                <img className="card-img-top" src={props.photo} alt="..." style={{ height: '15rem', width: '19.9rem' }} />
                <div className="card-body">
                    <h5 style={{ height: props.heightName, color: 'white' }} className="card-title d-flex justify-content-center">{props.name}</h5>
                    <div className='description d-flex justify-content-center'>
                        <p className="card-text" style={{ color: 'white' }}>{props.description}</p>
                    </div>
                    {props.url1 !== '' && <a href={props.url1} target='_blank' rel='noreferrer' className="btn btn-primary mx-2 align-self-end">View Code</a>}
                    <a href={props.url2} target='_blank' rel='noreferrer' className="btn btn-primary mx-2 align-self-end">View demo</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem