import { baseURL } from './matches'

export async function getSummonerData() {
  const res = await fetch(
    `${baseURL}/riot/account/v1/accounts/by-puuid/${process.env.LOL_PUUID}`,
    {
      headers: {
        'X-Riot-Token': process.env.RIOT_API_KEY,
      },
    }
  )
  return res.json()
}
