const Message = ({ message, type }) => {

    if (message.message === '') {
        return null
    }

    return (
        <div className={type}>
            {message}
        </div>
    )
}

export default Message;