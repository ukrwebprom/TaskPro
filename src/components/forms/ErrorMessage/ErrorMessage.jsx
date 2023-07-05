import Icon from "components/Icon/Icon"
export const ErrorMessage = e => {
    return(
        <div>
            <Icon name="#error" />
            <p>{e}</p>
        </div>
    )
}