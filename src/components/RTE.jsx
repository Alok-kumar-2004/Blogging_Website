import React ,{useRef} from 'react'
import {Editor} from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'


export default function RTE({name,control,label,defaultValue=''}){
  const editorRef = useRef(null);
  return (
    <div className='w-full'>
        {label && <label className='iniline-block mb-1 pl-1'>{label}</label>}
        <Controller
        name={name || 'content'}
        control={control}
        render={({field : {onChange}})=>(
    <Editor 
     tinymceScriptSrc="https://cdn.tiny.cloud/1/no-api-key/tinymce/7/tinymce.min.js"
     onInit={(_evt, editor) => editorRef.current = editor}
    // apiKey="hnneza8l85oo9ah5l4l5ve5jv9erbxqt3ardra2oxv45zzn2"
    initialValue = {defaultValue}
    init={{
        initialValue:defaultValue,
        height :500,
        menubar:true,
        plugins:[
          "image",
          "advlist",
          "autolink",
          "lists",
          "link",
          "image",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "code",
          "fullscreen",
          "insertdatetime",
          "media",
          "table",
          "code",
          "help",
          "wordcount",
          "anchor",
          ],
        toolbar:
         "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
        content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
     }
    }
    onEditorChange={ onChange}
     />
        )}
        />
     </div>
    
  )
}
