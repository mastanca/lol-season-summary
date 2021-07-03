export async function getSummonerData() {
  const res = await fetch(`https://americas.api.riotgames.com/riot/account/v1/accounts/by-puuid/${process.env.LOL_PUUID}`, 
  {
    headers: {
        "X-Riot-Token": process.env.RIOT_API_KEY
    }
  })
  return res.json();
}
