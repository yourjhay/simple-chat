import React from 'react'

const ConversationItem = ({active, time, name, message}) => {
    const _class = active ? 'bg-gray-200' : 'bg-white';
    return (
        <div>
            <div className="conversation-item p-1">
                <div className={'flex items-center p-2 rounded-md hover:bg-gray-200 cursor-pointer '+ _class}>
                    <div className="w-7 h-7 m-1">
                        <img className="rounded-full" src="https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027366_960_720.png" alt="avatar"/>
                    </div>
                    <div className="flex-grow p-2">
                        <div className="flex justify-between text-md ">
                            <div className="text-sm font-medium text-gray-700">{name}</div>
                            <div className="text-xs text-gray-400">{time}</div>
                        </div>
                        <div className="text-sm text-gray-500 w-40 truncate">
                        {message}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConversationItem
