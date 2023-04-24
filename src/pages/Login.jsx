import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setLogged } from '../redux/Slices/loginSlice'
import { useEffect } from 'react'

function Login() {
  const dispatch = useDispatch()
  const database = {
    username: 'login',
    password: 'login',
  }
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [pass, setPass] = useState('')

  const [error, setError] = useState(false)
  function handleChange(event) {
    const newValue = event.target.value
    setUsername(() => {
      return newValue
    })
  }
  function handleChangePass(event) {
    const newValue = event.target.value
    setPass(() => {
      return newValue
    })
  }
  function LoginCheck() {
    if (database.username === username && database.password === pass) {
      dispatch(setLogged(true))
      navigate('/admin')
    } else {
      setError(true)
    }
  }
  const loginRef = useRef()
  useEffect(() => {
    loginRef.current.focus()
  }, [])

  return (
    <div className="content">
      <div className="login-form">
        <form type="submit" onSubmit={(event) => event.preventDefault()}>
          <h1>Login</h1>
          <div className="contentLogin">
            <div className="input-field">
              <input
                ref={loginRef}
                onChange={handleChange}
                className="inputLogin"
                type="login"
                placeholder="Email"
                autoComplete="nope"
              />
            </div>
            <div className="input-field">
              <input
                onChange={handleChangePass}
                className="inputLogin"
                type="password"
                placeholder="Password"
                autoComplete="new-password"
              />
              {error && <span>Ошибка, попробуйте еще раз</span>}
            </div>
          </div>
          <div className="action">
            <button className="emailButton">Register</button>
            <button onClick={() => LoginCheck()} className="emailButton">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Login
