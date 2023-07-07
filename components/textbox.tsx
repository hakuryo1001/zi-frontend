const Textblock = ({ title, content }: any) => {
    return (
        <div className="flex flex-col bg-gray-100">
            <div className="text-2xl text-center font-underline leading-loose bg-red-200 m-4 ">
                {title}</div>
            <div className="rounded-xl text-bold grid grid-cols-1">
                <div className="text-justify border-slate border-2 m-4 p-4 rounded-lg ">
                {content}
            </div>
                
            </div>
        </div>
    )
}

export default Textblock