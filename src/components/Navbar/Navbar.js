import React, { useState, useEffect } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import useStyles from './styles'
import { useDispatch } from 'react-redux'
import decode from 'jwt-decode'


import instaverse from '../../images/Instaverse.png'

export const Navbar = () => {
   const classes = useStyles()
   const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
   const dispatch = useDispatch()
   const history = useHistory()
   const location = useLocation()

   const logout = () => {
      dispatch({ type: 'LOGOUT' })

      history.push('/auth')

      setUser(null)
   }

   useEffect(() => {
      const token = user?.token

      if (token) {
         const decodedToken = decode(token)

         if (decodedToken.exp * 1000 < new Date().getTime()) logout()
      }

      setUser(JSON.parse(localStorage.getItem('profile')))
   }, [location, user?.token])

   return (
      <div className="" >
         <div className={classes.brandContainer}>
            <p className={classes.heading} component={Link} to="/" >Instaverse</p>
            <img className={classes.image} src={instaverse} alt="instaverse" height="60" />
         </div>
         <div className="">
            {user ? (
               <div className={classes.profile}>
                  <h1 className="" alt={user.result.name}>{user.result.name.charAt(0)}</h1>
                  <p className={classes.userName} variant="h6">{user.result.name}</p>
                  <button className="" onClick={logout}>Logout</button>
               </div>
            ) : (
               <button component={Link} to="/auth" >Sign In</button>
            )
            }
         </div>
      </div>
   )
}
