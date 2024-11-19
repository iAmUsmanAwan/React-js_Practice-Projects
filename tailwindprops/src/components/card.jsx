// import React from 'react'


function Card(  
    {// eslint-disable-next-line react/prop-types
    userName = " User ", 
        // eslint-disable-next-line react/prop-types
    post = "Not Assigned Yet"

     //? we can use props here but then we have to call everywhere we want to inject a variable as props.userName etc. or . we can pass the {userName} here and assign a default value for it, and then we just call the {username} where required . here username is set to JB as default, if we will not give the username a value then it will be JB, also this is scalable.

}
    ) {

        //? if we have used Props in the Card function's Argument we can check in consoleof the windows the properties
    // console.log(props);
    

    return (
    
        // <div>
        //     <img src="https://images.pexels.com/photos/13740078/pexels-photo-13740078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="PickupTruck" />
        //     <h1 className="text-2xl bg-green-500 p-3 rounded " >A card for Photos</h1>
        //     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, accusantium!</p>
        // </div>

        <div>
                <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/13740078/pexels-photo-13740078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="384" height="512" />
                <div className ="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                <p className ="text-lg font-medium">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, adipisci?
                </p>
                </blockquote>
                <figcaption className="font-medium">
                <div className="text-sky-500 dark:text-sky-400">
                    {userName}
                    {/* {userName || "johnny sins"} */}
                    {/* not scalable plus not good approach */}
                </div>
                <div className="text-slate-700 dark:text-slate-500">
            {post}
        </div>
        </figcaption>
    </div>
    </figure>
        </div>
    )
}


export default Card