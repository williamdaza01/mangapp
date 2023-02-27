import React from 'react'

export const Profile = ({ photo, name, email, phone }) => {
  return (
    <div>
    <img src={photo} alt="Profile" />
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  )
}
