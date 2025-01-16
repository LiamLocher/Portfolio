import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

function Card({ link, description, image, name }) {
  return (
    <>
      <div className="card glass w-96">
        <figure>
          <img src={image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            {/* Use the Link component to navigate to the passed route */}
            <Link to={`/${link.toLowerCase()}`}>
              <button className="btn btn-primary">View</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;