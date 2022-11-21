import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ReactPaginate from 'react-paginate';

// COMPONENTS
import Detailed from './Detailed'
import Simplified from './Simplified'

export const Active = () => {

    const dispatch = useDispatch()
    const taskList = useSelector((state) => state.TaskList.view)
    const listData = useSelector((state) => state.TaskList.list)
    const [taskSlice, setTaskSlice] = useState([])
    const [tempTask, setTemp] = useState([])

    
    const [offset, setOffset] = useState(0)
    const [pageCount, setPageCount] = useState()
    const itemsPerPage = 6

    const task = useSelector((state) => state.TaskList.action)
    const toggleUpdate = useSelector((state) => state.TaskList.toggleUpdate)


    const handlePageClick = (e) => {
        const selected = e.selected
        setOffset((selected * itemsPerPage) % listData.value.length)

    }
    useEffect(() => {
        setTemp(listData.value)


    }, [listData, offset, toggleUpdate])

    useEffect(() => {
        const endOffset = offset + itemsPerPage
        setPageCount(Math.ceil(tempTask.length / 6))
        setTaskSlice(tempTask.slice(offset, endOffset))


    }, [tempTask, offset])



    if (listData.value[0]?.taskName === '' || listData.value.length === 0) {
        return (
            <div className='text-white font-space mx-auto w-full text-center mt-20'>
                <h2 className='text-lg'>
                    Your active tasks will appear here
                </h2>
                <p className='text-sm opacity-50 mt-2'>
                    You’ll see this if you haven’t added any task yet.
                </p>
            </div>
        )
    }
    

    return (
        <>
            {taskSlice.map((item, key) => {
                return taskList.value === 'simple' ? <Simplified key={key} task={item.taskName} deadline={item.deadline} id={item._id} /> : <Detailed key={key} task={item.taskName} deadline={item.deadline} created={item.dateCreated} subject={item.taskSubject} id={item._id} />
            })}

            <ReactPaginate previousLabel={'< Prev'}
                nextLabel={'Next >'}
                breakLabel={'. . .'}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={1}
                containerClassName={'text-white flex items-center justify-center bg-blackBg w-fit mx-auto sm:px-3 sm:text-md mt-10 font-poppins sm:py-2 rounded-full text-xs'}
                previousClassName={'sm:px-7 sm:py-5 bg-lightgrey rounded-full sm:mr-5 p-3 px-4'}
                nextClassName={'sm:px-7 sm:py-5 bg-lightgrey rounded-full sm:ml-5 p-3 px-4'}
                pageClassName={'mx-4'}
                breakClassName={'mx-3'}
                activeClassName={'sm:py-3 sm:px-5 bg-[#B0B0B0] rounded-full px-3 py-2'}
                activeLinkClassName={'text-black font-bold'} />
        </>
    )
}

export default Active
