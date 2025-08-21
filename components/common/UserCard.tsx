import { UserProps } from '@/interfaces'
import React from 'react'

const UserCard : React.FC<UserProps> = ( { id, name, username, email, address, phone, website, company } ) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-blacj">{username}</h2>
      </div>
      <p className="text-black">{name}</p>
      <div className="mt-4 flex items-center justify-between text-sm text-white">
        <span>User Email: {email}</span>
        <span>Post ID: {id}</span>
      </div>
    </div>
  )
}

export default UserCard