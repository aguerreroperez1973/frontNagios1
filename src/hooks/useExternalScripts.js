import { useEffect } from 'react';

export default function useExternalScripts({ url }){
   /* const head = document.querySelector("head");
    const script = document.createElement("script");

    script.setAttribute("src", url);
    head.appendChild(script);*/

    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    document.body.appendChild(script);
}