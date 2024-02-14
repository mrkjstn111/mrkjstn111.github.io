
export function Homepage () {
    return(
        <div className=" flex flex-col bg-slate-50 sm:min-h-full min-h-screen sm:items-center items-center justify-center">
            <div className="items-center text-center">
                <div className="relative transform-style-3d transition-transform duration-700 transform text-white">
                <span className="flex items-center gap-10">
                    <a href="https://github.com/mrkjstn111">
                    <img
                        className="h-32 w-32 border-4 border-orange-600 rounded-full"
                        src="https://avatars.githubusercontent.com/u/88678036?v=4"
                        alt="mrkjstn111"
                    />  
                    {/* <p className="text-xltext-slate-600 uppercase">Hello World</p> */}
                    </a>

                    <a href="https://www.linkedin.com/in/mrkjstin/">
                    <img
                        className="h-32 w-32 border-4 border-orange-600 rounded-full"
                        src="https://media.licdn.com/dms/image/D5603AQF2PPy5gN1TDg/profile-displayphoto-shrink_200_200/0/1678933063765?e=1713398400&v=beta&t=iZHvLueLIRS9MHj6_AFNmGqbdw8GbXgK_Vjm-fCLqI0"
                        alt="mrkjstn111"
                    />  
                    </a>
                </span>
                    </div>

            </div>
        </div>
    )
}