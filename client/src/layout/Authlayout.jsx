import '../index.css';

export default function AuthLayout ({children}){
    return(
        <div className='flex w-full  justify-center h-screen bg-cyan-100 '>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-2 w-full max-w-6xl px-10">
                <div className='w-full flex items-center justify-center lg:w-1/2 '>
                {children}
                </div>
                <div className='hidden relative lg:flex h-full w-1/2 items-center justify-center gap-12 '>
                    <div className='w-60 h-60 bg-linear-to-tr from-sky-500 to-cyan-300 rounded-full animate-bounce '></div>
                    <div className='w-full h-1/2 absolute  bg-white/10 '></div>
                </div>
            </div>
        </div>
    )
}