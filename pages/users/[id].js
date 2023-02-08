import User from '../../components/user'
import Head from 'next/head'
import Link from 'next/link'

const Profile = ({ user }) => {
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
      <div className="container">
        <Link href={'/'}>Volver</Link>
        <div className="w-50 m-auto mt-5">
          <User data={user} />
        </div>
      </div>
    </>
  )
}

Profile.getInitialProps = async (ctx) => {
  let id = ctx.query.id
  const res = await fetch(`https://reqres.in/api/users/${id}`),
    json = await res.json()
  return {
    user: json.data,
  }
}

export default Profile
