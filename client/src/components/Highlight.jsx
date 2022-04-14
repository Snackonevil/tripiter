import { useState } from 'react'
import { useMutation } from 'apollo/client'
import { HiOutlineTrash } from 'react-icons/hi'
import { FiSettings } from 'react-icons/fi'
import { useNavigate } from 'react-router'
import HighlightModal from './HighlightModal'
import { DELETE_HIGHLIGHT } from '../utils/mutations'

export default function Highlight({ highlight }) {
    /* const navigate = useNavigate()


  function handleClick(e){
    e.preventDefault()
    navigate(`/highlight/${highlight._id}`)
  } */

    const [toggleModal, setToggleModal] = useState(false)
    const [deleteHighlight, { error }] = useMutation(DELETE_HIGHLIGHT)

    function handleClick(e) {
        e.preventDefault()
        console.log('click')
        setToggleModal(!toggleModal)
    }

    function deleteHighlight() {
        var result = window.confirm('Are you sure you want to delete?')
        if (result) {
            try {
                const { data } = await deleteHighlight({
                    variables:{
                        highlightId: highlight._id
                    }
                })
            } catch (err) {
                console.log(err)
            }
        }
    }

    function updateHighlight() {
        console.log('updated')
    }

    console.log(highlight._id)

    return (
        <div className="trip" onClick={handleClick}>
            <img src={`${highlight.img_url}`} alt="trip-thumbnail" />
            <div className="highlightName">
                <p>{highlight.name}</p>
            </div>
            <div className="edit-btns">
                <button className="buttons" onClick={updateHighlight}>
                    <FiSettings />
                </button>
                <button className="buttons" onClick={deleteHighlight}>
                    <HiOutlineTrash />
                </button>
            </div>

            {toggleModal && (
                <HighlightModal
                    highlight={highlight}
                    toggleModal={toggleModal}
                    setToggleModal={setToggleModal}
                />
            )}
        </div>
    )
}
