/* Every language is its own page (/ru/ → /uz/), so switching language is a navigation.
   This keeps the reader at the same place: before leaving we remember the section at the top of the
   screen (same order of sections/headings in every language) and scroll back to it on the new page.
   Hovering a language link also prefetches that page so the switch is near-instant. */
(function(){
var KEY="mg-pos",TOP=90,de=document.documentElement;
function marks(){return [].slice.call(document.querySelectorAll("main [id], main h2"))}
function maxY(){return Math.max(0,de.scrollHeight-innerHeight)}
function save(href){
  var best=null;
  marks().forEach(function(el,i){var t=el.getBoundingClientRect().top;if(t<=TOP)best={id:el.id||"",i:i,off:TOP-t}});
  var d={to:new URL(href,location.href).pathname,ratio:maxY()?scrollY/maxY():0};
  if(best&&scrollY>40){d.id=best.id;d.i=best.i;d.off=best.off}
  if(scrollY<=40)d.ratio=0;
  try{sessionStorage.setItem(KEY,JSON.stringify(d))}catch(e){}
}
function target(){
  var d=null;try{d=JSON.parse(sessionStorage.getItem(KEY)||"null")}catch(e){}
  if(!d||d.to!==location.pathname||location.hash)return null;
  if(d.i==null)return d.ratio*maxY();
  var el=(d.id&&document.getElementById(d.id))||marks()[d.i];
  return el?el.getBoundingClientRect().top+scrollY-TOP+d.off:d.ratio*maxY();
}
function jump(){var y=target();if(y!=null)window.scrollTo({top:y,behavior:"instant"});return y!=null}
if(jump()){
  var moved=false;addEventListener("wheel",function(){moved=true},{once:true,passive:true});addEventListener("touchstart",function(){moved=true},{once:true,passive:true});
  addEventListener("load",function(){if(!moved)jump();try{sessionStorage.removeItem(KEY)}catch(e){}});
}
var pre={};
function prefetch(a){var h=a.href;if(pre[h])return;pre[h]=1;var l=document.createElement("link");l.rel="prefetch";l.href=h;document.head.appendChild(l)}
document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[hreflang]");if(a&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey)save(a.href)});
["mouseover","touchstart","focusin"].forEach(function(ev){document.addEventListener(ev,function(e){var a=e.target.closest&&e.target.closest("a[hreflang]");if(a)prefetch(a)},{passive:true})});
})();
