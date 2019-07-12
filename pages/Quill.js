import React,{useState} from 'react'
import dynamic from 'next/dynamic';
const DynamicReactQuill = dynamic(() => import('react-quill'));
// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
export default function Quill () {
    const[getText,setText] = useState("") ;
    const[getNameCourse,setNameCourse] = useState("") ;


    
    function HandleSummit(){
      return(
        console.log("submit clicked")
      )
    }



    function handleChange(value) {
        setText(value)
        console.log(value)
    }

    

      return (
          <div >
              TestQuill
              <DynamicReactQuill 
                value={getText}
                modules={Quill.modules}
                formats={Quill.formats}
                onChange={handleChange}/>
              <button onClick={HandleSummit}>Post</button>
              <br/>
              Simple Here...
              <div dangerouslySetInnerHTML={{__html: getText}}></div>
          </div>

      )
      

  }
  
  Quill.modules = {
    toolbar: [
        [{ 'size': ['small', false, 'large', 'huge'] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'color': [] }, { 'background': [] }],
        [{'list': 'ordered'}, {'list': 'bullet'}],  
        ['link', 'image','video'],
        ['clean'],
        ['code-block']
        
      ]
  }
  Quill.formats = [
    'bold','italic','underline','strike','size','color','background','list','indent','link','image','video','clean','code-block'
  ]
