import logo from './logo.svg';
import {makeStyles} from '@mui/styles'
import Navbar from './components/Navbar';
import SearchBackground from './assets/search_background.svg'
import {useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles((theme) => ({

  App: {
    backgroundColor: "#fcf2e1",
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Search: {
    width: "100%",
    height: "350px",
    backgroundImage: `url(${SearchBackground})`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  searchbox: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    width: "70%",   
    height: "45px",
    padding: "10px",
    borderRadius: 10,
    backgroundColor: "#AFFF00"
  },
  searchbar: {
    borderWidth: "0px",
    width: "80%",
    height: "100px",
    border: "none",
    background: "transparent",
    color: 'black',
    fontSize: 20,
    display: "flex",
    flexDirection: "row",

    '&:focus' : {
        outline: "none",
    }
  
    
  },
  featurebox: {
    width: "95%",
    minHeight: "400px",
    backgroundColor: "#202B47",
    borderRadius: 15,
  }
}))


function App() {
  const classes = useStyles();
  const [val, setVal] = useState("");
  return (
    <div className= {classes.App}>
      <Navbar></Navbar>
      <div className = {classes.Search}> 
      
      <div className = {classes.searchbox}>
      <SearchIcon></SearchIcon>
      <input
          type = "text"
          className = {classes.searchbar}
          placeholder = "Search for a study/food place ..."
          onChange = {e => setVal(e.target.value)}
          value = {val}
          

      >
            </input>
      </div>
      </div>

      <br></br>
      <br></br>

      <div className={classes.featurebox}>

      </div>
      <br></br>
      <br></br>
      <div className={classes.featurebox}>

      </div>
      <br></br>
      <br></br>

    </div>
  );
}

export default App;
