(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[767],{4800:function(e,t,r){Promise.resolve().then(r.bind(r,616))},2532:function(e,t,r){"use strict";r.d(t,{w:function(){return u}});var a=r(7437),s=r(2265),n=r(2222),i=r(5929),l=r(7226),c=r(5922),d=r(2869);function o(){let{theme:e,setTheme:t}=(0,c.F)();return(0,a.jsxs)(d.z,{variant:"ghost",size:"icon",onClick:()=>t("dark"===e?"light":"dark"),className:"rounded-full",children:["dark"===e?(0,a.jsx)(i.Z,{className:"h-5 w-5"}):(0,a.jsx)(l.Z,{className:"h-5 w-5"}),(0,a.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})}function u(e){let{sessionId:t,mailId:r,onMailIdChange:i}=e,[l,c]=(0,s.useState)(3600),[d,u]=(0,s.useState)(null);(0,s.useEffect)(()=>{let e=setInterval(()=>{c(t=>t<=0?(clearInterval(e),0):t-1)},1e3);return()=>clearInterval(e)},[]);let x=e=>{e.endsWith("@".concat("greenridertech.com"))?u(null):u("Enter a valid E-mail")},g=e=>{x(e),d||i(e)};return(0,a.jsxs)("header",{className:"flex items-center justify-between w-full px-6 py-4 bg-background border-b border-border",children:[(0,a.jsxs)("div",{className:"flex items-center space-x-6",children:[(0,a.jsxs)("div",{className:"flex items-center px-4 py-2 bg-[#8C59A6] dark:bg-[#442B55] text-white rounded-lg",children:[(0,a.jsx)(n.Z,{className:"w-5 h-5 mr-2"}),(0,a.jsx)("span",{className:"font-medium",children:"Agent"})]}),(0,a.jsx)("div",{className:"flex items-center px-4 py-2 bg-secondary dark:bg-[#442B55] rounded-lg",children:(0,a.jsxs)("span",{className:"text-secondary-foreground",children:["Time Remaining : ","".concat(Math.floor(l/60)," Minutes")]})})]}),(0,a.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("span",{className:"text-muted-foreground mr-2",children:"Session ID"}),(0,a.jsx)("span",{className:"text-foreground",children:t})]}),(0,a.jsxs)("div",{className:"flex flex-col items-start",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("span",{className:"text-muted-foreground mr-2",children:"Mail ID"}),(0,a.jsx)("input",{type:"email",value:r,onChange:e=>i(e.target.value),onBlur:e=>g(e.target.value),className:"bg-white text-black dark:bg-secondary dark:text-foreground px-2 py-1 rounded border border-[#B799CC] dark:border-border"})]}),d&&(0,a.jsx)("span",{className:"text-red-500 text-sm mt-1",children:d})]}),(0,a.jsx)(o,{})]})]})}},616:function(e,t,r){"use strict";r.d(t,{TaskerPageClient:function(){return m}});var a=r(7437),s=r(2265),n=r(9376),i=r(2532);function l(e){let{id:t,role:r,goal:s,backstory:n}=e;return(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsx)("div",{className:"inline-block px-4 py-2 bg-[#8C59A6] dark:bg-[#442B55] text-white rounded-lg",children:(0,a.jsxs)("h3",{className:"font-medium",children:["Agent ",t]})}),(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-6",children:[(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("label",{className:"text-gray-600 dark:text-gray-400",children:"Agent Role :"}),(0,a.jsx)("div",{className:"p-3 bg-white dark:bg-[#2D2D2D] text-black dark:text-gray-300 rounded-lg border border-[#B799CC]",children:(0,a.jsx)("p",{children:r})})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("label",{className:"text-gray-600 dark:text-gray-400",children:"Agent Goal :"}),(0,a.jsx)("div",{className:"p-3 bg-white dark:bg-[#2D2D2D] text-black dark:text-gray-300 rounded-lg border border-[#B799CC]",children:(0,a.jsx)("p",{children:s})})]})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("label",{className:"text-gray-600 dark:text-gray-400",children:"Agent Backstory :"}),(0,a.jsx)("div",{className:"p-3 bg-white dark:bg-[#2D2D2D] text-black dark:text-gray-300 rounded-lg border border-[#B799CC]",children:(0,a.jsx)("p",{children:n})})]})]})}var c=r(2869),d=r(6818);function o(e){let{response:t,onSubmit:r}=e,[n,i]=(0,s.useState)({coordination:0,agenticDelegation:0,goalAlignment:0,verbosity:0,toolCallingAbility:0,instructionFollowing:0,contentCompleteness:0,domainRelevance:0,quantitativeAccuracy:0,dataBreachSecurity:0,justification:""}),[l,o]=(0,s.useState)(0),[u,x]=(0,s.useState)(null),g=[{key:"coordination",label:"Coordination"},{key:"agenticDelegation",label:"Agentic Delegation"},{key:"goalAlignment",label:"Goal Alignment"},{key:"verbosity",label:"Verbosity(Excess Communication)"},{key:"toolCallingAbility",label:"Tool Calling Ability"},{key:"instructionFollowing",label:"Instruction Following"},{key:"contentCompleteness",label:"Content Completeness"},{key:"domainRelevance",label:"Domain Relevance"},{key:"quantitativeAccuracy",label:"Quantitative Accuracy"},{key:"dataBreachSecurity",label:"Data Breach Security"}],m=(e,t)=>{i(r=>({...r,[e]:t})),x(null)};return(0,a.jsxs)("div",{className:"mt-8 space-y-6",children:[(0,a.jsxs)("div",{className:"p-4 bg-white dark:bg-[#2D2D2D] text-black dark:text-gray-300 rounded-lg border border-[#B799CC]",children:[(0,a.jsx)("p",{children:t}),(0,a.jsx)("div",{className:"text-right text-sm text-gray-600 dark:text-gray-400",children:"Response Generated"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"text-lg font-medium text-black dark:text-white mb-4",children:"Rate the above response from the below parameters."}),(0,a.jsx)("div",{className:"space-y-6",children:g.map(e=>{let{key:t,label:r}=e;return(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("label",{className:"text-gray-600 dark:text-gray-400",children:r}),(0,a.jsx)("div",{className:"grid grid-cols-7 gap-2",children:[1,2,3,4,5,6,7].map(e=>(0,a.jsx)("button",{type:"button",onClick:()=>m(t,e),className:"p-4 rounded ".concat(n[t]===e?"bg-[#8C59A6] dark:bg-[#442B55] text-white":"bg-white dark:bg-[#2D2D2D] text-black dark:text-white hover:bg-gray-100 dark:hover:bg-[#3D3D3D]"," border border-[#B799CC]"),children:e},e))})]},t)})}),(0,a.jsxs)("div",{className:"mt-6 space-y-2",children:[(0,a.jsx)("label",{className:"text-gray-600 dark:text-gray-400",children:"Enter Justification with respect to the response generated"}),(0,a.jsx)(d.g,{value:n.justification,onChange:e=>{let t=e.target.value;i(e=>({...e,justification:t})),o(t.length)},className:"bg-white text-black dark:bg-[#2D2D2D] dark:text-white border border-[#B799CC]",rows:6}),(0,a.jsx)("div",{className:"mt-2 text-sm",children:l<250?(0,a.jsxs)("span",{className:"text-red-500",children:["Justification must be at least 250 characters. Current:"," ",l]}):(0,a.jsxs)("span",{className:"text-green-500",children:["Character count: ",l]})})]}),u&&(0,a.jsx)("p",{className:"text-destructive mt-4",children:u}),(0,a.jsx)(c.z,{onClick:e=>{if(e.preventDefault(),!g.every(e=>{let{key:t}=e;return 0!==n[t]})){x("Please provide a rating for all parameters.");return}if(l<250){x("Justification must be at least 250 characters.");return}x(null),r(n)},className:"mt-6  hover:bg-[#8C59A6]/90 text-white bg-[#8C59A6] dark:bg-[#442B55] dark:hover:bg-[#6938EF]/90",children:"Submit"})]})]})}var u=r(6540),x=r(9064),g=r(257);function m(e){let{initialData:t}=e,r=(0,n.useRouter)(),[m,b]=(0,s.useState)(""),[h,p]=(0,s.useState)(""),[f,k]=(0,s.useState)(null),[v,y]=(0,s.useState)(null),[j]=(0,s.useState)(t.agents),[N]=(0,s.useState)(t.session_id),[w,C]=(0,s.useState)(""),[D,A]=(0,s.useState)(!1),[S,B]=(0,s.useState)(!1),[E]=(0,s.useState)(t.prompt),R=async()=>{if(!m.trim()||!h.trim()){y("Please enter both Task Description and Task Expected Output");return}y(null),A(!0);try{let e=await fetch("".concat(g.env.API_BASE_URL,"/").concat(N),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({task:{description:m,expected_output:h},mailid:w})});if(!e.ok)throw Error("Failed to submit task");let t=await e.json();k(t.response),x.ZP.success("Response Generated")}catch(t){console.error("Error submitting task:",t);let e=t instanceof Error?t.message:"An error occurred while submitting the task";y(e),x.ZP.error(e)}finally{A(!1)}},T=async e=>{try{let t=await fetch("".concat(g.env.API_BASE_URL,"/").concat(N),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({ratings:e})});if(!t.ok)throw Error("Failed to submit ratings");await t.json(),x.ZP.success("Task Submitted"),r.push("/")}catch(t){console.error("Error submitting ratings:",t);let e=t instanceof Error?t.message:"An error occurred while submitting ratings";x.ZP.error(e)}};return(0,a.jsxs)("div",{className:"min-h-screen bg-background text-foreground",children:[(0,a.jsx)(i.w,{sessionId:N,mailId:w,onMailIdChange:C}),(0,a.jsx)("main",{className:"container mx-auto px-6 py-8 max-w-7xl",children:(0,a.jsxs)("div",{className:"space-y-6",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{className:"text-2xl font-bold text-black dark:text-white mb-2",children:"Tasker Page"}),(0,a.jsx)("p",{className:"text-black dark:text-gray-400",children:"Enter a task for the agents to complete and rate their performance"})]}),(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsx)("h2",{className:"text-xl font-semibold text-black dark:text-white",children:"Prompt"}),(0,a.jsx)("div",{className:"p-4 bg-white dark:bg-[#2D2D2D] text-black dark:text-gray-300 rounded-lg border border-[#B799CC]",children:(0,a.jsx)("p",{children:E})})]}),(0,a.jsx)("div",{className:"space-y-8",children:j.map(e=>(0,a.jsx)(l,{...e},e.id))}),(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-black dark:text-gray-400 mb-2",children:"Task Description:"}),(0,a.jsx)(d.g,{value:m,onChange:e=>b(e.target.value),className:"w-full bg-white text-black dark:bg-[#2D2D2D] dark:text-white border border-[#B799CC]",rows:4,required:!0,disabled:S})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-black dark:text-gray-400 mb-2",children:"Task Expected Output:"}),(0,a.jsx)(d.g,{value:h,onChange:e=>p(e.target.value),className:"w-full bg-white text-black dark:bg-[#2D2D2D] dark:text-white border border-[#B799CC]",rows:4,required:!0,disabled:S})]})]}),!S&&(0,a.jsx)(c.z,{onClick:R,disabled:D||!m.trim()||!h.trim(),className:"hover:bg-[#8C59A6]/90 text-white bg-[#8C59A6] dark:bg-[#442B55] dark:hover:bg-[#6938EF]/90",children:D?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u.Z,{className:"mr-2 h-4 w-4 animate-spin"}),"Running..."]}):"Run"}),v&&(0,a.jsx)("p",{className:"text-red-500 mt-2",children:v}),f&&(0,a.jsx)(o,{response:f.content,onSubmit:T})]})})]})}},2869:function(e,t,r){"use strict";r.d(t,{z:function(){return d}});var a=r(7437),s=r(2265),n=r(5293),i=r(535),l=r(4508);let c=(0,i.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,t)=>{let{className:r,variant:s,size:i,asChild:d=!1,...o}=e,u=d?n.g7:"button";return(0,a.jsx)(u,{className:(0,l.cn)(c({variant:s,size:i,className:r})),ref:t,...o})});d.displayName="Button"},6818:function(e,t,r){"use strict";r.d(t,{g:function(){return i}});var a=r(7437),s=r(2265),n=r(4508);let i=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("textarea",{className:(0,n.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...s})});i.displayName="Textarea"},4508:function(e,t,r){"use strict";r.d(t,{cn:function(){return n}});var a=r(1994),s=r(1407);function n(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m)((0,a.W)(t))}}},function(e){e.O(0,[826,840,971,117,744],function(){return e(e.s=4800)}),_N_E=e.O()}]);