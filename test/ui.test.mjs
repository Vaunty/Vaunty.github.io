import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {JSDOM} from 'jsdom';

test('Questions keep only the latest answer, never scroll or append a transcript; tabs still work',async()=>{
 const dom=new JSDOM(await readFile(new URL('../index.html',import.meta.url),'utf8'),{url:'https://vaunty.github.io'});
 globalThis.window=dom.window;globalThis.document=dom.window.document;globalThis.matchMedia=()=>({matches:true});
 let scrolls=0;dom.window.HTMLElement.prototype.scrollIntoView=()=>{scrolls++;};
 dom.window.HTMLDialogElement.prototype.showModal=function(){this.open=true;};dom.window.HTMLDialogElement.prototype.close=function(){this.open=false;};
 let answers=0;window.__mascot={showAnswer:()=>answers++,showTabTopic(){},clearTabTopic(){}};
 await import('../src/site-ui.js');
 const input=document.getElementById('mascotAskInput'),form=document.getElementById('mascotAskForm');
 for(const q of ['projects','experience','resume']){input.value=q;form.dispatchEvent(new dom.window.Event('submit',{cancelable:true}));}
 assert.equal(answers,3);assert.equal(scrolls,0);assert.equal(document.querySelectorAll('#guidePanel,#guideAnswers').length,0);assert.equal(document.querySelectorAll('#answerText h2').length,1);assert.equal(document.getElementById('answerDialog').open,false);
 document.getElementById('readAnswer').click();assert.equal(document.getElementById('answerDialog').open,true);
 document.getElementById('closeAnswer').click();assert.equal(document.getElementById('answerDialog').open,false);
 document.querySelector('[data-tab="activity"]').click();await new Promise(r=>setTimeout(r,0));assert.equal(document.querySelectorAll('.activity-card').length,3);
 document.querySelector('[data-tab="projects"]').click();assert.match(document.getElementById('drawerTitle').textContent,/Projects/);assert(document.querySelectorAll('.info-card').length>0);
 document.querySelector('[data-tab="industry"]').click();assert(document.querySelector('.resume-viewer'));
});
