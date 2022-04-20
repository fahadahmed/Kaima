import React from 'react'
import styled from '@emotion/styled'
import { AppContainer, InputField, PageHeader } from '../../components'

const PageSubTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 40px;
  margin: 0;
`
function Register() {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    console.log(e)
  }
  return (
    <AppContainer>
      <div>
        <PageHeader>Ka&apos;ima</PageHeader>
        <PageSubTitle>Register New User</PageSubTitle>
        <form onSubmit={handleSubmit}>
          <InputField type="text" name="name" placeholder="Your name" />
          <InputField type="text" name="email" placeholder="Your email" />
          <InputField
            type="password"
            name="password"
            placeholder="Your password"
          />
          <InputField
            type="password"
            name="retype-password"
            placeholder="Re-type your password"
          />
          <button type="submit">Create new user</button>
        </form>
      </div>
    </AppContainer>
  )
}

export default Register
