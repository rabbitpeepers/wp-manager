import axios from 'axios'

type GithubEmailsResponse = {
  email: string
  primary: boolean
  verified: boolean
}[]


export const fetchGithubEmail = async (accessToken: string): Promise<GithubEmailsResponse> => {
  const response = await axios({
    url: 'https://api.github.com/user/emails',
    headers: {
      Authorization: `token ${accessToken}`,
    },
  })

  if (response.status !== 200) {
    throw new Error(`Cannot fetch github emails ${response.data}`)
  }

  return response.data as GithubEmailsResponse
}
