import axios from 'axios'
import { settings } from 'settings/settings'

type JSON_VALUE = string | object | number | null

interface GithubMembershipsOrgsResponse {
  url: string
  state: 'active' | string
  [key: string]: JSON_VALUE
  user: {
    login: string
    id: string
    [key: string]: JSON_VALUE
  }
  organization: {
    login: string
    id: string
    [key: string]: JSON_VALUE
  }
}

const orgIds = settings.githubOAuth.organizationIds.split(',')

export const VerifyMembership = async (accessToken: string): Promise<boolean> => {
  const response = await axios({
    url: 'https://api.github.com/user/memberships/orgs',
    headers: {
      Authorization: `token ${accessToken}`,
    },
  })

  const data = response.data as GithubMembershipsOrgsResponse[]

  const verified = data.
    filter(item => item.state === 'active').
    filter(item => orgIds.find(i => [
        item.organization.id,
        item.organization.login
      ].indexOf(i) !== -1)
    ).length > 0

  return verified
}
