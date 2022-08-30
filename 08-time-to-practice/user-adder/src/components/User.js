import React from 'react'

const User = props => {
  console.log('мій пропс')
  console.log(props.name)
  return (<div>{props.name} ({props.age} років)</div>);
};

export default User;