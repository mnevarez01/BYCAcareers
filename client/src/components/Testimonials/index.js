import React, { Fragment } from 'react';

function Testimonials({ info }) {

  return (

    <div className='container'>
      {info.length > 0 ? <>
        {info.map(({ author, testimony }) => (

          <div className='row' key={author}>
            <div className='col-sm-6'>
              <div className="card">
                <div className="card-header">
                  {author}
                </div>
                <div className="card-body">
                  <blockquote className="blockquote mb-0">
                    <p>{testimony}</p>
                    <footer className="blockquote-footer">Thank you, <cite title="Source Title">{author}</cite></footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        ))}
      </> : <><h1>No results found.</h1><br /><h3>Login to add your own content.</h3></>}
    </div>
  )
}

export default Testimonials;
