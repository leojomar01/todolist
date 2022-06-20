import React, { useEffect, useRef, useState } from 'react';
import Table from './Table';



let retrieveTask = localStorage.getItem('TaskList') ? JSON.parse(localStorage.getItem('TaskList')):[];

const Task = () => {
    let taskRef = useRef(null);
    let dateRef = useRef(null);
    let [taskLists,setTaskList] = useState(retrieveTask);

    const title = 'Task';


    function handleSubmit(e){
        e.preventDefault();
        console.log(dateRef.current.value)
        let newDate = dateRef.current.value;
        if(newDate===" "){newDate = new Date().getDate}

        let taskList = {
            date:newDate,
            task:taskRef.current.value
        };



        setTaskList([...taskLists,taskList]);
        console.log('add');
        dateRef.current.value="";
        taskRef.current.value="";
    }

    function handleDeleteAll(){
        let confirm;
        if(taskLists.length===0){
            alert("No Record Found")
        }
        else{
            let message = window.confirm('Are You Sure You Want To Delete All Data?');
            if (message)message = window.confirm('Are You Really  Want To Delete All Data?');
            if (message)message = window.confirm('Are You Really Really Really Really Sure You Want To Delete All Data?')
            if (message)confirm = prompt("Please type \"DELETE\" if you want to delete all data");
            if(confirm==="DELETE"){
                setTaskList([])
            }
            else{
                alert("Wrong spelling")
            };
            console.log(confirm);

            
        }
        
    }

    function handleDelete(index){
        let taskList=taskLists;

        let message = window.confirm('Are You Sure You Want To Delete This Data?') ;
        if (message) setTaskList(taskList.filter((list,i)=>i !== index));
    }

useEffect(()=>{
    localStorage.setItem('TaskList',JSON.stringify(taskLists));
},[taskLists])



  return (
    <div className='task'>
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
       <Table list={taskLists} handleDelete={handleDelete} title={title}/>

    </div>
  )
}

export default Task