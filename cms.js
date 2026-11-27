const types040={general:['일반 게시글','guide',['text']],dex:['도감형','pets',['image','name','stats','growth','source','text']],raid:['레이드형','raid',['party','requirements','items','roles','order','warning']],floor:['층별 공략형','raid',['party','items','floor','roles','order','warning']],quest:['퀘스트형','map',['source','requirements','items','order','reward','warning']],item:['아이템 정보형','gift',['image','name','stats','source','text']]};
const blockLabels={text:'본문',image:'이미지',name:'이름',stats:'능력치',growth:'속성 및 성장률',source:'획득처 / 시작 위치',party:'파티 구성',requirements:'참가 조건',items:'준비물',roles:'역할별 공략',order:'진행 / 공격 순서',warning:'주의사항',floor:'층 / 단계',reward:'보상',table:'표 (한 줄에 한 행, | 구분)',checklist:'체크리스트',link:'외부 링크'};
const ITEM_CATALOGUE_056=[
  {"name":"라돈타의 귀걸이(진)","alias":"","category":"","options":[{"name":"공격력","a":7,"b":10},{"name":"방어력","a":7,"b":10},{"name":"순발력","a":7,"b":10},{"name":"회피","a":3,"b":3}]},
  {"name":"아이테르의 빛","alias":"","category":"","options":[{"name":"순발력","a":3,"b":5},{"name":"회피","a":3,"b":3}]},
  {"name":"네메시스 소울 펜던트","alias":"","category":"","options":[{"name":"공격력","a":3,"b":5},{"name":"명중","a":3,"b":3}]},
  {"name":"기계 코어 장갑","alias":"","category":"","options":[{"name":"공격력","a":5,"b":8},{"name":"방어력","a":2,"b":4},{"name":"순발력","a":2,"b":4},{"name":"체력","a":8,"b":12}]},
  {"name":"삼위일체(진)","alias":"삼진","category":"","options":[{"name":"공격력","a":7,"b":10},{"name":"방어력","a":7,"b":10},{"name":"순발력","a":7,"b":10},{"name":"체력","a":10,"b":15}]},
  {"name":"삼위일체(개)","alias":"삼개","category":"","options":[{"name":"공격력","a":5,"b":7},{"name":"방어력","a":5,"b":7},{"name":"순발력","a":5,"b":7},{"name":"체력","a":5,"b":10}]},
  {"name":"기계파편(A)","alias":"","category":"","options":[{"name":"방어력","a":1,"b":5},{"name":"순발력","a":1,"b":5},{"name":"체력","a":5,"b":10}]},
  {"name":"기계파편(B)","alias":"","category":"","options":[{"name":"방어력","a":5,"b":10},{"name":"체력","a":5,"b":10}]},
  {"name":"기계파편(C)","alias":"","category":"","options":[{"name":"공격력","a":1,"b":5},{"name":"방어력","a":1,"b":5},{"name":"체력","a":5,"b":10}]},
  {"name":"검은불꽃 장궁","alias":"","category":"","options":[{"name":"공격력","a":25,"b":30},{"name":"방어력","a":-15,"b":-15}]},
  {"name":"미리네아의 거울","alias":"","category":"","options":[{"name":"공격력","a":1,"b":3},{"name":"방어력","a":1,"b":3},{"name":"순발력","a":1,"b":3},{"name":"체력","a":3,"b":5}],"special":"거울Lv2"},
  {"name":"헤티아의 창","alias":"헤창","category":"","options":[{"name":"공격력","a":60,"b":65},{"name":"순발력","a":-15,"b":-10},{"name":"체력","a":1,"b":5}]},
  {"name":"헤티아의 머리장식","alias":"헤뚝","category":"","options":[{"name":"공격력","a":3,"b":5},{"name":"방어력","a":25,"b":30},{"name":"순발력","a":-5,"b":-1},{"name":"체력","a":5,"b":10}],"special":"무지개"},
  {"name":"흑룡의 발톱","alias":"흑발","category":"","options":[{"name":"공격력","a":20,"b":20},{"name":"순발력","a":20,"b":25},{"name":"체력","a":10,"b":15}],"special":"은혜Lv6"},
  {"name":"마모된 기계 장갑","alias":"","category":"","options":[{"name":"공격력","a":1,"b":3},{"name":"체력","a":3,"b":5}]},
  {"name":"반짝이는 기계 장갑","alias":"빤장","category":"","options":[{"name":"공격력","a":3,"b":6},{"name":"방어력","a":1,"b":2},{"name":"순발력","a":1,"b":2},{"name":"체력","a":5,"b":8}]},
  {"name":"인어 비늘 벨트","alias":"인벨","category":"","options":[{"name":"공격력","a":1,"b":3},{"name":"방어력","a":1,"b":3},{"name":"순발력","a":1,"b":3},{"name":"체력","a":3,"b":5},{"name":"명중","a":2,"b":2}]},
  {"name":"빛나는 인어 벨트","alias":"빛벨","category":"","options":[{"name":"공격력","a":3,"b":5},{"name":"방어력","a":3,"b":5},{"name":"순발력","a":3,"b":5},{"name":"체력","a":5,"b":10},{"name":"명중","a":4,"b":4}]},
  {"name":"초신성 갑옷","alias":"초갑","category":"","options":[{"name":"공격력","a":1,"b":5},{"name":"방어력","a":45,"b":55},{"name":"순발력","a":-15,"b":-7},{"name":"체력","a":1,"b":10}],"special":"윤택Lv5"},
  {"name":"정령왕의 활","alias":"","category":"","options":[{"name":"공격력","a":30,"b":35},{"name":"방어력","a":-10,"b":-10}]},
  {"name":"암흑 헤티아의 창","alias":"암창","category":"","options":[{"name":"공격력","a":62,"b":67},{"name":"순발력","a":-10,"b":-5},{"name":"체력","a":5,"b":5}]},
  {"name":"암흑 헤티아의 초신성 갑옷","alias":"암갑","category":"","options":[{"name":"공격력","a":3,"b":5},{"name":"방어력","a":50,"b":60},{"name":"순발력","a":-10,"b":-5},{"name":"체력","a":5,"b":10}],"special":"윤택Lv5"},
  {"name":"암흑 헤티아의 머리장식","alias":"암뚝","category":"","options":[{"name":"공격력","a":5,"b":8},{"name":"방어력","a":27,"b":33},{"name":"순발력","a":-3,"b":0},{"name":"체력","a":10,"b":15}],"special":"무지개"},
  {"name":"암흑 헤티아의 활","alias":"암활","category":"","options":[{"name":"회피","a":3,"b":3}]},
  {"name":"승리의 팬던트","alias":"승팬","category":"","options":[{"name":"공격력","a":1,"b":5},{"name":"방어력","a":1,"b":5},{"name":"순발력","a":1,"b":5},{"name":"명중","a":3,"b":3},{"name":"회피","a":3,"b":3}]}
];
function loadItems040(){
  const initial=load('items040v2',null);
  if(Array.isArray(initial)){
    const aliases=new Map(ITEM_CATALOGUE_056.filter(item=>item.alias).map(item=>[item.name,item.alias]));
    return initial.map(item=>{
      const alias=aliases.get(item.name);
      return !item.alias && alias ? {...item,alias} : item;
    });
  }
  const legacy=load('items040',[]);
  const names=new Set(ITEM_CATALOGUE_056.map(item=>item.name));
  return [...ITEM_CATALOGUE_056,...(Array.isArray(legacy)?legacy.filter(item=>!names.has(item.name)):[])];
}
let adminTab='posts',draft040=null,guideRole='전체',items040=loadItems040(),itemIndex=0,itemValues={},itemEdit=-1,itemDraft=null;
const clone040=x=>JSON.parse(JSON.stringify(x));const block040=t=>({type:t,value:t==='roles'?['1순','2순','3순','1완','2완'].map(name=>({name,text:''})):t==='stats'?['공격력','방어력','순발력','체력'].map(name=>({name,text:''})):''});
function fresh040(){return {cat:'기타 TIP',title:'',summary:'',icon:'',type:'general',blocks:[block040('text')],pub:false}}
function persist040(k,v){try{localStorage.setItem(k,JSON.stringify(v));return true}catch(e){toast('저장 실패: 브라우저 저장공간을 확인하세요');return false}}
function adminSwitch(t){adminTab=t;admin()}
admin=function(){app.innerHTML=`<h1>${ico('admin')} 관리자</h1><small>로컬 테스트 · 서버 인증 미연동</small><section class="dashboard"><div class="stats">${[['공개',posts.filter(p=>p.pub).length],['임시',posts.filter(p=>!p.pub).length],['라돈타',raid.length],['감정 아이템',items040.length]].map(([n,v])=>`<div><small>${n}</small><h3>${v}</h3></div>`).join('')}</div></section><div class="grid">${[['posts','guide','공략 관리'],['raid','raid','라돈타 관리'],['items','sale','감정 아이템 관리']].map(([t,i,n])=>btn(ico(i)+' '+n,`adminSwitch('${t}')`,adminTab===t)).join('')}</div><div id="admin040"></div>`;if(adminTab==='raid'){$('admin040').innerHTML=`<section><h2>라돈타 데이터 관리</h2><select id="af" onchange="adminRaid()">${raid.map(r=>`<option>${r[0]}</option>`).join('')}</select><div id="ar"></div></section>`;adminRaid()}else if(adminTab==='items')itemAdmin040();else editor040()};
function editor040(){if(!draft040)draft040=fresh040();let p=draft040;$('admin040').innerHTML=`<section><div class="line"><h2>${editing<0?'신규 공략 작성':'공략 수정'}</h2>${btn('새 글','new040()')}</div><label>카테고리<select id="ac" onchange="draft040.cat=this.value;pickPostIcon(draft040.icon)">${['레이드','라돈타','아이템','퀘스트','기타 TIP'].map(c=>`<option ${c===p.cat?'selected':''}>${c}</option>`).join('')}</select></label><label>제목<input value="${esc(p.title)}" oninput="draft040.title=this.value"></label><label>한 줄 요약<input value="${esc(p.summary)}" oninput="draft040.summary=this.value"></label><label>게시글 픽토그램</label><div class="post-icon-picker"><div id="posticonpreview"></div><div id="posticons">${[['','자동'],...postIcons].map(([n,t])=>`<button data-icon="${n}" onclick="draft040.icon='${n}';pickPostIcon('${n}')">${ico(n||'guide')}<small>${t}</small></button>`).join('')}</div></div><h2>작성 양식</h2><div class="grid">${Object.entries(types040).map(([k,v])=>btn(ico(v[1])+' '+v[0],`type040('${k}')`,p.type===k)).join('')}</div></section><div id="blocks040"></div><section><h2>콘텐츠 블록 추가</h2><div class="grid">${Object.entries(blockLabels).map(([k,v])=>btn('+ '+esc(v),`draft040.blocks.push(block040('${k}'));blocks040()`)).join('')}</div></section><section><div class="grid">${btn('미리보기','preview040()')}${btn('임시저장','savePost040(false)')}${btn('공개 등록','savePost040(true)',true)}${btn('비공개 전환','savePost040(false)')}</div></section><section><h2>공략 목록</h2>${posts.map((p,i)=>`<div class="line"><span>${esc(p.title)} · ${p.pub?'공개':'비공개/임시'}</span>${btn('수정',`edit040(${i})`)}${btn('삭제',`delete040(${i})`)}</div>`).join('')||'등록된 공략 없음'}</section>`;pickPostIcon(p.icon||'');blocks040()}
function new040(){editing=-1;draft040=fresh040();editor040()}function type040(t){if(draft040.type===t)return;if(draft040.blocks.some(b=>Array.isArray(b.value)?b.value.some(x=>x.text):b.value)&&!confirm('작성 양식을 변경하면 현재 블록이 초기화됩니다. 계속할까요?'))return;draft040.type=t;draft040.blocks=types040[t][2].map(block040);editor040()}
function blocks040(){$('blocks040').innerHTML=draft040.blocks.map((b,i)=>`<section><div class="line"><strong>${esc(blockLabels[b.type])}</strong><span>${btn('↑',`move040(${i},-1)`)}${btn('↓',`move040(${i},1)`)}${btn('삭제',`draft040.blocks.splice(${i},1);blocks040()`)}</span></div>${Array.isArray(b.value)?b.value.map((r,j)=>`<div class="grid"><input aria-label="항목명" value="${esc(r.name)}" oninput="draft040.blocks[${i}].value[${j}].name=this.value"><textarea aria-label="내용" oninput="draft040.blocks[${i}].value[${j}].text=this.value">${esc(r.text)}</textarea></div>${btn('항목 삭제',`draft040.blocks[${i}].value.splice(${j},1);blocks040()`)}`).join('')+btn('항목 추가',`draft040.blocks[${i}].value.push({name:'',text:''});blocks040()`):b.type==='image'?`<input type="file" accept="image/png,image/jpeg,image/webp" onchange="image040(this,${i})">${b.value?`<img class="cms-image" src="${esc(safeImage040(b.value))}">`:''}`:`<textarea rows="${b.type==='text'?6:3}" oninput="draft040.blocks[${i}].value=this.value">${esc(b.value)}</textarea>`}</section>`).join('')}
function move040(i,d){let a=draft040.blocks,j=i+d;if(j<0||j>=a.length)return;[a[i],a[j]]=[a[j],a[i]];blocks040()}function safeImage040(v){return /^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(v)?v:''}function image040(el,i){let f=el.files[0],b=draft040.blocks[i];if(!f)return;if(f.size>700000||!['image/png','image/jpeg','image/webp'].includes(f.type))return toast('PNG/JPG/WebP 700KB 이하만 가능');let r=new FileReader();r.onload=()=>{b.value=r.result;if($('blocks040'))blocks040()};r.readAsDataURL(f)}
function edit040(i){editing=i;let p=posts[i];draft040={...fresh040(),...clone040(p),blocks:p.blocks?clone040(p.blocks):[{type:'text',value:p.body||''}]};editor040()}function delete040(i){if(!confirm('삭제할까요?'))return;let a=posts.filter((_,j)=>j!==i);if(persist040('posts',a)){posts=a;new040()}}
function savePost040(pub){let p=clone040(draft040);p.title=p.title.trim();p.pub=pub;p.body=p.blocks.map(b=>Array.isArray(b.value)?b.value.map(x=>x.name+' '+x.text).join('\n'):b.type==='image'?'':b.value).join('\n');if(!p.title||pub&&!p.body.trim()&&!p.blocks.some(b=>b.type==='image'&&b.value))return toast('제목과 내용을 확인하세요');let a=posts.slice();if(editing<0)a.unshift(p);else a[editing]=p;if(persist040('posts',a)){posts=a;new040();toast('로컬 저장 완료')}}
function content040(p){return (p.blocks||[{type:'text',value:p.body||''}]).map(b=>{let v=b.value;if(Array.isArray(v)){let rows=v.filter(x=>x.text&&(b.type!=='roles'||guideRole==='전체'||guideRole===x.name));return `<section><h3>${esc(blockLabels[b.type])}</h3>${b.type==='roles'?`<div class="roles cms-roles">${['전체',...v.map(x=>x.name)].map(n=>btn(esc(n),`guideRole=${JSON.stringify(n)};refreshContent040()`,guideRole===n)).join('')}</div>`:''}${rows.map(x=>`<div class="turn"><strong>${esc(x.name)}</strong><div class="cms-text">${esc(x.text)}</div></div>`).join('')}</section>`}if(!v)return '';let body=b.type==='image'?`<img class="cms-image" src="${esc(safeImage040(v))}">`:b.type==='table'?`<div class="cms-table"><table>${v.split('\n').map(r=>`<tr>${r.split('|').map(c=>`<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</table></div>`:b.type==='checklist'||b.type==='order'?`<${b.type==='order'?'ol':'ul'}>${v.split('\n').filter(Boolean).map(s=>`<li>${esc(s)}</li>`).join('')}</${b.type==='order'?'ol':'ul'}>`:b.type==='link'&&/^https?:\/\/[^\s]+$/.test(v)?`<a href="${esc(v)}" target="_blank" rel="noopener">${esc(v)}</a>`:`<div class="cms-text">${esc(v)}</div>`;return `<section><h3>${esc(blockLabels[b.type])}</h3>${body}</section>`}).join('')}
let viewed040=null;function refreshContent040(){if($('content040'))$('content040').innerHTML=content040(viewed040)}function show040(p,preview=false){viewed040=p;guideRole='전체';let d=document.createElement('dialog');d.className='cms-dialog';d.innerHTML=`<div class="line"><small>${preview?'미리보기':esc(p.cat)}</small><button onclick="closeScreenDialog(this.closest('dialog'))">닫기</button></div><h1>${ico(p.icon||defaultPostIcon(p.cat))} ${esc(p.title)}</h1><p>${esc(p.summary||'')}</p><div id="content040"></div>`;document.body.append(d);refreshContent040();d.addEventListener('close',()=>d.remove());d.showModal();return d}function preview040(){openScreenOverlay({kind:'preview'})}
guideList=function(){let a=posts.map((p,i)=>({p,i})).filter(({p})=>p.pub&&(cat==='전체'||p.cat===cat)&&`${p.title} ${p.body||''} ${p.summary||''}`.includes(gq));$('guidelist').innerHTML=a.map(({p,i})=>`<section><button class="tile wide" onclick="openScreenOverlay({kind:'post',index:${i}})"><div class="post-heading">${ico(p.icon||defaultPostIcon(p.cat))}<div><small>${esc(p.cat)}</small><h2>${esc(p.title)}</h2><small>${esc(p.summary||'')}</small></div></div></button></section>`).join('')||'<section class="empty">등록된 공략이 없습니다.</section>'};
function assess040(a,b,v){let best=Math.max(a,b),worst=Math.min(a,b);return {best,worst,valid:Number.isInteger(v)&&v>=worst&&v<=best,deficit:best-v}}
function signed041(v){return (Number(v)>0?'+':'')+Number(v)}
function stat041(n){return n.includes('공격')?['sword','#F87171']:n.includes('순발')?['speed','#FACC15']:n.includes('방어')?['shield','#60A5FA']:n.includes('체력')?['heart','#4ADE80']:['calc','#EDCB90']}

const ENHANCEMENT_KIND_040 = new Map([
  ['검은불꽃 장궁', '무기'],
  ['헤티아의 창', '무기'],
  ['흑룡의 발톱', '무기'],
  ['정령왕의 활', '무기'],
  ['암흑 헤티아의 창', '무기'],
  ['암흑 헤티아의 활', '무기'],
  ['헤티아의 머리장식', '방어구'],
  ['초신성 갑옷', '방어구'],
  ['암흑 헤티아의 초신성 갑옷', '방어구'],
  ['암흑 헤티아의 머리장식', '방어구'],
]);
const CHAN_ITEMS_040 = new Set([
  '암흑 헤티아의 창', '암흑 헤티아의 활',
  '암흑 헤티아의 초신성 갑옷', '암흑 헤티아의 머리장식',
]);
const ENHANCEMENT_STEPS_040 = {
  무기: [
    {공격력:1}, {공격력:1}, {공격력:1,관통:10}, {공격력:1}, {공격력:1},
    {공격력:2,명중:3}, {공격력:1}, {공격력:1}, {공격력:2,관통:5}, {공격력:3,명중:5},
  ],
  방어구: [
    {방어력:1}, {방어력:1}, {방어력:2,쉴드:10}, {방어력:1}, {방어력:1},
    {방어력:2,내구력:10}, {방어력:1}, {방어력:2,쉴드:5}, {방어력:2}, {방어력:3,내구력:10},
  ],
};
const ENHANCEMENT_STAT_NAMES_040 = new Map([
  ['공격','공격력'], ['방어','방어력'], ['명중률','명중'], ['실드','쉴드'],
]);
let itemEnhancement040=0, itemChan040=0;

function itemEnhancementKind040(item){
  const kind=ENHANCEMENT_KIND_040.get(item.name)??item.category?.trim();
  return Object.hasOwn(ENHANCEMENT_STEPS_040,kind)?kind:null;
}

function enhancementBonuses040(kind,level,chan){
  const bonuses=new Map();
  if(!kind)return bonuses;
  for(const step of ENHANCEMENT_STEPS_040[kind].slice(0,level)){
    for(const [name,value] of Object.entries(step)){
      bonuses.set(name,(bonuses.get(name)??0)+value);
    }
  }
  if(chan){
    const name=kind==='무기'?'공격력':'방어력';
    bonuses.set(name,(bonuses.get(name)??0)+chan*5);
  }
  return bonuses;
}

function enhancedOptions040(item){
  const bonuses=enhancementBonuses040(itemEnhancementKind040(item),itemEnhancement040,
    CHAN_ITEMS_040.has(item.name)?itemChan040:0);
  const options=item.options.map(option=>{
    const name=ENHANCEMENT_STAT_NAMES_040.get(option.name.trim())??option.name.trim();
    const bonus=bonuses.get(name)??0;
    bonuses.delete(name);
    return {...option,a:Number(option.a)+bonus,b:Number(option.b)+bonus,bonus};
  });
  for(const [name,bonus] of bonuses)options.push({name,a:bonus,b:bonus,bonus,bonusOnly:true});
  return options;
}

function itemEnhancementControls040(item,options){
  if(!itemEnhancementKind040(item))return '';
  const stages=(max,selected,suffix)=>Array.from({length:max+1},(_,n)=>
    `<option value="${n}" ${n===selected?'selected':''}>${n}${suffix}</option>`).join('');
  const bonuses=options.filter(option=>option.bonus).map(option=>esc(option.name)+' '+signed041(option.bonus));
  return `<section><div class="assess-inputs">
  <label>일반 강화<select aria-label="일반 강화" onchange="itemEnhancement040=Number(this.value);assessor040('일반 강화')">${stages(10,itemEnhancement040,'강')}</select></label>
  ${CHAN_ITEMS_040.has(item.name)?`<label>찬작<select aria-label="찬작" onchange="itemChan040=Number(this.value);assessor040('찬작')">${stages(3,itemChan040,'찬')}</select></label>`:''}
  </div>${bonuses.length?`<small>강화 증가량 · ${bonuses.join(' / ')}</small>`:''}</section>`;
}
function itemSelect040(i){
  itemIndex=i;
  itemValues={};
  itemEnhancement040=0;
  itemChan040=0;
  assessor040();
}
const ASSESS_SCOPE_056='종합 딸 수는 공격력 + 방어력 + 순발력만 합산합니다.';
function itemRows040(item){
  return enhancedOptions040(item).map((o,i)=>{
    const base=itemValues[i];
    const raw=o.a===o.b?String(o.a):base==null||base===''?base:String(Number(base)+o.bonus);
    const result=assess040(o.a,o.b,Number(raw));
    return {...result,name:o.name,raw,valid:raw!=null&&String(raw).trim()!==''&&result.valid,
      counted:!o.bonusOnly&&/^(공격(력)?|방어(력)?|순발(력)?)$/.test(o.name.trim())};
  });
}
function itemTotal040(rows){
  const counted=rows.filter(r=>r.counted);
  return !counted.length?'합산 대상 없음':counted.some(r=>!r.valid)?'공·방·순 값을 선택해 주세요':formatDeficit040(counted.reduce((sum,r)=>sum+r.deficit,0));
}
function formatDeficit040(deficit){return deficit?deficit+'딸':'맥옵';}
function itemName040(p){return esc(p.name)+(p.alias?' ('+esc(p.alias)+')':'');}
const itemCollator040=new Intl.Collator('ko-KR');
function itemOptions040(query='',selected=-1){
  return items040.map((item,index)=>({item,index}))
    .filter(({item})=>`${item.name} ${item.alias??''}`.includes(query))
    .sort((a,b)=>itemCollator040.compare(a.item.name,b.item.name))
    .map(({item,index})=>`<option value="${index}" ${index===selected?'selected':''}>${itemName040(item)}</option>`)
    .join('');
}
function itemControl040(o,i){
  const min=Math.min(o.a,o.b),max=Math.max(o.a,o.b),fixed=min===max;
  const base=itemValues[i];
  const raw=fixed?String(min):base==null||base===''?'':String(Number(base)+o.bonus);
  const attributes=`aria-label="${esc(o.name)}" oninput="itemValues[${i}]=this.value===''?'':String(Number(this.value)-${o.bonus});result040()"`;
  if(!Number.isSafeInteger(min)||!Number.isSafeInteger(max)||max-min>1000){
    return `<input type="number" min="${min}" max="${max}" step="1" ${attributes} value="${esc(raw)}">`;
  }
  const options=[];
  for(let n=max;n>=min;n--)options.push(`<option value="${n}" ${String(n)===raw?'selected':''}>${signed041(n)}</option>`);
  return `<select ${fixed?'disabled':''} ${attributes}>${fixed?'':'<option value="">값 선택</option>'}${options.join('')}</select>`;
}
function assessor040(focusLabel){
  const p=items040[itemIndex];
  const options=p?enhancedOptions040(p):[];
  app.innerHTML=`<div class="assessor041"><h1>${ico('search')} 아이템 옵션 감정기</h1><section>
  <label>아이템 선택<input placeholder="아이템 이름 또는 약칭 검색" oninput="filterItems040(this.value)"></label>
  <select id="itemSelect040" aria-label="감정할 아이템" onchange="itemSelect040(Number(this.value))">${itemOptions040('',itemIndex)}</select>
  ${p?`<div class="post-heading"><span class="assess-icon">${ico('raid')}</span><div><strong>${itemName040(p)}</strong>
  ${p.category?`<div><small>${esc(p.category)}</small></div>`:''}${p.special?`<div class="muted">특수 옵션 ${esc(p.special)}</div>`:''}
  ${options.map(o=>`<div class="muted">${esc(o.name)} ${signed041(Math.min(o.a,o.b))}${o.a===o.b?'':' ~ '+signed041(Math.max(o.a,o.b))}</div>`).join('')}</div></div>`:''}</section>
  ${p?`${itemEnhancementControls040(p,options)}<section>${itemEnhancement040||itemChan040?'<small>강화가 반영된 게임 내 능력치를 선택하세요.</small>':''}<div class="assess-inputs">${options.map((o,i)=>{
    const [ic,c]=stat041(o.name);
    return `<label><strong style="color:${c}">${ico(ic)} ${esc(o.name)}</strong>${itemControl040(o,i)}<small>맥옵: ${signed041(Math.max(o.a,o.b))}</small></label>`;
  }).join('')}</div></section><div id="result040"></div><div class="grid"><button onclick="preset041(false)">최하옵 테스트</button><button onclick="preset041(true)">맥옵 테스트</button></div>`:'<section>등록된 아이템 없음</section>'}</div>`;
  if(p)result040();
  if(focusLabel)app.querySelector(`select[aria-label="${focusLabel}"]`)?.focus({preventScroll:true});
}
function preset041(best){items040[itemIndex].options.forEach((o,i)=>itemValues[i]=String((best?Math.max:Math.min)(o.a,o.b)));assessor040()}
function filterItems040(q){$('itemSelect040').innerHTML='<option value="" disabled selected>아이템 선택</option>'+itemOptions040(q)}
function max040(){items040[itemIndex].options.forEach((o,i)=>itemValues[i]=String(Math.max(o.a,o.b)));assessor040()}
function result040(){
  const p=items040[itemIndex],rows=itemRows040(p),total=itemTotal040(rows);
  const selected=rows.filter(r=>r.valid);
  const invalid=rows.some(r=>r.raw!=null&&String(r.raw).trim()!==''&&!r.valid);
  $('result040').innerHTML=`<section><div class="assess-total"><small>종합 감정 결과</small>
  <div class="big" style="color:${total==='맥옵'?'#4ADE80':'#EDCB90'}">${total}</div>
  <small>${ASSESS_SCOPE_056}</small></div>
  ${invalid?'<p class="assess-error">능력치 입력 범위를 확인해 주세요.</p>':''}
  ${selected.map(r=>{const [,c]=stat041(r.name);return `<div class="turn assess-stat"><div class="line"><strong>${esc(r.name)}${r.counted?'':' <small>합산 제외</small>'}</strong><strong style="color:${r.deficit?'#F87171':'#4ADE80'}">${formatDeficit040(r.deficit)}</strong></div><div class="line"><strong class="assess-value">${signed041(r.raw)}</strong><small>맥옵 ${signed041(r.best)}</small></div><div class="bar" style="background:#394654"><span style="background:${r.deficit?c:'#4ADE80'};width:${r.best===r.worst?100:100*(1-r.deficit/(r.best-r.worst))}%"></span></div><div class="assess-ends"><small>최하옵</small><small>맥옵</small></div></div>`}).join('')}
  <button class="wide" ${!selected.length||invalid||rows.some(r=>r.counted&&!r.valid)?'disabled':''} onclick="copyItem040()">${ico('check')} 감정 결과 복사</button></section>`;
}
async function copyItem040(){
  const p=items040[itemIndex],rows=itemRows040(p);
  const stages=[itemEnhancement040?itemEnhancement040+'강':'',itemChan040?itemChan040+'찬':''].filter(Boolean);
  const s=[[p.name,...stages].join(' ')+(p.special?' ('+p.special+')':''),'종합 '+itemTotal040(rows),
    ...rows.filter(r=>r.valid).map(r=>r.name+' '+signed041(r.raw)+' ('+formatDeficit040(r.deficit)+(r.counted?'':', 합산 제외')+')'),
    ASSESS_SCOPE_056].join(' / ');
  try{await navigator.clipboard.writeText(s);toast('복사 완료')}catch{prompt('결과 복사',s)}
}
function itemAdmin040(){if(!itemDraft)itemDraft={name:'',alias:'',category:'무기',options:[{name:'공격력',a:'',b:''}]};let p=itemDraft;$('admin040').innerHTML=`<section><h2>감정 아이템 등록</h2>${[['name','정식 명칭'],['alias','약칭'],['category','분류'],['special','특수 옵션']].map(([k,n])=>`<label>${n}<input value="${esc(p[k])}" oninput="itemDraft.${k}=this.value"></label>`).join('')}<div id="itemopts040"></div>${btn('옵션 추가',"itemDraft.options.push({name:'',a:'',b:''});itemOpts040()")}${btn('저장','saveItem040()',true)}${btn('새 아이템','itemDraft=null;itemEdit=-1;itemAdmin040()')}</section><section><h2>등록 아이템</h2>${items040.map((x,i)=>`<div class="line"><span>${esc(x.name)}</span>${btn('수정',`itemEdit=${i};itemDraft=clone040(items040[${i}]);itemAdmin040()`)}${btn('삭제',`deleteItem040(${i})`)}</div>`).join('')}</section>`;itemOpts040()}
function itemOpts040(){$('itemopts040').innerHTML=itemDraft.options.map((o,i)=>`<div class="turn"><label>능력치 이름<input value="${esc(o.name)}" oninput="itemDraft.options[${i}].name=this.value"></label><div class="grid">${['a','b'].map((k,j)=>`<label>범위 값 ${j+1}<input type="number" value="${esc(o[k])}" oninput="itemDraft.options[${i}].${k}=this.value"></label>`).join('')}</div><small>입력 순서와 관계없이 큰 수치가 맥옵</small>${btn('삭제',`itemDraft.options.splice(${i},1);itemOpts040()`)}</div>`).join('')}
function saveItem040(){let p=clone040(itemDraft);if(!p.name.trim()||!p.options.length||p.options.some(o=>!o.name.trim()||String(o.a).trim()===''||String(o.b).trim()===''||!Number.isInteger(Number(o.a))||!Number.isInteger(Number(o.b))))return toast('이름과 정수 옵션 범위를 확인하세요');p.options=p.options.map(o=>({...o,a:Math.min(Number(o.a),Number(o.b)),b:Math.max(Number(o.a),Number(o.b))}));let a=items040.slice();if(itemEdit<0)a.push(p);else a[itemEdit]=p;if(persist040('items040v2',a)){items040=a;itemDraft=null;itemEdit=-1;itemIndex=0;itemValues={};itemAdmin040();toast('저장 완료')}}function deleteItem040(i){if(!confirm('삭제할까요?'))return;let a=items040.filter((_,j)=>i!==j);if(persist040('items040v2',a)){items040=a;itemIndex=0;itemValues={};itemDraft=null;itemEdit=-1;itemAdmin040()}}
const calc040=calc;calc=function(){calc040();app.querySelector('.tiles').insertAdjacentHTML('beforeend',tile(['assessor','아이템 옵션 감정기','맥옵 대비 능력치 및 딸 수 확인']).replace(ico('assessor'),ico('search')))};const home040=home;home=function(){home040();const homeTiles=app.querySelector('.tiles');if(homeTiles&&!homeTiles.querySelector("[onclick=\"go('assessor')\"]")){homeTiles.insertAdjacentHTML('beforeend',tile(['assessor','아이템 옵션 감정기','맥옵 대비 능력치 및 딸 수 확인']).replace(ico('assessor'),ico('search')))}app.innerHTML=app.innerHTML.replace('v0.3.1','v0.4.2')};const render040=render;render=function(){if(page==='assessor'){document.body.classList.remove('live');assessor040();$('nav').innerHTML=[['home','홈'],['pets','도감'],['rank','랭킹'],['calc','계산기'],['guide','공략']].map(([p,n])=>btn(ico(p)+`<span>${n}</span>`,`go('${p}')`,p==='calc')).join('')}else render040()};render();
