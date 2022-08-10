import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import "./style.css"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { DELETE } from '../redux/action/action'
import { FINDDATA } from '../redux/action/action'



const ShowData = () => {
    const getData = useSelector((state) => state.stateReducer.states)
    const [data, setData] = useState([])

    const dispatch = useDispatch()

    useEffect( ()=> {
        setData(getData)
    })

    const Delete = (id) => {
        dispatch(DELETE(id))
    }

  return (
    <div>
        <Table className="show-data">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>State</th>
                    <th>Add District</th>
                    <th>Districts</th>
                    <th>Delete Data</th>
                </tr>
            </thead>
            <tbody id="tbody">
            {
                data.map( (element,index)=>
                <tr key={index}>
                    <td>{index}</td>
                    <td>{element.state}</td>
                    <td><Link to={`/district/${element.id}`} className="AddDistrict" >Add District</Link></td>
                    <td>{element.district.map((element, index) => <ul key={index} className="ShowList">
                  <li>{element}</li>
                  </ul>)}
                </td>
                    <td><button type="delete" onClick={()=> Delete(element.id)}>Delete</button></td>
                </tr>
                )
            }
            </tbody>
    </Table>
  </div>
  )
}

export default ShowData