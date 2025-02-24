import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const { userId } = useParams();
    const [userDetails, setUserDetails] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/users/${userId}`)
            .then(response => {
                if (!response.ok) throw new Error("User not found");
                return response.json();
            })
            .then(data => setUserDetails(data))
            .catch(error => setError("Failed to load user details."));
    }, [userId]);

    return (
        <div className="container mt-3">
            {error ? (
                <div className="text-danger text-center">{error}</div>
            ) : userDetails ? (
                <div className='row mt-3'>
                    <h2 className='text-center mb-5'>User Details</h2>
                    <div className="col-md-4 border border-1 border-black rounded-1 p-4">
                        <img src={userDetails.image} alt="User" className="img-fluid rounded shadow"
                            style={{ maxHeight: '200px', objectFit: 'cover' }} />
                    </div>
                    <div className="col-md-6 border border-1 border-black rounded-1 p-4 pt-5">
                        <h5 className="card-title"><strong>Full Name:</strong> {userDetails.firstName} {userDetails.lastName}</h5>
                        <h5 className="card-title"><strong>Age:</strong> {userDetails.age}</h5>
                        <h5 className="card-title"><strong>Gender:</strong> {userDetails.gender}</h5>
                        <h5 className="card-title"><strong>Email:</strong> {userDetails.email}</h5>
                        <h5 className="card-title"><strong>Phone:</strong> {userDetails.phone}</h5>
                        <h5 className="card-title"><strong>Blood Group:</strong> {userDetails.bloodGroup}</h5>
                    </div>
                </div>
            ) : (
                <h2 className='text-muted text-center'>Loading user details...</h2>
            )}
        </div>
    );
};

export default UserDetails;
