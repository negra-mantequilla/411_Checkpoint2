
import React, { useEffect, useState } from 'react'
import importData from "../small_biz_data.js"
import ListingTable from '../components/ListingTable.js'
import cookie from "cookie";

export default function Listing() {

  const [data, setData] = useState()
  useEffect( ()=>{
      setData(importData)
  }, [])

  if(!data) {
    return(
      <div>No Data</div>
    )  
  }
  return (
    <div>
      <ListingTable rows={data} />
    </div>
  )
}
