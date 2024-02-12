
export function Homepage () {
    return(
        <div className="flex flex-col bg-slate-50 sm:min-h-screen min-h-screen sm:items-center items-center justify-center">
            <div className="items-center text-center">
                <span className="flex items-center animate-bounce">
                    <a href="https://github.com/mrkjstn111">
                    <img
                        className="h-auto w-auto border-4 border-orange-600 rounded-full"
                        src="https://avatars.githubusercontent.com/u/88678036?v=4"
                        alt="mrkjstn111"
                    />  
                    {/* <p className="text-xltext-slate-600 uppercase">Hello World</p> */}
                    </a>
                </span>
            </div>
        </div>
    )
}