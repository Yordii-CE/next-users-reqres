import Head from 'next/head'
import User from '../components/user'
const fetch = require('isomorphic-fetch')
const Index = ({ users }) => {
  return (
    <>
      <Head>
        <title>Users Reqres.in</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/flatly/bootstrap.min.css"
          integrity="sha384-qF/QmIAj5ZaYFAeQcrQ6bfVMAh4zZlrGwTPY7T/M+iTTLJqJBJjwwnsE5Y0mV7QK"
          crossorigin="anonymous"
        />
      </Head>
      <div className="container mt-4">
        <h2>Users Reqres.in</h2>
        <ul className="list-group">
          {users.map((el) => (
            <User data={el} />
          ))}
        </ul>
      </div>
    </>
  )
}

Index.getInitialProps = async (ctx) => {
  const res = await fetch('https://reqres.in/api/users'),
    json = await res.json()
  return {
    users: json.data,
  }
}
export default Index
