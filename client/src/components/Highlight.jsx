import{ useState } from 'react'
import { HiOutlineTrash } from 'react-icons/hi'
import { FiSettings } from 'react-icons/fi'
import { useNavigate } from 'react-router';
import HighlightModal from './HighlightModal';


export default function Highlight( { highlight } ) {
  /* const navigate = useNavigate()


  function handleClick(e){
    e.preventDefault()
    navigate(`/highlight/${highlight._id}`)
  } */

  const [toggleModal, setToggleModal] = useState(false)

  function handleClick(e) {
    e.preventDefault()
    console.log('click')
    setToggleModal(!toggleModal)
}
  
  function deleteHighlight(){
    var result = window.confirm("Are you sure you want to delete?");
    if (result){
      console.log('deleted')
    }
  }

  function updateHighlight(){
    console.log('updated')
  }
  

  console.log(highlight._id)


  return (

    <div className="trip" onClick={handleClick}>
      {/* <div className="imgWrapper"> */}
                <img src={`${highlight.img_url}`} alt="trip-thumbnail" />
                <div className='highlightName'><p>{highlight.name}</p></div>
                <div className="edit-btns">
                  <button className="buttons" onClick={updateHighlight}><FiSettings /></button>
                  <button className="buttons" onClick={deleteHighlight}><HiOutlineTrash /></button>
                </div>
      {/* </div> */}
      {toggleModal && <HighlightModal highlight={highlight} toggleModal={toggleModal} setToggleModal={setToggleModal}/>}
    </div>
    
  )
}
