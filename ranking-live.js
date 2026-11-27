/* v0.5.1: 공식 공개 랭킹 표의 검토/적용 기능. 승인 UI 스타일 재사용.
 * 데이터는 브라우저 로컬 저장, 자동 수집 및 서버 동기화 없음.
 */
const RANK_STORAGE_051='hwansoonyang_ranks_051';
const rankOverlay_051={};
function rankAll_051(){
  const records={};
  for(const item of [...OFFICIAL_RANK_SEED_051,...Object.values(rankOverlay_051||{})]){
    if(rankValidate_051(item))records['id:'+officialPetId(item.url)]=item;
  }
  return records;
}
function rankItemForPet_051(p,data){
  const id=normalizeSourceId(petSources_050.get(p)?.sourceId);
  if(id)return data['id:'+id];
  if(PETS.filter(row=>row[0]===p[0]).length!==1)return undefined;
  const matches=Object.values(data).filter(item=>item.name===p[0]);
  return matches.length===1?matches[0]:undefined;
}
function rankPetForItem_051(item,data){
  const id=officialPetId(item.url);
  return PETS.find(p=>normalizeSourceId(petSources_050.get(p)?.sourceId)===id)||
    PETS.find(p=>!petSources_050.has(p)&&p[0]===item.name&&rankItemForPet_051(p,data)===item);
}
function rankScore_051(a){return a[2]+a[3]+a[4]+a[5]/4}
function rankBaseline_051(p,level){return [0,1,2,3].map(i=>Math.trunc(Number(p[i+1])+Number(p[i+5])*(level-1)));}
function rankDelta_051(n){return delta(n)}
function rankStatsFromSource_054(item){
  const t=item?.petStats;
  if(!t||!Array.isArray(t.initial)||!Array.isArray(t.growth)||t.initial.length!==4||t.growth.length!==4)return null;
  if(!t.initial.every(x=>Number.isInteger(x)&&x>=0)||!t.growth.every(x=>typeof x==='number'&&Number.isFinite(x)&&x>=0))return null;
  return t;
}
function rankBaselineItem_054(p,item,level){
  if(p)return rankBaseline_051(p,level);
  const s=rankStatsFromSource_054(item);
  return s?s.initial.map((v,i)=>Math.trunc(v+s.growth[i]*(level-1))):null;
}
function rankStatCard_051(r,p,item){const current=r.slice(2,6),baseline=rankBaselineItem_054(p,item,r[1]);return `<article class="rankcard"><div class="line"><strong>${esc(r[0])}</strong><small>Lv.${r[1]}</small></div><div class="combat"><small>전투력</small><div class="big">${rankScore_051(r).toFixed(2)}</div>${baseline?`<small>정석 S급 ${combat(baseline).toFixed(2)}</small><div>${rankDelta_051(rankScore_051(r)-combat(baseline))}</div>`:'<small>정석 능력치 데이터 미수집</small>'}</div><div class="stats">${current.map((v,i)=>`<div><small>${['공격','방어','순발','체력'][i]}</small><h3>${v}</h3>${baseline?`<small>S ${baseline[i]}</small><br>${rankDelta_051(v-baseline[i])}`:'<small>S —</small>'}</div>`).join('')}</div></article>`}
let rankFilter_051='';let rankSort_051=0;let rankMode_051=0;
rank=function(){app.innerHTML=`<h1>${ico('rank')} 명예의 전당</h1><p class="muted">최근 수집일 ${esc(Object.values(rankAll_051()).map(item=>item.checkedAt).sort().pop()||'미수집')} · 수집 시점 기준</p><section><div class="roles">${btn('페트 검색','rankMode_051=0;rank()',rankMode_051===0)}${btn('랭커 검색','rankMode_051=1;rank()',rankMode_051===1)}</div><input aria-label="랭킹 검색" placeholder="${rankMode_051?'랭커':'페트'} 이름 검색" value="${esc(rankFilter_051)}" oninput="rankFilter_051=this.value;rankList()"><div class="roles sort">${['전투력','공','방','순','체'].map((n,i)=>btn(ico(['rank','sword','shield','speed','heart'][i])+n,`rankSort_051=${i};rankList()`,rankSort_051===i)).join('')}</div><p class="muted">확인된 페트 ${Object.keys(rankAll_051()).length}종 · 상세페이지 기준 랭커가 없는 페트는 별도 표시 · 나머지는 미수집</p></section><div id="ranklist"></div>`;rankList();};
rankList=function(){const data=rankAll_051(),query=rankFilter_051.trim().toLocaleLowerCase(),list=Object.values(data).filter(x=>!query||(rankMode_051?x.entries.some(r=>r[0].toLocaleLowerCase().includes(query)):x.name.toLocaleLowerCase().includes(query))).sort((a,b)=>a.name.localeCompare(b.name,'ko'));$('ranklist').innerHTML=list.length?list.map(x=>{const p=rankPetForItem_051(x,data),scores=x.entries.map(r=>r.slice());scores.sort((a,b)=>{const j=rankSort_051;return (j===0?rankScore_051(b)-rankScore_051(a):b[j+1]-a[j+1])||rankScore_051(b)-rankScore_051(a)});return `<section><details ${query?'open':''}><summary>${ico('rank')} <strong>${esc(x.name)}</strong> · ${x.entries.length?`TOP ${Math.min(x.entries.length,3)}`:'등록 랭커 없음'}</summary><p class="muted">공식 공개 기록 · 확인 ${esc(x.checkedAt)} · <a href="${esc(x.url)}" target="_blank" rel="noopener noreferrer">원본 확인 ↗</a></p>${scores.length?scores.slice(0,3).map((r,i)=>`<div class="rank-position"><strong class="rank-position-label">${i+1}위 · ${esc(r[0])}</strong>${rankStatCard_051(r,p,x)}</div>`).join(''):'<div class="empty">공식 상세페이지에 등록된 랭킹이 없습니다.</div>'}</details></section>`}).join(''):`<section class="empty">${query?'검토된 자료에 검색 결과가 없습니다. 미수집 페트는 관리자에서 추가할 수 있어요.':'등록된 기록이 없습니다.'}</section>`};
const detail051=detail;detail=function(i){detail051(i);const p=PETS[i],item=rankItemForPet_051(p,rankAll_051());app.insertAdjacentHTML('beforeend',`<section><h2>${ico('rank')} 페트별 TOP 3</h2>${!item?'<p class="muted">아직 랭킹 자료를 수집하지 않았습니다.</p>':`<p class="muted">공식 공개 기록 · 확인 ${esc(item.checkedAt)}</p>${item.entries.length?item.entries.slice().sort((a,b)=>rankScore_051(b)-rankScore_051(a)).slice(0,3).map((r,i)=>`<div class="rank-position"><strong>${i+1}위 · ${esc(r[0])}</strong>${rankStatCard_051(r,p,item)}</div>`).join(''):'<p class="muted">공식 상세페이지에 등록된 랭커가 없습니다.</p>'}<p><a href="${esc(item.url)}" target="_blank" rel="noopener noreferrer">공식 상세페이지 ↗</a></p>`}</section>`)};
function rankPetStatsValid_054(t){return t===undefined||!!rankStatsFromSource_054({petStats:t});}
function rankMetadataValid_051(x){
  const id=officialPetId(x.url);
  return !!id&&(x.sourceId===undefined||normalizeSourceId(x.sourceId)===id)&&
    (x.status===undefined||x.status===(x.entries.length?'ranked':'empty'))&&
    (x.collectedAt===undefined||(typeof x.collectedAt==='string'&&
      /^\d{4}-\d\d-\d\dT/.test(x.collectedAt)&&Number.isFinite(Date.parse(x.collectedAt))));
}
function rankValidate_051(x){return rankPetStatsValid_054(x?.petStats)&&x&&typeof x==='object'&&!Array.isArray(x)&&typeof x.name==='string'&&x.name.trim().length>0&&x.name.length<120&&typeof x.url==='string'&&/^https:\/\/www\.hwansoo\.top\/bbs\/board\.php\?bo_table=pets&wr_id=\d+$/.test(x.url)&&typeof x.checkedAt==='string'&&/^\d{4}-\d\d-\d\d$/.test(x.checkedAt)&&Array.isArray(x.entries)&&x.entries.length<=3&&x.entries.every(r=>Array.isArray(r)&&r.length===6&&typeof r[0]==='string'&&r[0].trim().length>0&&r[0].length<90&&r.slice(1).every(n=>Number.isInteger(n)&&n>=0&&n<100000)&&r[1]>=1&&r[1]<=300)&&rankMetadataValid_051(x)}
