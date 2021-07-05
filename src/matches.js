export async function getMatches(limit = 0, offset = 20) {
  const res = await fetch(
    `${baseURL}/lol/match/v5/matches/by-puuid/${process.env.LOL_PUUID}/ids?type=ranked&start=${limit}&count=${offset}`,
    {
      headers: {
        'X-Riot-Token': process.env.RIOT_API_KEY,
      },
    }
  )
  return res.json()
}

export const baseURL = 'https://americas.api.riotgames.com'
