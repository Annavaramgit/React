import { useState } from "react"


const About = () => {

  const [user, setUser] = useState(10)

  return (
    <div className="about-container">
      <div className="child1">Header</div>
      <div className="child2">nav</div>
      <div className="child3">body</div>
      <div className="child4">aside</div>
      <div className="child5">footer</div>
    </div>
  )
}

export default About
