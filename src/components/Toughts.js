import React, { useEffect, useRef, useState } from 'react';
import Table from './Table';



let retrieveTask = localStorage.getItem('ThoughtsList') ? JSON.parse(localStorage.getItem('ThoughtsList')):[];

const Thoughts = () => {
    let taskRef = useRef(null);
    let dateRef = useRef(null);
    let [thoughtsList,setThoughtsList] = useState(retrieveTask);

    const title ='Thoughts of the Day';


    function handleSubmit(e){
        e.preventDefault();
        let taskList = {
            date:dateRef.current.value,
            task:taskRef.current.value
        };
        setThoughtsList([...thoughtsList,taskList]);
        console.log('add');
        dateRef.current.value="";
        taskRef.current.value="";
    }

    function handleDeleteAll(){
        if(thoughtsList.length===0){
            alert("No Record Found")
        }
        else{
            let message = window.confirm('Are You Sure You Want To Delete All Data?') ;
            if (message)setThoughtsList([]);
        }
        
    }

    function handleDelete(index){
        let taskList=thoughtsList;

        let message = window.confirm('Are You Sure You Want To Delete This Data?') ;
        if (message) setThoughtsList(taskList.filter((list,i)=>i !== index));
    }

useEffect(()=>{
    localStorage.setItem('ThoughtsList',JSON.stringify(thoughtsList));
},[thoughtsList])



  return (
    <div className='thoughts'>
       <form onSubmit={(e)=>{handleSubmit(e)}} >
        <div className='header'>
                <label htmlFor="task">{title}</label>
            <div>
                <label htmlFor="date">Date</label>
                <input type="date" name="date" id="date" ref={dateRef} />
            </div>
        </div>
        <div className='inputTask'>
            <textarea name="" id="" cols="30" rows="3" ref={taskRef} placeholder={title} ></textarea>
        </div>
        <div className='button'>
            <button type="submit">Save</button>
            <button type='button' onClick={()=>{handleDeleteAll()}}>Delete ALL</button>
        </div>
       </form>
       <Table list={thoughtsList} handleDelete={handleDelete} title={title}/>

    </div>
  )
}

export default Thoughts