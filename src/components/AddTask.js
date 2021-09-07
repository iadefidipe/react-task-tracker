

const AddTask = () => {
    return (
        <form className='add-form' >
            <div className='form-control' >
                <label htmlFor="">Task</label>
                <input type="text" placeholder='Add Task' />
            </div>

            <div className='form-control' >
                <label htmlFor="">Day & Time</label>
                <input type="text" placeholder='Add Day & Time' />
            </div>

            <div className='form-control' >
                <label htmlFor="">Set Reminder</label>
                <input type="checkbox" name="" id="" />
            </div>

            <input type="submit" value="Save Task" />
        </form>
    )
}

export default AddTask
