import {
  Box,
  Main,
  Meter,
  Text,
} from 'grommet'

import React from 'react'

export const Splash: React.FC = () => {
  const [value, setValue] = React.useState(0)

  React.useEffect(() => {
    const speed = 25
    const increment = (prev: number) => (prev >= 100 ? 100 : (prev + 1))
    const timer = setInterval(() => setValue(increment), speed)
    return () => clearInterval(timer)
  }, [setValue])

  const completed = value === 100
  // Cannot use `t` in splash
  const label = React.useMemo(() => (completed ? 'Loading...' : ''), [completed])

  return (
    <Main pad="large" justify="center" height="100%">
      <Box width="100px" height="100px" alignSelf="center">
        <Meter
          size="large"
          thickness="xlarge"
          type="circle"
          values={[{ value, label }]}
        />
      </Box>
      <Text textAlign="center" margin="small" color="status-unknown">{label}</Text>
    </Main>
  )
}
