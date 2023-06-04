import React from 'react'
import "./ModalWindow.css"

function ModalWindow({setModalWindow}) {

// let modal = document.getElementById("myModal");
// let btn = document.getElementById("myBtn");
// let span = document.getElementsByClassName("close")[0];

// btn.onclick = function() {
//   modal.style.display = "block";
// }

// span.onclick = function() {
//   modal.style.display = "none";
// }

// window.onclick = function(event) {
//   if (event.target === modal) {
//     modal.style.display = "none";
//   }
// }

  return  (
    <>
        <div id="myModal" class="modal">
            <div class="modal-content">
                <span class="close" >&times;</span>
                <p>Error, please change your search term and try again</p>
            </div>
        </div>
    </>
  )
}

export default ModalWindow
