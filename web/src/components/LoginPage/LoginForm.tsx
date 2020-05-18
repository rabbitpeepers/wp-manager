import {
  Box,
  Button,
  Form,
  FormField,
  TextInput,
  ThemeContext,
} from 'grommet'

import { LoginFormStatusMessage } from 'src/components/LoginPage/LoginFormStatusMessage'
import React from 'react'
import { Secure } from 'grommet-icons'
import { useTranslation } from 'react-i18next'

type FormData = {
  username: string
  password: string
}

type Props = {
  error?: string
}

export const LoginForm: React.FC<Props> = ({ error }) => {
  const { t } = useTranslation()
  const [value, setValue] = React.useState<FormData>({
    password: '',
    username: '',
  })

  const handleSubmit = React.useCallback(() => {}, [])
  const handleChange = React.useCallback((nextValue) => setValue(nextValue), [setValue])

  return (
    <ThemeContext.Extend value={{ formField: { border: { color: 'light-6' } } }}>
      <Box background="light-2" elevation="small">
        <Box align="center" background="light-3" pad="small">
          <Secure size="large" />
        </Box>
        <Box pad="medium" align="stretch">
          <LoginFormStatusMessage message={error} />
          <Form onSubmit={handleSubmit} onChange={handleChange} value={value}>
            <FormField required label={t('login.username')} margin={{ vertical: 'medium' }}>
              <TextInput required name="username" />
            </FormField>
            <FormField
              label={t('login.password')}
              margin={{ vertical: 'medium' }}
              required
            >
              <TextInput required name="password" type="password" />
            </FormField>
            <Box align="center">
              <Button type="submit" primary label={t('login.submit')} />
            </Box>
          </Form>
        </Box>
      </Box>
    </ThemeContext.Extend>
  )
}
