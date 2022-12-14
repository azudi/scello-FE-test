import React from 'react'
import AllUsers from '../all-user/allUsers'

interface Props {
  refresh: any
}
const  PaidSection: React.FC<Props> = (props: Props)=> {
    const { refresh } = props

    return (
      <>
      <AllUsers refresh={refresh} />
      </> 
    )
}

export default PaidSection
