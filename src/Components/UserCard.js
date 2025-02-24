import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {
    return (
        <div className="card shadow-sm">
            <img src={user.image} alt="User" className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
            <div className="card-body text-center">
                <h5 className="card-title">{user.firstName} {user.lastName}</h5>
                <p className="text-muted">{user.age} years old</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <Link to={`/user/${user.id}`} className="btn btn-primary btn-sm w-100">
                    Show Details →
                </Link>
            </div>
        </div>
    );
};

export default UserCard;
