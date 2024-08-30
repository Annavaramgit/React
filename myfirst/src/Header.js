import React from 'react'

//  const Header = (props) => {
//   return (

//         <h3>Name{props.name}</h3>
//         <h3>Name{props.age}</h3>
//     </header>
//   )
// }



class Header extends React.Component
{
  render()
  {
    return(
      <>
      <h3>Name{this.props.name}</h3>
      <h3>Age{this.props.age}</h3>
      </>
    )
  }
}

export default Header
