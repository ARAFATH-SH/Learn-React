import Batsman from './Batsman'
import Friends from './Friends'
import Users from './Users'
import Post from './Posts'
import { Suspense } from 'react'
import './App.css'

// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())

// const fetchfriends = async() => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     return res.json();
// }
const fetchpost = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
}

function App() {

  // const friendsPromise = fetchfriends();
  const postPromise = fetchpost();

  return (
    <>
      <h3>React Core Concepts</h3>
      <Batsman></Batsman>
      {/* <Suspense fallback={<h2>Loading Users...</h2>}>
        <Users fetchUsers = {fetchUsers}></Users>
      </Suspense>
      <Suspense fallback={<h2>Loading Friends...</h2>}>
        <Friends friendsPromise = {friendsPromise}></Friends>
      </Suspense> */}

      <Suspense fallback={<h2>Loading Posts...</h2>}>
        <Post postPromise = {postPromise}></Post>
      </Suspense>

    </>
  )
}

export default App
