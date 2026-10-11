'use client';
import { useEffect, useRef, useState } from 'react';

export default function HeroVideo(){
 const frameRef=useRef<HTMLIFrameElement>(null);
 const [failed,setFailed]=useState(false);
 const [reducedMotion,setReducedMotion]=useState(false);

 useEffect(()=>{
  const preference=window.matchMedia('(prefers-reduced-motion: reduce)');
  const update=()=>setReducedMotion(preference.matches);
  update();
  preference.addEventListener('change',update);
  return ()=>preference.removeEventListener('change',update);
 },[]);

 useEffect(()=>{
  if(reducedMotion)return;
  const frame=frameRef.current;
  const hero=frame?.parentElement;
  if(!frame||!hero)return;
  const resize=()=>{
   const {width,height}=hero.getBoundingClientRect();
   const scale=Math.max(width/16,height/9);
   frame.style.width=`${16*scale}px`;
   frame.style.height=`${9*scale}px`;
  };
  const observer=new ResizeObserver(resize);
  observer.observe(hero);
  resize();
  return ()=>observer.disconnect();
 },[reducedMotion]);

 if(reducedMotion)return null;
 return <iframe ref={frameRef} className={`hero-youtube${failed?' hero-youtube-failed':''}`} src="https://www.youtube-nocookie.com/embed/2EPqn-k9Pjk?autoplay=1&mute=1&loop=1&playlist=2EPqn-k9Pjk&controls=0&rel=0&playsinline=1" title="Solar panels in the sun" aria-hidden="true" tabIndex={-1} allow="autoplay; encrypted-media; picture-in-picture" referrerPolicy="strict-origin-when-cross-origin" onError={()=>setFailed(true)}/>;
}
