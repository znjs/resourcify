"use client"
import Button from "@/components/Button/Button"
import InputField from "@/components/Input/InputField"
import { useState } from "react"
import "./MainPage.css" // Import the CSS file

const Home = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    // Implement login logic here
    console.log("Login initiated")
  }

  const handleGoogleLogin = () => {
    // Here, integrate with Google Login
    console.log("Google login initiated")
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="mb-5 text-3xl font-bold text-rose-500">Welcome to Resorcify</h1>

      <div className="inputFieldWrapper">
        <InputField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div className="inputFieldWrapper">
        <InputField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>

      <div className="loginButtonWrapper">
        <Button onClick={handleLogin}>Login</Button>
      </div>

      <div className="loginButtonWrapper">
        <Button onClick={handleGoogleLogin}>Login with Google</Button>
      </div>
    </div>
  )
}

export default Home
