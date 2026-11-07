import { TOPICS } from './content.js';

const byId = new Map(TOPICS.map(t => [t.id, t]));
const normalize = s => s.toLowerCase().normalize('NFKD').replace(/[’‘]/g, "'").replace(/[^a-z0-9+#]+/g, ' ').trim();
const stop = new Set('a an and are as at be but by can did do does for from had has have how i if in is it its me my of on or so tell that the their them then there this to was we were what when where which who why will with you your yours about more please really just matthew ngoy'.split(' '));
const tokens = s => normalize(s).split(' ').filter(w => w.length > 1 && !stop.has(w));
const hasPhrase = (q,k) => ` ${q} `.includes(` ${normalize(k)} `);
let context = null;
const visited = new Map();
const tabFor = id => /samurai|community|ifwy|china/.test(id) ? 'experience' : /research|debate|iuse|genz|orleans/.test(id) ? 'research' : /internship|camp|radio|tip_/.test(id) ? 'security' : /project|hackathon|pycon/.test(id) ? 'projects' : 'timeline';
const labelFor = {experience:'Leadership & teaching',research:'Research',security:'Security experience',projects:'Projects',timeline:'Timeline',industry:'Industry resume',research_resume:'Research resume'};
const action = tab => ({label:labelFor[tab],tab});

function topicAnswer(topic, query, more = false) {
  const qw = tokens(query), seen = visited.get(topic.id) || new Set();
  const aliases={website:'portfolio',ctf:'cougarctf',graduate:'graduation',contribute:'helped',contributed:'helped',contribution:'helped'};
  const matchWords=qw.flatMap(w=>[w,aliases[w]].filter(Boolean));
  let ranked = topic.facts.map((body,i) => ({body,i,score:tokens(body).filter(w => matchWords.includes(w)).length + (/\b(role|contribute|contributed|contribution)\b/.test(query)&&/helped|refined|contributed/i.test(body)?8:0)}));
  if (more) ranked = ranked.filter(f => !seen.has(f.i));
  if (!ranked.length) return {title:`That's everything in my notes on ${topic.title.toLowerCase()}`,body:'You can explore the related section or ask about another project.',actions:[action(tabFor(topic.id))],suggestions:['What are you working on now?','Show me your resumes']};
  ranked.sort((a,b) => b.score-a.score || a.i-b.i);
  const selected=[ranked[0]];
  if (ranked[1] && ranked[0].score === 0 && ranked[0].body.length + ranked[1].body.length < 460) selected.push(ranked[1]);
  selected.forEach(f=>seen.add(f.i)); visited.set(topic.id,seen); context=topic.id;
  return {tag:topic.tag,title:topic.title,body:selected.map(f=>f.body).join(' '),topicId:topic.id,actions:[action(tabFor(topic.id))],suggestions:['Tell me more',topic.next.replace(/^ask me /i,'')],footer:'Explore the related section below.'};
}
function choice(title,body,suggestions,actions=[]) { context=null; return {tag:'🐸 portfolio guide',title,body,suggestions,actions}; }
export function resetConversation() { context=null; visited.clear(); }
export function makeFallbackCard() {
  context=null;
  return choice('I don’t have that in my portfolio notes',"I can help you explore Matthew's projects, research, experience and resumes. For anything the notes don't cover, email **ngoym@kean.edu**.",['What have you built?','Tell me about your research','How can I contact you?']);
}
export function answerQuestion(raw) {
  const query=String(raw||'').trim().slice(0,300), q=normalize(query);
  if (!q) return null;
  if (/\b(ignore|pretend|system prompt|jailbreak|weather|recipe|president|bitcoin|stock price)\b/.test(q)) return makeFallbackCard();
  if (/^(tell me )?(more|go on|what else|keep going|continue)( please)?$/.test(q)) {
    return context ? topicAnswer(byId.get(context),'',true) : choice('What would you like more on?','Pick a topic to get started.',['Tell me about Debate Coach','Tell me about your internship','What did you do in Seoul?']);
  }
  if (/\b(resume|resumes|cv|download)\b/.test(q)) {
    context=null;
    const actions=/research/.test(q)?[action('research_resume')]:/industry/.test(q)?[action('industry')]:[action('industry'),action('research_resume')];
    return choice('Read a resume here','The **industry resume** is one page; the **research resume** is two. Open either in the viewer below, then use Download PDF if you want a copy.',['What are your technical skills?'],actions);
  }
  if (/\b(contact|email|linkedin|reach|hire|hiring|recruiter)\b/.test(q)) {
    context='contact';return {...topicAnswer(byId.get('contact'),q),actions:[{label:'Email Matthew',href:'mailto:ngoym@kean.edu'},{label:'LinkedIn',href:'https://www.linkedin.com/in/matthewngoy/'},action('industry')]};
  }
  if (/^(hi|hello|hey|yo)$/.test(q)) return choice('Hey! I’m Matthew’s portfolio guide','Ask about a project, explore his experience, or read either resume. My answers come from the notes on this site.',['What are you working on now?','What have you built?','Show me your resumes']);
  if (/\b(current|currently|right now|working on now|latest)\b/.test(q)) {
    context=null;return choice('What I’m working on','This fall: **Mobile ACDC** solar-power and rack-monitoring design, **CougarCTF 2027** with two teammates, and AI-verification research with **Dr. Boyang Li**. I also mentor students through Code Samurai and serve as WiCyS Secretary.',['Tell me about Mobile ACDC','Tell me about CougarCTF','Tell me about your research'],[action('projects'),action('security')]);
  }
  if (/^(tell me about )?(your )?(research|research work)$/.test(q)) return choice('Research across AI and data','My work spans **AI verification**, **Debate Coach**, **adaptive learning**, and **Gen Z housing demographics**. Each project asks a different question, and my role ranges from team contributor to sole student author.',['Tell me about HadAgent','What did you contribute to Debate Coach?','Tell me about Gen Z housing'],[action('research')]);
  if (/\b(intern|internship|internships)\b/.test(q) && !/summer|fall|acdc|npcir/.test(q)) {
    context=null;return choice('Two roles at Kean’s Center for Cybersecurity','In **summer 2026**, I classified nonprofit cyber incidents, built an IoT lab and taught at STEaM Camp. In **fall 2026**, I returned as a research intern focused on Mobile ACDC power and monitoring design.',['Tell me about the summer internship','Tell me about the fall internship'],[action('security')]);
  }
  if (/\b(certification|certifications|certified|certs)\b/.test(q)) return choice('No industry certifications listed','My current skills come from coursework, research and projects. I don’t list an industry certification.',['What are your technical skills?'],[action('industry')]);
  const explicit=[[/\b(debate|336|sycophancy)\b/,'debate_coach'],[/\b(gen z|housing|counties|rent)\b/,'gmis2026_genz'],[/\b(hadagent|verifier|verification|survey|proof of inference)\b/,'research_verification'],[/\b(fall internship|acdc|rack)\b/,'fall_internship'],[/\b(summer internship|npcir|iot|arduino)\b/,'well_internship'],[/\b(cougarctf|ctf|harness|portfolio|built|projects)\b/,'projects'],[/\b(pocketwatch)\b/,'hackathon'],[/\b(seoul|korea)\b/,'ifwy_seoul'],[/\b(china|beijing|wenzhou)\b/,'china'],[/\b(skills|languages|tech stack)\b/,'skills'],[/\b(graduat|graduation|gpa|degree)\b/,'about']];
  for (const [re,id] of explicit) if(re.test(q)) return topicAnswer(byId.get(id),q);
  const qw=tokens(q);
  const ranked=TOPICS.map(t=>({t,score:t.keywords.reduce((s,k)=>s+(hasPhrase(q,k)?Math.min(10,2+normalize(k).split(' ').length*2):0),0)})).sort((a,b)=>b.score-a.score);
  if(ranked[0].score>=4) return topicAnswer(ranked[0].t,q);
  // Follow-up pronouns can refer back, but unrelated questions never silently inherit context.
  if(context && /\b(that project|that work|your role in it|what did you learn)\b/.test(q)) return topicAnswer(byId.get(context),q,true);
  return makeFallbackCard();
}
