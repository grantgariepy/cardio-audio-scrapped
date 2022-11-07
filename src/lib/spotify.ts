const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const authorization_code = Buffer.from(`${client_id}:${client_secret}`).toString('base64')

const getAccessToken = async (refresh_token: string) => {
  const response = await fetch(`https://accounts.spotify.com/api/token`, {
    method: 'POST',
    headers: {
      Authorization: authorization_code,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token
    })
  })

  return response.json()
}

export const getTopTracks = async (refresh_token: string) => {
  const { access_token } = await getAccessToken(refresh_token)
  return fetch('https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=5&offset=0https://api.spotify.com/v1/me/playlists', {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}