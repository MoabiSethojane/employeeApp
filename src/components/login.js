import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
function Login(){
    let history = useHistory();
    const login =(()=>{
        history.push('/home')
    })
    return(
        <div  className="container">
            <h3>Login</h3>
<input type="email" placeholder="Enter your email" />
<input type="password" placeholder="Enter your password" />
<button className="btn" onClick={login}>Login</button>
<span>Dont have  an account</span><span><Link to="/sign-up">creat account here</Link></span>
        </div>
    )
}
export default Login;