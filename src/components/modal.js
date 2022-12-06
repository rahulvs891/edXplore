import React from 'react';
import { AiOutlinePlus} from 'react-icons/ai';

function Modal() {
  return (
    <div>
<button type="button" className="btn btn-primary text-white fs-1 btn-lg rounded-circle" data-bs-toggle="modal" data-bs-target="#staticBackdrop" id='modalbutton'>
  <div className='plus'><AiOutlinePlus/></div>
</button>
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Add Resources</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className='additems'>
        <label>
        Title
        <input type="text"/>
        </label>
        <label>
        Link
        <input type="text"/>
        </label>
        <label>
        Description
        <input type="text" className='textarea'/>
        </label>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Upload</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Modal
