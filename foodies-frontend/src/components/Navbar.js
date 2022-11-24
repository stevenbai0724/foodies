import React from 'react'
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles((theme) => ({

  bar: {
    backgroundColor: "#202B47",
    height: "100px",
    width: "100%",
  },
  title: {
    paddingLeft: "20px",
    paddingTop: "20px",
    fontSize: "36pt",
    marginTop: 0,
    color: "#fcf2e1",

  }

}))

function Navbar() {
    const classes = useStyles();

  return (
    <div className = {classes.bar}>
        <h1 className = {classes.title}>UW FOODIES</h1>
    </div>
  )
}

export default Navbar