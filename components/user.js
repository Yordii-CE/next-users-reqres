import Router from 'next/router'

const User = ({ data }) => {
  return (
    <li
      className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
      onClick={() => Router.push('/users/[id]', `/users/${data.id}`)}
    >
      <div>
        <h4>
          {data.first_name} {data.last_name}
        </h4>
        <p>Email: {data.email}</p>
      </div>
      <img
        src={data.avatar}
        alt={data.first_name}
        style={{ 'border-radius': '50%' }}
      />
    </li>
  )
}

export default User
