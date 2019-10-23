import { makeStyles } from "@material-ui/core/styles";
import pink from '@material-ui/core/colors/pink';
import LoginBackgroundImage from "../../assets/login-background.jpg";

const styles = makeStyles(theme => ({

 root: {
    height: "100vh",
    width:" 200%",
    alignItems: "center",
    flexDirection: "row",
    backgroundPosition: "center",    
    backgroundColor: "white",
  },
  image: {
   
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
   
  },
  avatar: {
    
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
   
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    
    margin: theme.spacing(3, 0, 2)
  }
}));

export default styles;
