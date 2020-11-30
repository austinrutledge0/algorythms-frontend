export interface Link {
  title: string
  url: string
}

export interface Reward
{
  pointcost: number
  rewardname: string,
  rewardnumber: string,
  rewardimagename?:string,
  rewarddescription: string
}


export interface GetAllRewardsApiResponse
{
  allRewards: Reward[]
}
