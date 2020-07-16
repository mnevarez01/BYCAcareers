import React from 'react';

function Testimonials({ author, testimony }) {

  return (
    <div className='row'>
      <div className='col-sm-6'>

        <div className="card">
          <div className="card-header">
            Quote
             </div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials;
