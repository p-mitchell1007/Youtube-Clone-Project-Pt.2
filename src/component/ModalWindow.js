import React from 'react'
import "./ModalWindow.css"
import { Navigate, useNavigate, useParams } from 'react-router-dom'

function ModalWindow({modalWindow, setModalWindow}) {

const navigate = useNavigate()


function errorHandler() {
  // setModalWindow(false)
  navigate('/search/')
} 

  return (
    <>
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={errorHandler}>&times;</span>
                <p>Error, please change your search term and try again</p>
            </div>
        </div>
    </>
  )
}

export default ModalWindow