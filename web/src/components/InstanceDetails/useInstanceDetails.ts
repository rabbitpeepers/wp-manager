import { instanceDetailsRequest } from 'src/lib/api/instanceDetailsRequest'
import { useAsync } from 'react-async-hook'
import { useParams } from '@reach/router'

export const useInstanceDetails = () => {
  const { id } = useParams()
  return useAsync(() => instanceDetailsRequest(id), [id])
}
