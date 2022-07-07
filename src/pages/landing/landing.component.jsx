import React from 'react';

const Landing = ({ user }) => {

  console.log(user.token);

  return (
    <div>
      User Information:
      { JSON.stringify(user) }
    </div>
  )
}

export default Landing;