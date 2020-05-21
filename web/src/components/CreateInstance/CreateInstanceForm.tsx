import { Alert, AlertSeverity } from 'src/components/Alert/Alert'
import {
  Box,
  Button,
  Form,
  Text,
} from 'grommet'
import { ErrorMessage, useForm } from 'react-hook-form'

import { CreateInstanceDomain } from 'src/components/CreateInstance/CreateInstanceDomain'
import { CreateInstanceName } from 'src/components/CreateInstance/CreateInstanceName'
import { InstanceFormData } from 'src/components/CreateInstance/InstanceFormDataType'
import React from 'react'
import { path } from 'src/router/path'
import { useAuthorizationErrorEffect } from 'src/lib/useAuthorizationErrorEffect'
import { useHandleHref } from 'src/components/common/useHandleHref'
import { useSubmit } from 'src/components/CreateInstance/useSubmit'
import { useSuccessRedirectEffect } from 'src/lib/useSuccessRedirectEffect'
import { useTranslation } from 'react-i18next'

export const CreateInstanceForm: React.FC = () => {
  const cancelProps = useHandleHref(path.instances)
  const { control, handleSubmit, errors } = useForm<InstanceFormData>()
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
    })
  }, [execute])

  // Handle 401
  useAuthorizationErrorEffect(error)
  // Redirect to instances once saved
  useSuccessRedirectEffect(status, path.instances)

  return (
    <Box width="large" background="light-1" pad="large">
      {error ? (
        <Alert severity={AlertSeverity.ERROR}>
          {error.message}
        </Alert>
      ) : null}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <CreateInstanceName disabled={loading} control={control} />
        <ErrorMessage errors={errors} name="name">
          {() => (
            <Text color="status-critical" size="small">
              {t('createInstance.errors.name')}
            </Text>
          )}
        </ErrorMessage>
        <CreateInstanceDomain disabled={loading} control={control} />
        <ErrorMessage errors={errors} name="domain">
          {() => (
            <Text color="status-critical" size="small">
              {t('createInstance.errors.domain')}
            </Text>
          )}
        </ErrorMessage>
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
