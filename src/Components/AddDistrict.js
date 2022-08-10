import React, { useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import "./style.css"
import { Form } from 'react-bootstrap'



const AddDistrict = () => {

    const { id } = useParams()

    const [district, setDistrict] = useState("")

    const handleChange = (e) => {
        setDistrict(e.target.value)
    }

    const LoadData = useSelector((state) => state.stateReducer.states)
    const FilterData = LoadData.filter((element) => element.id == id)
    const [data, setData] = useState(FilterData)

    const sendDistrict = (e) => {
        e.preventDefault()

        data.map((element,index) => 
                data[index].district.push(
                    ...data.district|| [],
                    district
                )
        )
        console.log(data)

    }


  return (
    <div>
      <Form>
        <div className="input-area">
          <input type="text" name="state" id="state" value={district} placeholder="Enter Your State" autoComplete="off" onChange={(e) => handleChange(e)} />
        </div>
        <div>
          <input type="submit" value="Submit" onClick={(e)=> sendDistrict(e)}/>
          <Link to={"/"} className="BackButton">Home</Link>
        </div>
      </Form>
    </div>
  )
}

export default AddDistrict