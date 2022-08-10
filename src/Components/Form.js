import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import "./style.css"
import { useDispatch, useSelector } from 'react-redux';
import { ADD } from '../redux/action/action';
import { toast } from 'react-toastify';


const FormInput = () => {

  const dispatch = useDispatch()

  const IState = {
    id : "",
    state: "",
    district: []
  }

  const stateData = useSelector((state) => state.stateReducer.states)

  const [data, setData] = useState(IState)

  const { state } = data

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const RandomID  = Math.random() * (100 - 1) + 1;
  const IntID = parseInt(RandomID)

  const sendData = (e) => {
    e.preventDefault()

    const checkstate = stateData.find((element) => element.state === state);

    if(checkstate){
      return toast.error("This State Already Exists !")
    }

    dispatch(ADD({ ...data, id: IntID}))
  }

  return (
    <div>
      <Form>
        <div className="input-area">
          <input type="text" name="state" id="state" value={state} placeholder="Enter Your State" autoComplete="off" onChange={(e) => handleChange(e)} />
        </div>
        <div>
          <input type="submit" value="Submit" onClick={(e) => sendData(e)} />
        </div>
      </Form>
    </div>
  )
}

export default FormInput
