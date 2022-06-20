import React from 'react'

const Table = (props) => {

    const {
        handleDelete,
        list,
        title
    }=props;
  return (
         <table className='table table-dark'>
            
            <tr>
                <th>{title}</th>
            </tr>
            { 
                list.length ?
                    list.map((value,index)=>{
                        return (
                            <tr>
                                <td>
                                    <div>
                                        <span>Date: {value.date}</span>
                                        <span>{value.task}</span>
                                    </div>
                                <button type='button' onClick={()=>{handleDelete(index)}}>delete</button>
                                    
                                </td>
                            </tr>
                        )
                    }):
                    <tr>
                        <td>No Record found</td>
                    </tr>
            }
            
            
            
        </table>
  )
}

export default Table