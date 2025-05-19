"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const page = () => {
  const [first, setfirst] = useState("")
  const [book, setbook] = useState("")
  const [number, setnumber] = useState("")
  const [status, setstatus] = useState("")
  const [urdu, seturdu] = useState("")
  const [arabic, setarabic] = useState("")
  const [chapter, setchapter] = useState("")
   const [loading, setLoading] = useState(true);

  const generate = async()=>{
    let page = 1179;
    let total = 29465;
    let perpage = 25;
  let rpage = Math.floor(Math.random() * page);
  let random = Math.floor(Math.random() * perpage);

 
const apiUrl = `https://hadithapi.com/api/hadiths?page=${rpage}&apiKey=$2y$10$K5c4MswceLti9g4Gz0wZCaFgoMv4OFKLQvuWVTvctsOEvaNUvc2`;
fetch(apiUrl)
.then(response => response.json())
.then(data => {
    setLoading(false);

   const main = data.hadiths.data[random]
   const hbook = main.book.bookName
   const hnum = main.hadithNumber
   const hurdu = main.hadithUrdu
   const harabic = main.hadithArabic
   const hstatus = main.status
   const hnarrator = main.urduNarrator
   const hchapter = main.chapter.chapterArabic
   setbook(hbook)
   setnumber(hnum)
   setarabic(harabic)
   seturdu(hurdu)
   setstatus(hstatus)
   setchapter(hchapter)
   console.log(main)

})
.catch(error => {
    console.log(error);
})

setLoading(true);
  }

  useEffect(() => {
    generate();
  }, [])
  

  return (
 <div className="p-5 gap-1 flex flex-col justify-start items-center w-full">
      <div className="w-full flex flex-col justify-center items-center rounded-lg text-white bg-gray-800 py-4 px-6">
        <h2 className="text-gray-500">BookName</h2>
        <h2 className="text-xl">{book}</h2>
      </div>
      <div className="overflow-hidden w-full flex flex-row justify-around items-center rounded-lg text-white bg-gray-800 py-4 px-6">
        <div className="flex gap-2"><h2 className="text-gray-500">Chapter:</h2><h2>{chapter}</h2></div>
      </div>

      <div className="w-full flex gap-1 flex-col justify-center items-center rounded-lg text-white bg-gray-800 py-4 px-6">
        <h1 className="text-gray-500">Hadith</h1>
        <h1 className="text-xl text-end leading-normal">{arabic}</h1>
        <h1 className="text-gray-500 mt-2">Tarjuma</h1>
        <h1 className="text-2xl text-end leading-normal">{urdu}</h1>
      </div>

      <div className="w-full flex flex-row justify-around items-center rounded-lg text-white bg-gray-800 py-4 px-6">
        <div className="flex gap-2"><h2 className="text-gray-500">HadithNumber:</h2><h2>{number}</h2></div>      
        <div className="flex gap-2"><h2 className="text-gray-500">Status:</h2><h2>{status}</h2></div>
        {/* <div className="flex gap-2"><h2 className="text-gray-500">Chapter:</h2><h2>{chapter}</h2></div> */}
      </div>


      <button 
        onClick={generate} 
        disabled={loading}
        className="bg-gray-600 px-4 py-4 text-lg w-full text-center rounded-lg text-white hover:cursor-pointer disabled:opacity-50"
      >
        {loading ? "Loading..." : "Generate Hadith"}
      </button>
    </div>
  )
}

export default page
