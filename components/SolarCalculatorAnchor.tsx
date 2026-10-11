'use client';
import { useEffect } from 'react';

export default function SolarCalculatorAnchor(){
 useEffect(()=>{
  const scrollToCalculator=()=>{
   if(window.location.hash!=='#solar-calculator')return;
   const target=document.getElementById('solar-calculator');
   if(!target)return;
   const scrollPadding=parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0;
   const destination=Math.max(0,target.getBoundingClientRect().top+window.scrollY-scrollPadding);
   if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    window.scrollTo(0,destination);
    return;
   }
   const start=window.scrollY;
   const startTime=performance.now();
   const duration=500;
   const animate=(time:number)=>{
    const progress=Math.min((time-startTime)/duration,1);
    const eased=1-Math.pow(1-progress,3);
    window.scrollTo(0,start+(destination-start)*eased);
    if(progress<1)window.requestAnimationFrame(animate);
   };
   window.requestAnimationFrame(animate);
  };
  const handleClick=(event:MouseEvent)=>{
   if(event.target instanceof Element&&event.target.closest('a[href="/#solar-calculator"],a[href="#solar-calculator"]')){
    window.setTimeout(scrollToCalculator,0);
   }
  };

  document.addEventListener('click',handleClick);
  window.addEventListener('hashchange',scrollToCalculator);
  scrollToCalculator();
  return ()=>{
   document.removeEventListener('click',handleClick);
   window.removeEventListener('hashchange',scrollToCalculator);
  };
 },[]);

 return null;
}
