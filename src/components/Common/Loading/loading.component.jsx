

export const Loading = () => {
    return <div style={{ borderTopColor: "#6C63FF" }} className="w-7 mx-auto rounded-full h-7 border-2  border-gr animate-spin" /> 
}

export const LoadingWithContainer = () => {
    return <div className="w-full flex justify-center items-center h-screen">
        <Loading />
    </div>
}