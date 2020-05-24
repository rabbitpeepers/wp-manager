import { Alert, AlertSeverity } from 'src/components/Alert/Alert'
import {
  Box,
  Button,
  Form,
  Grid,
  Text,
} from 'grommet'
import { ErrorMessage, useForm } from 'react-hook-form'

import { CreateInstanceDomain } from 'src/components/CreateInstance/CreateInstanceDomain'
import { CreateInstanceMetaInput } from 'src/components/CreateInstance/CreateInstanceMetaInput'
import { CreateInstanceName } from 'src/components/CreateInstance/CreateInstanceName'
import { InstanceFormData } from 'src/components/CreateInstance/InstanceFormDataType'
import React from 'react'
import { path } from 'src/router/path'
import { useAuthorizationErrorEffect } from 'src/lib/useAuthorizationErrorEffect'
import { useHandleHref } from 'src/components/common/useHandleHref'
import { useSubmit } from 'src/components/CreateInstance/useSubmit'
import { useSuccessRedirectEffect } from 'src/lib/useSuccessRedirectEffect'
import { useTranslation } from 'react-i18next'
import { strongPassword, email } from 'src/utils/regexp'
import { useMe } from 'src/context/hook/useMe'

export const CreateInstanceForm: React.FC = () => {
  const me = useMe()
  const cancelProps = useHandleHref(path.instances)

  const [firstName, lastName] = React.useMemo<string[]>(() => !me ? [] : me?.displayName.split(' '), [me])

  const { control, handleSubmit, errors } = useForm<InstanceFormData>({
    defaultValues: {
      name: '',
      domain: undefined,
      meta: {
        email: me?.email || '',
        username: me?.username || '',
        password: '',
        firstName,
        lastName,
        blogName: '',
      },
    }
  })
  const { t } = useTranslation()
  const {
    execute,
    loading,
    error,
    status,
  } = useSubmit()

  const onSubmit = React.useCallback((data: InstanceFormData) => {
    if (!data.domain) {
      return
    }
    execute({
      name: data.name,
      domainId: data.domain.id,
      meta: data.meta,
    })
  }, [execute])

  // Handle 401
  useAuthorizationErrorEffect(error)
  // Redirect to instances once saved
  useSuccessRedirectEffect(status, path.instances)

  const renderError = React.useCallback((name: string, label?: string) => (
    <ErrorMessage errors={errors} name={name}>
      {() => (
        <Text color="status-critical" size="small">
          {t(`createInstance.errors.${label || name}`)}
        </Text>
      )}
    </ErrorMessage>
  ), [t, errors])

  return (
    <Box width="large" background="light-1" pad="large">
      {error ? (
        <Alert severity={AlertSeverity.ERROR}>
          {error.message}
        </Alert>
      ) : null}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Grid columns={['1fr', '1fr']} gap="small">
          <Box>
            <CreateInstanceName disabled={loading} control={control} />
            {renderError('name')}
          </Box>
          <Box>
            <CreateInstanceDomain disabled={loading} control={control} />
            {renderError('domain')}
          </Box>
        </Grid>
        <Box
          margin={{ top: 'small' }}
          pad={{ top: 'small' }}
          border={{ color: 'light-2', size: 'small', side: 'top' }}
        >
          <CreateInstanceMetaInput
            disabled={loading}
            control={control}
            name="meta.blogName"
            label="blogName"
            renderError={renderError}
          />
          <CreateInstanceMetaInput
            disabled={loading}
            control={control}
            name="meta.email"
            label="email"
            validatePattern={email}
            renderError={renderError}
          />
          <Grid columns={['1fr', '1fr']} gap="small">
            <CreateInstanceMetaInput
              disabled={loading}
              control={control}
              name="meta.username"
              label="username"
              renderError={renderError}
            />
            <CreateInstanceMetaInput
              disabled={loading}
              control={control}
              name="meta.password"
              label="wppassword"
              type="password"
              validatePattern={strongPassword}
              renderError={renderError}
            />
            <CreateInstanceMetaInput
              disabled={loading}
              control={control}
              name="meta.firstName"
              label="firstName"
              renderError={renderError}
            />
            <CreateInstanceMetaInput
              disabled={loading}
              control={control}
              name="meta.lastName"
              label="lastName"
              renderError={renderError}
            />
          </Grid>
        </Box>

        <Box margin={{ top: 'medium' }} flex direction="row">
          <Button
            label={t('app.cancel')}
            alignSelf="end"
            margin={{ right: 'medium' }}
            onClick={cancelProps.onClick}
            disabled={loading}
            href={cancelProps.href}
          />
          <Button
            type="submit"
            label={t('createInstance.submit')}
            alignSelf="start"
            disabled={loading}
            primary
          />
          {loading ? (
            <Text alignSelf="center" margin={{ left: 'small' }} color="status-unknown">
              {t('app.loading')}
            </Text>
          ) : null}
        </Box>
      </Form>
    </Box>
  )
}
