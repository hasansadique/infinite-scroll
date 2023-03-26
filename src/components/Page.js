import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

const Page = (props) => {
    const { products, fetchMoreData, endOfFeedReached } = props

    return (
        <InfiniteScroll
            dataLength={products.length}
            next={fetchMoreData}
            style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
            hasMore={!endOfFeedReached}
            loader={<h4>Loading...</h4>}

        >
            {
                products.map((product) => {
                    const { name, price, quantity, id, avatar } = product
                    return (
                        <div className="flex justify-center flex-row">
                            {id}
                            <div
                                className="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">

                                <a href="#!">
                                    <img
                                        className="rounded-t-lg"
                                        src={avatar}
                                        alt="" />
                                </a>
                                <div className="p-6">
                                    <h5
                                        className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                        {name}
                                    </h5>
                                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                        {price}
                                    </p>
                                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                        {quantity}
                                    </p>

                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </InfiniteScroll>

    )
}

export default Page
