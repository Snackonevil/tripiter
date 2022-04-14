import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { HiOutlineTrash } from 'react-icons/hi'
import { FiSettings } from 'react-icons/fi'
import { useNavigate } from 'react-router'
import HighlightModal from './HighlightModal'
import { DELETE_HIGHLIGHT } from '../utils/mutations'
import UpdateHighlightModal from './UpdateHighlightModal'
import PrivateComponent from './PrivateComponent'

export default function Highlight({ highlight, ownerId }) {
    const [toggleModal, setToggleModal] = useState(false)
    const [udpateHighlightToggle, setHighlightToggle] = useState(false)
    const [deleteHighlight, { error }] = useMutation(DELETE_HIGHLIGHT)

    function updateClick(e) {
        e.preventDefault()
        setHighlightToggle(!udpateHighlightToggle)
    }

    function handleClick(e) {
        e.preventDefault()
        console.log('click')
        setToggleModal(!toggleModal)
    }

    async function delHighlight(e) {
        e.preventDefault()
        /* e.stopPropogation() */

        var result = window.confirm('Are you sure you want to delete?')
        if (result) {
            try {
                const { data } = await deleteHighlight({
                    variables: {
                        highlightId: highlight._id,
                    },
                })
            } catch (err) {
                console.log(err)
            }
            window.location.reload()
        }
    }

    function updHighlight(e) {
        e.preventDefault()
        setHighlightToggle(!udpateHighlightToggle)
    }

    return (
        <div className="img-wrapper">
            <img
                onClick={handleClick}
                src={`${highlight.img_url}`}
                alt="trip-thumbnail"
            />
            <div className="highlightName">
                <p>{highlight.name}</p>
            </div>
            <PrivateComponent ownerId={ownerId}>
                <div className="edit-btns">
                    <button className="buttons" onClick={updHighlight}>
                        <FiSettings />
                    </button>
                    <button className="buttons" onClick={delHighlight}>
                        <HiOutlineTrash />
                    </button>
                </div>
            </PrivateComponent>

            {toggleModal && (
                <HighlightModal
                    highlight={highlight}
                    toggleModal={toggleModal}
                    setToggleModal={setToggleModal}
                />
            )}

            {udpateHighlightToggle && (
                <UpdateHighlightModal
                    highlight={highlight}
                    udpateHighlightToggle={udpateHighlightToggle}
                    setHighlightToggle={setHighlightToggle}
                />
            )}
        </div>
    )
}
