import axios from 'axios'
import { settings } from 'settings/settings'

interface GithubMembershipsOrgsResponse {
  url: string
  state: 'active' | string
  user: {
    login: string
    id: string
  }
  organization: {
    login: string
    id: string
  }
}

export const VerifyMembership = async (accessToken: string): Promise<boolean> => {
  console.log('Verifying if user is member of', settings.githubOAuth.organizationId)

  const response = await axios({
    url: 'https://api.github.com/user/memberships/orgs',
    headers: {
      Authorization: `token ${accessToken}`
    }
  })

  const data = response.data as GithubMembershipsOrgsResponse[]

  return data.
    filter(item => item.state === 'active').
    filter(item => [
        item.organization.id,
        item.organization.login
      ].indexOf(settings.githubOAuth.organizationId) !== -1
    ).length > 0
}
