export interface Link {
  title: string
  url: string
}

export interface Reward
{
  rewardName: string,
  imageUrl: string,
  rewardPointCost: number
}

export interface GetAllRewardsApiResponse
{
  allRewards: Reward[]
}
