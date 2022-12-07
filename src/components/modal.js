import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { BASE_URL } from '../Constants';

function Modal() {

  const [data, setData] = useState({
    uid: parseInt(window.localStorage.getItem('uid')),
    title: "",
    description: "",
    link: "",
    type: "",
    category: ""
  })

  const handleCHange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  const submitHandler = async() => {
    console.log(data)
    const res = await axios.post(BASE_URL + '/res', data)
    console.log(res.data)
    alert('resource added')
  }
  return (
    <div>
      <button type="button" className="btn btn-primary text-white fs-1 btn-lg rounded-circle" data-bs-toggle="modal" data-bs-target="#staticBackdrop" id='modalbutton'>
        <div className='plus'><AiOutlinePlus /></div>
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
                  <input type="text" name='title' value={data.title} onChange={handleCHange} />
                </label>
                <label>
                  Link
                  <input type="text" name='link' value={data.link} onChange={handleCHange} />
                </label>
                <label>
                  Category
                  <input type="text" name='category' value={data.category} onChange={handleCHange} />
                </label>
                <label>
                  Type
                  <input type="text" name='type' value={data.type} onChange={handleCHange} />
                </label>
                <label>
                  Description
                  <input type="text" className='textarea' name='description' value={data.description} onChange={handleCHange} />
                </label>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={submitHandler}>Upload</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
