import React, {useEffect} from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import axios from 'axios'

const styles = makeStyles({})

export const Rewards = () => {
  const classes = styles()

    useEffect(() => {
        const getRewards = async () => {
            const data = await axios.get(`${process.env.REACT_APP_BASE_ROOT_URL}/products`)
            console.log(data.data)
        }
        getRewards()
    }, [])



  return (
    <>
      <p>Hi</p>
    </>
  )
}

export default Rewards
