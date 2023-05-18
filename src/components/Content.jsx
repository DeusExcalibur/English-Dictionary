/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from "react";
import buttonImage from "../assets/playbutton.svg"

const linkApi = "https://api.dictionaryapi.dev/api/v2/entries/en/"

function Content({palabra}) {
  const [audio,setAudio] = useState([])
  const [noun,setNoun] = useState([])
  const [verb,setVerb] = useState([])
  const [source,setSource] = useState([])

  const audioRef = useRef();
  const handlePlay = () => {
    audioRef.current.play();
  };

  //Audio
  useEffect(()=>{
    const URL = `${linkApi}${palabra}`;
    const peticion = fetch(URL);
    peticion
    .then(datos => datos.json())
    .then(lectura =>{
      setAudio([])
      for(let i=0;i<lectura[0].phonetics.length;i++){
        if(!(lectura[0].phonetics[i].audio == '')){
          var audioUrl = lectura[0].phonetics[i].audio
          break
        }
      }
      if(lectura[0].phonetics.length == 0){
        setAudio(
          <div key={lectura[0].phonetics.audio}>
            <div>
              <p>{lectura[0].word}</p>
            </div>
            <div>
              <p>There is no audio file sorry</p>
            </div>
          </div>
        )
      }else{
        setAudio(
          <div className="mx-auto flex w-9/12 justify-between ps-[4vw] pe-[15vw] h-32 items-center" key={lectura[0].phonetics.audio}>
            <div>
              <p className="text-6xl font-bold mb-4">{lectura[0].word}</p>
              {lectura[0].phonetic == undefined ? 
              (
                <p className="text-blue-500 text-xl">{lectura[0].phonetics[1].text}</p>
              ) : (
                <p className="text-blue-900 text-xl">{lectura[0].phonetic}</p>
              )}
            </div>
            <div className="w-[80px]">
              {/* <button>
                <audio src={audioUrl} controls></audio>
              </button> */}
              <audio ref={audioRef} src={audioUrl} />
              <button onClick={handlePlay}>
                <img className="w-[80px]" src={buttonImage} alt="XD" />
              </button>
            </div>
          </div>
        )
      }
    }).catch((error)=>{
      console.log('Error'+error)
      setAudio('Error')
    })
  }, [palabra])

  //Noun and Source
  useEffect(()=>{
    const URL = `${linkApi}${palabra}`;
    const peticion = fetch(URL);
    peticion
    .then(datos => datos.json())
    .then(lectura => {
      setSource([])
      for(let i=0;i<lectura[0].meanings.length;i++){
        setNoun([])
        if(lectura[0].meanings[i].partOfSpeech.includes('noun')){
          setNoun((e)=>
              [...e,<div key={lectura[0].meanings[i].partOfSpeech}>
                <div className="flex items-center w-[50%] mx-auto">
                  <p className="w-3/12 text-2xl italic text-left">noun</p>
                  <hr className="w-[70%] h-[1px] border-0 rounded md:my-10 dark:bg-gray-400" />
                </div>
                <div className="flex items-center w-[50%] mx-auto">
                  <p className="w-3/12 text-xl text-left mt-8 text-slate-500">Meaning</p>
                </div>
              </div>]
            )
          for(let j=0;j<lectura[0].meanings[i].definitions.length;j++){
            if(j==3){
              break;
            }
            setNoun((e)=>
              [...e,<div key={j}>
                <div className="w-[50%] mt-8 mx-auto text-left">
                  <ul className="m-0 list-disc">
                    <li>{lectura[0].meanings[i].definitions[j].definition}</li>
                  </ul>
                </div>
              </div>]
            )
          }
          break;
        }else{
          setNoun('Error')
        }
      }
      if(lectura[0].meanings[0].synonyms[0] == undefined){
        setNoun((e)=>
              [...e,<div key={lectura[0].license.name}>
                <div className="mt-8">There is no synonym available</div>
              </div>]
            )
      }else{
        setNoun((e)=>
                [...e,<div key={lectura[0].license.name}>
                  <div className="flex items-center w-[50%] mx-auto">
                    <p className="text-xl text-left mt-8 text-slate-500">Synonym <span className="text-violet-600">{lectura[0].meanings[0].synonyms[0]}</span></p>
                  </div>
                </div>]
              )
      }
      setSource(
        <div>
          <div>
            <hr className="mt-8 w-[65%] h-[1px] border-0 rounded md:my-10 dark:bg-gray-400 mx-auto" />
          </div>
          <div className="flex flex-col md:flex-row items-center w-[90vw] md:w-[50%] mx-auto mb-20 mt-8">
            <p className="text-xl mt-8 text-slate-500">Source:</p>
            <a target="blank" className="break-all md:break-normal text-xl mt-8 ms-8 underline underline-offset-1 hover:text-violet-600 text-center md:text-left" href={lectura[0].sourceUrls[0]}>{lectura[0].sourceUrls[0]}</a>
          </div>
        </div>
      )
    }).catch((error)=>{
      console.log('error' + error)
      setNoun('Error')
      setSource('Error')
    })
  }, [palabra]);

  //Verb
  useEffect(()=>{
    const URL = `${linkApi}${palabra}`;
    const peticion = fetch(URL);
    peticion
    .then(datos => datos.json())
    .then(lectura => {
      for(let i=0;i<lectura[0].meanings.length;i++){
        setVerb([])
        if(lectura[0].meanings[i].partOfSpeech.includes('verb')){
          setVerb((e)=>
                [...e,<div key={lectura[0].meanings[i].partOfSpeech}>
                <div className="flex items-center w-[50%] mx-auto">
                  <p className="w-3/12 text-2xl italic text-left">verb</p>
                  <hr className="w-[70%] h-[1px] border-0 rounded md:my-10 dark:bg-gray-400" />
                </div>
                <div className="flex items-center w-[50%] mx-auto">
                  <p className="w-3/12 text-xl text-left mt-8 text-slate-500">Meaning</p>
                </div>
              </div>]
            )
          for(let j=0;j<lectura[0].meanings[i].definitions.length;j++){
            if(j==3){
              break;
            }
            setVerb((e)=>
              [...e,<div key={j}>
                <div className="w-[50%] mt-8 mx-auto text-left">
                  <ul className="m-0 list-disc">
                    <li>{lectura[0].meanings[i].definitions[j].definition}</li>
                  </ul>
                </div>
              </div>]
            )
          }
          break;
        }else{
          setVerb('Error')
        }
      }
    }).catch((error)=>{
      console.log('error' + error)
      setVerb('Error')
    })
  }, [palabra]);

  setTimeout(() => {
    if(noun == 'Error' && verb == 'Error'){
      setAudio('Se ha producido un error intente de nuevo o con otra palabra')
      setNoun('')
      setVerb('')
      setSource('')
    }else if(noun == 'Error'){
      setNoun('')
    }else if(verb == 'Error'){
      setVerb('')
    }
  }, 200);

  return (
    <div>
      <div className="text-center mt-8">
        {audio}
      </div>
      <div className="text-center mt-8">
        {noun}
      </div>
      <div className="text-center mt-8">
        {verb}
      </div>
      <div>
        {source}
      </div>
    </div>
  )
}

export default Content
