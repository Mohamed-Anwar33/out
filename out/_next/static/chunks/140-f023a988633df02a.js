"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[140],{2085:(e,t,n)=>{n.d(t,{F:()=>i});var r=n(2596);let l=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,o=r.$,i=(e,t)=>n=>{var r;if((null==t?void 0:t.variants)==null)return o(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:i,defaultVariants:u}=t,a=Object.keys(i).map(e=>{let t=null==n?void 0:n[e],r=null==u?void 0:u[e];if(null===t)return null;let o=l(t)||l(r);return i[e][o]}),s=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return void 0===r||(e[n]=r),e},{});return o(e,a,null==t?void 0:null===(r=t.compoundVariants)||void 0===r?void 0:r.reduce((e,t)=>{let{class:n,className:r,...l}=t;return Object.entries(l).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...u,...s}[t]):({...u,...s})[t]===n})?[...e,n,r]:e},[]),null==n?void 0:n.class,null==n?void 0:n.className)}},2284:(e,t,n)=>{n.d(t,{N:()=>a});var r=n(2115),l=n(6081),o=n(6101),i=n(9708),u=n(5155);function a(e){let t=e+"CollectionProvider",[n,a]=(0,l.A)(t),[s,c]=n(t,{collectionRef:{current:null},itemMap:new Map}),d=e=>{let{scope:t,children:n}=e,l=r.useRef(null),o=r.useRef(new Map).current;return(0,u.jsx)(s,{scope:t,itemMap:o,collectionRef:l,children:n})};d.displayName=t;let f=e+"CollectionSlot",m=r.forwardRef((e,t)=>{let{scope:n,children:r}=e,l=c(f,n),a=(0,o.s)(t,l.collectionRef);return(0,u.jsx)(i.DX,{ref:a,children:r})});m.displayName=f;let p=e+"CollectionItemSlot",v="data-radix-collection-item",N=r.forwardRef((e,t)=>{let{scope:n,children:l,...a}=e,s=r.useRef(null),d=(0,o.s)(t,s),f=c(p,n);return r.useEffect(()=>(f.itemMap.set(s,{ref:s,...a}),()=>void f.itemMap.delete(s))),(0,u.jsx)(i.DX,{[v]:"",ref:d,children:l})});return N.displayName=p,[{Provider:d,Slot:m,ItemSlot:N},function(t){let n=c(e+"CollectionConsumer",t);return r.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll("[".concat(v,"]")));return Array.from(n.itemMap.values()).sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current))},[n.collectionRef,n.itemMap])},a]}},2712:(e,t,n)=>{n.d(t,{N:()=>l});var r=n(2115),l=globalThis?.document?r.useLayoutEffect:()=>{}},3655:(e,t,n)=>{n.d(t,{hO:()=>a,sG:()=>u});var r=n(2115),l=n(7650),o=n(9708),i=n(5155),u=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=r.forwardRef((e,n)=>{let{asChild:r,...l}=e,u=r?o.DX:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,i.jsx)(u,{...l,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function a(e,t){e&&l.flushSync(()=>e.dispatchEvent(t))}},5185:(e,t,n)=>{n.d(t,{m:()=>r});function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}},5845:(e,t,n)=>{n.d(t,{i:()=>o});var r=n(2115),l=n(9033);function o({prop:e,defaultProp:t,onChange:n=()=>{}}){let[o,i]=function({defaultProp:e,onChange:t}){let n=r.useState(e),[o]=n,i=r.useRef(o),u=(0,l.c)(t);return r.useEffect(()=>{i.current!==o&&(u(o),i.current=o)},[o,i,u]),n}({defaultProp:t,onChange:n}),u=void 0!==e,a=u?e:o,s=(0,l.c)(n);return[a,r.useCallback(t=>{if(u){let n="function"==typeof t?t(e):t;n!==e&&s(n)}else i(t)},[u,e,i,s])]}},6081:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(2115),l=n(5155);function o(e,t=[]){let n=[],i=()=>{let t=n.map(e=>r.createContext(e));return function(n){let l=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:l}}),[n,l])}};return i.scopeName=e,[function(t,o){let i=r.createContext(o),u=n.length;n=[...n,o];let a=t=>{let{scope:n,children:o,...a}=t,s=n?.[e]?.[u]||i,c=r.useMemo(()=>a,Object.values(a));return(0,l.jsx)(s.Provider,{value:c,children:o})};return a.displayName=t+"Provider",[a,function(n,l){let a=l?.[e]?.[u]||i,s=r.useContext(a);if(s)return s;if(void 0!==o)return o;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let l=n.reduce((t,{useScope:n,scopeName:r})=>{let l=n(e)[`__scope${r}`];return{...t,...l}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])}};return n.scopeName=t.scopeName,n}(i,...t)]}},6101:(e,t,n)=>{n.d(t,{s:()=>i,t:()=>o});var r=n(2115);function l(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}function o(...e){return t=>{let n=!1,r=e.map(e=>{let r=l(e,t);return n||"function"!=typeof r||(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];"function"==typeof n?n():l(e[t],null)}}}}function i(...e){return r.useCallback(o(...e),e)}},8905:(e,t,n)=>{n.d(t,{C:()=>i});var r=n(2115),l=n(6101),o=n(2712),i=e=>{let{present:t,children:n}=e,i=function(e){var t,n;let[l,i]=r.useState(),a=r.useRef({}),s=r.useRef(e),c=r.useRef("none"),[d,f]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},r.useReducer((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return r.useEffect(()=>{let e=u(a.current);c.current="mounted"===d?e:"none"},[d]),(0,o.N)(()=>{let t=a.current,n=s.current;if(n!==e){let r=c.current,l=u(t);e?f("MOUNT"):"none"===l||(null==t?void 0:t.display)==="none"?f("UNMOUNT"):n&&r!==l?f("ANIMATION_OUT"):f("UNMOUNT"),s.current=e}},[e,f]),(0,o.N)(()=>{if(l){var e;let t;let n=null!==(e=l.ownerDocument.defaultView)&&void 0!==e?e:window,r=e=>{let r=u(a.current).includes(e.animationName);if(e.target===l&&r&&(f("ANIMATION_END"),!s.current)){let e=l.style.animationFillMode;l.style.animationFillMode="forwards",t=n.setTimeout(()=>{"forwards"===l.style.animationFillMode&&(l.style.animationFillMode=e)})}},o=e=>{e.target===l&&(c.current=u(a.current))};return l.addEventListener("animationstart",o),l.addEventListener("animationcancel",r),l.addEventListener("animationend",r),()=>{n.clearTimeout(t),l.removeEventListener("animationstart",o),l.removeEventListener("animationcancel",r),l.removeEventListener("animationend",r)}}f("ANIMATION_END")},[l,f]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:r.useCallback(e=>{e&&(a.current=getComputedStyle(e)),i(e)},[])}}(t),a="function"==typeof n?n({present:i.isPresent}):r.Children.only(n),s=(0,l.s)(i.ref,function(e){var t,n;let r=null===(t=Object.getOwnPropertyDescriptor(e.props,"ref"))||void 0===t?void 0:t.get,l=r&&"isReactWarning"in r&&r.isReactWarning;return l?e.ref:(l=(r=null===(n=Object.getOwnPropertyDescriptor(e,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(a));return"function"==typeof n||i.isPresent?r.cloneElement(a,{ref:s}):null};function u(e){return(null==e?void 0:e.animationName)||"none"}i.displayName="Presence"},9033:(e,t,n)=>{n.d(t,{c:()=>l});var r=n(2115);function l(e){let t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>(...e)=>t.current?.(...e),[])}},9708:(e,t,n)=>{n.d(t,{DX:()=>i});var r=n(2115),l=n(6101),o=n(5155),i=r.forwardRef((e,t)=>{let{children:n,...l}=e,i=r.Children.toArray(n),a=i.find(s);if(a){let e=a.props.children,n=i.map(t=>t!==a?t:r.Children.count(e)>1?r.Children.only(null):r.isValidElement(e)?e.props.children:null);return(0,o.jsx)(u,{...l,ref:t,children:r.isValidElement(e)?r.cloneElement(e,void 0,n):null})}return(0,o.jsx)(u,{...l,ref:t,children:n})});i.displayName="Slot";var u=r.forwardRef((e,t)=>{let{children:n,...o}=e;if(r.isValidElement(n)){let e=function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(n=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(n),i=function(e,t){let n={...t};for(let r in t){let l=e[r],o=t[r];/^on[A-Z]/.test(r)?l&&o?n[r]=(...e)=>{o(...e),l(...e)}:l&&(n[r]=l):"style"===r?n[r]={...l,...o}:"className"===r&&(n[r]=[l,o].filter(Boolean).join(" "))}return{...e,...n}}(o,n.props);return n.type!==r.Fragment&&(i.ref=t?(0,l.t)(t,e):e),r.cloneElement(n,i)}return r.Children.count(n)>1?r.Children.only(null):null});u.displayName="SlotClone";var a=({children:e})=>(0,o.jsx)(o.Fragment,{children:e});function s(e){return r.isValidElement(e)&&e.type===a}},9946:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(2115);let l=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e,t,n)=>!!e&&""!==e.trim()&&n.indexOf(e)===t).join(" ").trim()};var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let u=(0,r.forwardRef)((e,t)=>{let{color:n="currentColor",size:l=24,strokeWidth:u=2,absoluteStrokeWidth:a,className:s="",children:c,iconNode:d,...f}=e;return(0,r.createElement)("svg",{ref:t,...i,width:l,height:l,stroke:n,strokeWidth:a?24*Number(u)/Number(l):u,className:o("lucide",s),...f},[...d.map(e=>{let[t,n]=e;return(0,r.createElement)(t,n)}),...Array.isArray(c)?c:[c]])}),a=(e,t)=>{let n=(0,r.forwardRef)((n,i)=>{let{className:a,...s}=n;return(0,r.createElement)(u,{ref:i,iconNode:t,className:o("lucide-".concat(l(e)),a),...s})});return n.displayName="".concat(e),n}}}]);