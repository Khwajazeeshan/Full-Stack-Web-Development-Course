import { useState } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (delay) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, delay * 1000)
    })
  }

  const onSubmit = async (data) => {
    // await delay(2)
    let r = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    let res = await r.text()
    console.log(data, res)
  }

  return (
    <>
      {isSubmitting && <div>Submitting...</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          < input  {...register("username", { required: { value: true, message: "This field is required" }, minLength: { value: 3, message: "Min length is 3" }, maxLength: { value: 8, message: "Max Length is 8" } })} type="text" placeholder="Enter your name" />
          {errors.username && <div>{errors.username.message}</div>}
          <input  {...register("password", { minLength: { value: 8, message: "Min length is 8" }, })} type="password" placeholder='enter password' />
          {errors.password && <div>{errors.password.message}</div>}
          <input disabled={isSubmitting} type="submit" value="submit" />
        </form>
      </div>
    </>
  )
}

export default App
