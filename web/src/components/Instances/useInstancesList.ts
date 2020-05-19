import { instancesListRequest } from 'src/lib/api/instancesListRequest'
import { useAsync } from 'react-async-hook'

export const useInstancesList = () => {
  return useAsync(instancesListRequest, [])
}
