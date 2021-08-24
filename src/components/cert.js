import React from 'react'

export default function Certification(props) {
    return (
        
        <div className="card mb-1" >
            <div className="row g-0">
                <div className="col-md-2">
                    <img src={props.pic} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title" style={{color:"green",fontWeight:700}}>{props.title}</h5>
                            <p className="card-text" style={{color:"brown",fontWeight:600}}>{props.description}</p>
                       </div>
                    </div>
                </div>
            </div>
    )
}
