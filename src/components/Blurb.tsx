import React from 'react'

const Blurb = (props) => {
  switch (props.rank) {
    case 0:
      return <div className="blurb1">Your #1 song is:</div>
    case 1:
      return <div className="blurb1">Next up, your #2 is:</div>
    case 2:
      return <div className="blurb1">#3 is:</div>
    case 3:
      return <div className="blurb1">For your #4 you've got:</div>
    case 4:
      return <div className="blurb1">Last but not least, your #5 is:</div>
    default:
      return <div className="blurb1">This song doesn't have a rank :)</div>
  }
}

export default Blurb
