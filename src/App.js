import React, { useEffect, useState } from 'react'
import Page from './components/Page'

const URL = 'https://62934f6e089f87a57abdea28.mockapi.io/products'

const pageLimit = 5
const App = () => {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const [endOfFeedReached, setEndOfFeedReached] = useState(false)
  const getProducts = async () => {
    const finalUrl = `${URL}?page=${page}&limit=${pageLimit}`
    try {
      const res = await fetch(finalUrl)
      const data = await res.json()
      setEndOfFeedReached(products.length < pageLimit) //if product is less than pageLimit then we  have reached end  // if(products.length < pagelimit) ///
      if (page === 1) {
        setProducts(data)
      }
      else {
        setProducts(prevProducts => [...prevProducts, ...data])
      }
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    getProducts()
  }, [page])

  const fetchMoreData = () => {
    setPage((prevPage) => prevPage + 1)
  }
  return (
    <Page
      products={products}
      fetchMoreData={fetchMoreData}
      endOfFeedReached={endOfFeedReached}
    />
  )
}

export default App
