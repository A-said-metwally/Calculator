import { data } from 'autoprefixer';
import React,{useState} from 'react'
import Head from '../head'



function Main() {
  const [Data, setData] = useState("");
  const calcBtns = [];

  [9,8,7,6,5,4,3,2,1,0,".","%"].forEach((element , id) => {
    calcBtns.push(
      <button 
        key={id}
        value={element}
        onClick={e =>{setData(Data + e.target.value)}}
        className="bg-gray-300 p-2 w-full h-full 
         rounded-md cursor-pointer hover:bg-gray-400 text-xl"
      >
        {element}
      </button>
    )
  });
  return (
    <div className='flex justify-center items-center'>
        <Head/>
        <div className=' lg:w-1/4 sm:w-2/4 mt-12'>
          <div className='mr-1 ml-1 bg-gray-400 text-white text-3xl p-1 h-12'>
            {Data}
          </div>
          {/* clear btns */}
          <div className='flex space-x-2 p-1 mt-1'>
          <button
              onClick={()=>setData(Data.substr(0,Data.length - 1))}
              className=" p-2 bg-blue-300 w-1/2"
              >
              Clear
            </button>
            <button
              onClick={()=>setData("")}
              className=" p-2 bg-blue-400 w-1/2"
              >
              CE
            </button>
          </div>

          <div className='flex '>
            {/* left calc btns */}
            <div className='flex flex-wrap mt-1'>
              {calcBtns.map((btn , id)=>{
                return (
                  <div 
                    key={id}
                    className="  p-1 w-1/3"
                  >
                    {btn}
                  </div>
                )
              })}
            </div>

            {/* right control btns */}
            <div className='flex flex-col p-1 '>
            <div className=' flex justify-center items-center p-1 h-1/5 '>
                <button 
                  value="/"
                  onClick={e =>setData(Data + e.target.value)}
                  className=' flex justify-center items-center p-3
                   bg-gray-500 h-full w-20 text-teal-200 text-2xl'
                   >/</button>
              </div>
              <div className=' flex justify-center items-center p-1 h-1/5 '>
                <button 
                  value="*"
                  onClick={e =>setData(Data + e.target.value)}
                  className=' flex justify-center items-center p-3
                   bg-gray-500 h-full w-20 text-teal-200 text-2xl'
                   >*</button>
              </div>
              <div className=' flex justify-center items-center p-1 h-1/5 '>
                <button 
                  value="-"
                  onClick={e =>setData(Data + e.target.value)}
                  className=' flex justify-center items-center p-3
                   bg-gray-500 h-full w-20 text-teal-200 text-2xl'
                   >-</button>
              </div>
              <div className=' flex justify-center items-center p-1 h-1/5 '>
                <button 
                  value="+"
                  onClick={e =>setData(Data + e.target.value)}
                  className=' flex justify-center items-center p-3
                   bg-gray-500 h-full w-20 text-teal-200 text-2xl'
                   >+</button>
              </div>
              <div className=' flex justify-center items-center p-1 h-1/5 '>
                <button 
                  value="="
                  onClick={e =>{
                    try{
                      setData(
                        String(eval(Data).length > 3 &&
                          String(eval(Data).includes("."))
                            ? String(eval(Data).toFixed(4))
                              :String(eval(Data))
                        )
                      )
                    }
                    catch(err){
                      console.log(err)
                    }
                  }}
                  className=' flex justify-center items-center p-3
                   bg-gray-500 h-full w-20 text-teal-200 text-2xl'
                   >=</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Main