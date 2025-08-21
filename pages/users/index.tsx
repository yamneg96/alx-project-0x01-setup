import React from 'react'
import Header from '@/components/layout/Header';
import { UserProps } from '@/interfaces';
import UserCard from '@/components/common/UserCard';

const Users : React.FC = ( { posts } ) => {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-3 gap-2 ">
        {
          posts?.map(({ username, name, email, id }: UserProps, key: number) => (
            <UserCard title={username} body={name} userId={email} id={id} key={key} />
          ))
        }
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}

export default Users;