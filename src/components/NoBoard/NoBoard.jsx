import css from './NoBoard.module.css'
export const NoBoard = () => {
    return(
        <div className={css.container}>
            <p className={css.message}>
                Before starting your project, it is essential <span>to create a board</span> to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members.  
            </p>
        </div>

    )
}