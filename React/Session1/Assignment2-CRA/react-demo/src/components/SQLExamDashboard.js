import { useState, useEffect, useRef } from "react";

const questions = [
 
  { "id": 1, "topic": "SELECT Queries", "level": "Medium", "question": "What is the result of SELECT 5/2 in MySQL?", "options": ["2", "2.5", "2.5000", "Error"], "answer": 2, "explanation": "MySQL returns decimal result 2.5000 for integer division using / operator." },

  { "id": 2, "topic": "SELECT Queries", "level": "Medium", "question": "Which keyword is used to assign a temporary name to a column in result set?", "options": ["RENAME", "AS", "LABEL", "NAME"], "answer": 1, "explanation": "AS keyword assigns an alias to a column or table in the query." },

  { "id": 3, "topic": "WHERE Logic", "level": "Medium", "question": "What does NOT IN (SELECT ...) return if the subquery returns any NULL value?", "options": ["Correct filtered rows", "All rows", "No rows", "Error"], "answer": 2, "explanation": "If subquery returns any NULL, NOT IN comparison with NULL is UNKNOWN, so no rows are returned." },

  { "id": 4, "topic": "WHERE Logic", "level": "Hard", "question": "Which of these WHERE conditions is NOT sargable (cannot use index efficiently)?", "options": ["WHERE id = 5", "WHERE YEAR(created_at) = 2023", "WHERE salary > 5000", "WHERE email = 'a@b.com'"], "answer": 1, "explanation": "Applying YEAR() function on a column breaks index usage; use range comparison instead." },

  { "id": 5, "topic": "Joins", "level": "Medium", "question": "What happens when ON condition is omitted in an explicit JOIN?", "options": ["Syntax error always", "Returns only matching rows", "Produces Cartesian product", "Returns empty result"], "answer": 2, "explanation": "Without ON condition, JOIN behaves like CROSS JOIN producing a Cartesian product." },

  { "id": 6, "topic": "Joins", "level": "Hard", "question": "Which join returns rows from the right table even when there is no match in the left table?", "options": ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "NATURAL JOIN"], "answer": 2, "explanation": "RIGHT JOIN preserves all rows from right table, filling NULLs for unmatched left columns." },

  { "id": 7, "topic": "Subqueries", "level": "Medium", "question": "Which keyword is used to compare a value with any single value returned by a subquery?", "options": ["ALL", "SOME", "EXISTS", "IN only"], "answer": 1, "explanation": "SOME (synonym of ANY) returns TRUE if condition is true for at least one subquery value." },

  { "id": 8, "topic": "Subqueries", "level": "Hard", "question": "What is a derived table in SQL?", "options": ["A table with computed columns", "A subquery used in FROM clause", "A view with joins", "A temporary table"], "answer": 1, "explanation": "A derived table is a subquery placed in the FROM clause and given an alias." },

  { "id": 9, "topic": "Aggregation", "level": "Medium", "question": "What does GROUP BY ROLLUP do?", "options": ["Groups only by first column", "Produces subtotals and grand total", "Removes duplicate groups", "Sorts grouped results"], "answer": 1, "explanation": "ROLLUP generates subtotal rows and a grand total row in addition to regular groups." },

  { "id": 10, "topic": "Aggregation", "level": "Medium", "question": "Which aggregate function returns the minimum value in a column?", "options": ["LOWEST()", "FIRST()", "MIN()", "BOTTOM()"], "answer": 2, "explanation": "MIN() is the standard SQL function to retrieve the smallest value in a column." },

  { "id": 11, "topic": "Functions", "level": "Medium", "question": "Which function pads a string on the left to reach a specified length?", "options": ["RPAD()", "LPAD()", "PAD_LEFT()", "FILL()"], "answer": 1, "explanation": "LPAD(str, length, pad_str) pads string from the left side." },

  { "id": 12, "topic": "Functions", "level": "Medium", "question": "What does IFNULL(NULL, 'default') return?", "options": ["NULL", "0", "'default'", "Error"], "answer": 2, "explanation": "IFNULL returns the second argument when the first is NULL." },

  { "id": 13, "topic": "Date Functions", "level": "Medium", "question": "Which function adds a specific interval to a date?", "options": ["DATE_ADD()", "ADD_DATE()", "DATE_PLUS()", "DATEADD()"], "answer": 0, "explanation": "DATE_ADD(date, INTERVAL value unit) adds time intervals to a date." },

  { "id": 14, "topic": "Date Functions", "level": "Medium", "question": "What does EXTRACT(MONTH FROM '2024-07-15') return?", "options": ["2024", "7", "15", "07-15"], "answer": 1, "explanation": "EXTRACT pulls a specific date part; MONTH returns 7 for July." },

  { "id": 15, "topic": "CRUD", "level": "Medium", "question": "Which INSERT syntax inserts multiple rows in a single statement?", "options": ["INSERT INTO t VALUES (1),(2),(3)", "INSERT MULTIPLE INTO t", "INSERT INTO t ROWS (1,2,3)", "MULTI INSERT INTO t"], "answer": 0, "explanation": "Multiple value sets separated by commas insert multiple rows in one INSERT." },

  { "id": 16, "topic": "CRUD", "level": "Medium", "question": "What does INSERT IGNORE do when a duplicate key is encountered?", "options": ["Throws error and stops", "Skips the duplicate row silently", "Updates the existing row", "Deletes old row and inserts new"], "answer": 1, "explanation": "INSERT IGNORE skips rows that would cause duplicate key violations without error." },

  { "id": 17, "topic": "Indexes", "level": "Medium", "question": "Which index type is used for geographic and spatial data queries?", "options": ["B-Tree", "Hash", "Full-Text", "Spatial"], "answer": 3, "explanation": "Spatial indexes are designed for geometric and geographic data types." },

  { "id": 18, "topic": "Indexes", "level": "Hard", "question": "What is a covering index?", "options": ["An index that spans all tables", "An index containing all columns needed by a query", "A primary key index", "An index with no duplicates"], "answer": 1, "explanation": "A covering index satisfies the entire query from the index alone without accessing table rows." },

  { "id": 19, "topic": "Transactions", "level": "Medium", "question": "Which command starts an explicit transaction in MySQL?", "options": ["TRANSACTION BEGIN", "START TRANSACTION", "OPEN TRANSACTION", "BEGIN WORK only"], "answer": 1, "explanation": "START TRANSACTION explicitly begins a new transaction in MySQL." },

  { "id": 20, "topic": "Transactions", "level": "Hard", "question": "What is a phantom read?", "options": ["Reading deleted data", "Reading uncommitted changes", "Re-running query returns new rows inserted by another transaction", "Reading same row twice with different values"], "answer": 2, "explanation": "Phantom reads occur when a re-executed query sees rows added by another committed transaction." },

  { "id": 21, "topic": "Constraints", "level": "Medium", "question": "What does ON DELETE CASCADE do in a foreign key constraint?", "options": ["Prevents deletion of parent row", "Deletes child rows automatically when parent is deleted", "Sets child column to NULL on parent delete", "Throws an error on delete"], "answer": 1, "explanation": "ON DELETE CASCADE automatically removes child rows when the referenced parent row is deleted." },

  { "id": 22, "topic": "Constraints", "level": "Medium", "question": "Which of these is NOT a valid referential action for a foreign key?", "options": ["CASCADE", "SET NULL", "RESTRICT", "IGNORE"], "answer": 3, "explanation": "IGNORE is not a valid foreign key referential action; valid ones are CASCADE, SET NULL, RESTRICT, NO ACTION, SET DEFAULT." },

  { "id": 23, "topic": "Performance", "level": "Medium", "question": "What does EXPLAIN in front of a query do?", "options": ["Executes the query faster", "Shows execution plan without running the query", "Describes table structure", "Validates query syntax only"], "answer": 1, "explanation": "EXPLAIN shows the query execution plan including index usage and join types." },

  { "id": 24, "topic": "Performance", "level": "Hard", "question": "Which JOIN order principle does the MySQL optimizer follow by default?", "options": ["Always left to right as written", "Smallest result set first to reduce intermediate rows", "Alphabetical table order", "Random order"], "answer": 1, "explanation": "MySQL optimizer reorders joins to minimize intermediate result sizes for better performance." },

  { "id": 25, "topic": "Execution Logic", "level": "Medium", "question": "Which statement about HAVING vs WHERE is correct?", "options": ["Both filter before grouping", "WHERE filters rows; HAVING filters groups", "HAVING is faster than WHERE", "WHERE works only with aggregate functions"], "answer": 1, "explanation": "WHERE filters individual rows before grouping; HAVING filters after aggregation." },

  { "id": 26, "topic": "NULL Logic", "level": "Medium", "question": "What does NULL = NULL evaluate to in SQL?", "options": ["TRUE", "FALSE", "NULL", "1"], "answer": 2, "explanation": "Comparing NULL with = yields NULL (UNKNOWN), not TRUE. Use IS NULL to check for NULLs." },

  { "id": 27, "topic": "NULL Logic", "level": "Medium", "question": "Which function returns the first non-NULL value from a list of arguments?", "options": ["IFNULL()", "NULLIF()", "COALESCE()", "NVL()"], "answer": 2, "explanation": "COALESCE() accepts multiple arguments and returns the first non-NULL value among them." },

  { "id": 28, "topic": "Views", "level": "Medium", "question": "Can you always perform INSERT through a view?", "options": ["Yes always", "No, never", "Only if view is based on a single table with no aggregation", "Only with stored procedures"], "answer": 2, "explanation": "Views are updatable only when based on a single table without DISTINCT, GROUP BY, aggregates, or subqueries." },

  { "id": 29, "topic": "Triggers", "level": "Medium", "question": "In a BEFORE INSERT trigger, what does modifying NEW.column_value do?", "options": ["Has no effect", "Changes the value that will actually be inserted", "Throws an error", "Creates a new column"], "answer": 1, "explanation": "Modifying NEW values in a BEFORE trigger changes what gets written to the table." },

  { "id": 30, "topic": "Schema Design", "level": "Medium", "question": "What is denormalization used for?", "options": ["Reducing data redundancy", "Improving read query performance by adding redundancy", "Enforcing data integrity", "Creating foreign keys"], "answer": 1, "explanation": "Denormalization intentionally adds redundancy to reduce JOIN overhead and speed up reads." },

  { "id": 31, "topic": "Security", "level": "Medium", "question": "What is SQL injection?", "options": ["Inserting bulk data via SQL", "Malicious SQL inserted through input fields to manipulate queries", "A method to inject stored procedures", "Encrypting SQL queries"], "answer": 1, "explanation": "SQL injection attacks embed malicious SQL into input data to manipulate or expose database content." },

  { "id": 32, "topic": "Data Types", "level": "Medium", "question": "What is the difference between CHAR(10) and VARCHAR(10)?", "options": ["No difference", "CHAR always uses 10 bytes; VARCHAR uses only what's needed", "VARCHAR is faster always", "CHAR allows NULL; VARCHAR does not"], "answer": 1, "explanation": "CHAR is fixed-length and pads with spaces; VARCHAR stores only actual characters used." },

  { "id": 33, "topic": "Data Types", "level": "Medium", "question": "Which data type is best suited for storing a boolean flag in MySQL?", "options": ["BIT(1)", "CHAR(1)", "TINYINT(1)", "Both A and C"], "answer": 3, "explanation": "MySQL uses TINYINT(1) internally for BOOLEAN; BIT(1) also works for single-bit flags." },

  { "id": 34, "topic": "Stored Procedures", "level": "Medium", "question": "Which statement correctly calls a stored procedure named get_users?", "options": ["EXECUTE get_users()", "RUN get_users()", "CALL get_users()", "EXEC get_users()"], "answer": 2, "explanation": "CALL is the MySQL syntax for invoking stored procedures." },

  { "id": 35, "topic": "Window Functions", "level": "Hard", "question": "What does PARTITION BY do inside a window function?", "options": ["Groups rows and collapses them like GROUP BY", "Divides rows into groups for window calculation without collapsing", "Filters rows before calculation", "Orders rows within the window"], "answer": 1, "explanation": "PARTITION BY divides the result set into groups for window functions while keeping all rows intact, unlike GROUP BY which collapses them." }

];

const TOPICS = [...new Set(questions.map(q => q.topic))];
const levelConfig = {
  Easy:   { color: "#4ade80", bg: "rgba(74,222,128,0.08)",   border: "#4ade8044" },
  Medium: { color: "#fbbf24", bg: "rgba(251,191,36,0.08)",   border: "#fbbf2444" },
  Hard:   { color: "#f87171", bg: "rgba(248,113,113,0.08)",  border: "#f8717144" }
};

export default function SQLExamDashboard() {
  const [screen, setScreen] = useState("home");
  const [config, setConfig] = useState({ topics: [...TOPICS], level: "All", count: 20 });
  const [examQ, setExamQ] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selected, setSelected] = useState(null);
  const [showExp, setShowExp] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [running, setRunning] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);
  const [reviewIdx, setReviewIdx] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (running) {
      timerRef.current = setInterval(() => {
        setTimeLeft(t => {
          if (t <= 1) { clearInterval(timerRef.current); setRunning(false); setScreen("results"); return 0; }
          return t - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [running]);

  const startExam = () => {
    let pool = questions.filter(q => config.topics.includes(q.topic) && (config.level === "All" || q.level === config.level));
    const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, Math.min(config.count, pool.length));
    setExamQ(shuffled); setAnswers({}); setSelected(null); setCurrent(0); setShowExp(false);
    setTimeLeft(Math.floor(shuffled.length * 51)); setRunning(true); setScreen("exam");
  };

  const finishExam = () => { clearInterval(timerRef.current); setRunning(false); setScreen("results"); };

  const handleSelect = (idx) => {
    if (selected !== null) return;
    setSelected(idx);
    setAnswers(prev => ({ ...prev, [examQ[current].id]: idx }));
    setShowExp(true);
  };

  const nextQ = () => {
    if (current < examQ.length - 1) { setCurrent(c => c + 1); setSelected(null); setShowExp(false); }
    else finishExam();
  };

  const fmt = (s) => `${String(Math.floor(s/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`;
  const score = examQ.filter(q => answers[q.id] === q.answer).length;
  const pct = examQ.length > 0 ? Math.round(score / examQ.length * 100) : 0;
  const grade = pct >= 90 ? {l:"A+",c:"#4ade80",m:"SQL Master! 🏆"} : pct >= 75 ? {l:"A",c:"#86efac",m:"Excellent! 🎉"} : pct >= 60 ? {l:"B",c:"#fbbf24",m:"Good job! 💪"} : pct >= 45 ? {l:"C",c:"#fb923c",m:"Needs work 📚"} : {l:"F",c:"#f87171",m:"Revise basics 🔄"};

  const S = { // shared styles
    page: { minHeight:"100vh", background:"#080c14", fontFamily:"'JetBrains Mono','Courier New',monospace", color:"#cbd5e1", padding:"20px" },
    card: { background:"#0d1422", border:"1px solid #1a2540", borderRadius:16, padding:"24px" },
    btn: (active, primary) => ({ border:`2px solid ${active ? (primary||"#3b82f6") : "#1a2540"}`, background: active ? `rgba(59,130,246,0.12)` : "transparent", color: active ? (primary||"#3b82f6") : "#475569", borderRadius:10, padding:"11px 0", cursor:"pointer", fontFamily:"inherit", fontSize:12, fontWeight:700, letterSpacing:1, transition:"all 0.15s" }),
    primaryBtn: { background:"linear-gradient(135deg,#1d4ed8,#7c3aed)", color:"white", border:"none", borderRadius:12, padding:"16px 48px", fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit", letterSpacing:2, boxShadow:"0 0 32px rgba(99,102,241,0.3)" }
  };

  // ── HOME ──
  if (screen === "home") return (
    <div style={{...S.page, display:"flex", alignItems:"center", justifyContent:"center"}}>
      <div style={{maxWidth:680, width:"100%", textAlign:"center"}}>
        <div style={{fontSize:11, letterSpacing:6, color:"#334155", marginBottom:16}}>MOCK TEST SYSTEM v2.0</div>
        <h1 style={{margin:"0 0 6px", fontSize:"clamp(3rem,8vw,5rem)", fontWeight:900, background:"linear-gradient(135deg,#38bdf8,#818cf8,#c084fc)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", letterSpacing:-3}}>SQL EXAM</h1>
        <div style={{fontSize:13, color:"#475569", letterSpacing:4, marginBottom:48}}>COMPREHENSIVE TRAINING DASHBOARD</div>

        <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:12, marginBottom:40}}>
          {[{v:questions.length,l:"Questions",i:"❓"},{v:TOPICS.length,l:"Topics",i:"📚"},{v:"Easy→Hard",l:"Levels",i:"🎯"},{v:"60 min",l:"Full Test",i:"⏱"}].map((s,i)=>(
            <div key={i} style={{...S.card, padding:"18px 12px"}}>
              <div style={{fontSize:24, marginBottom:6}}>{s.i}</div>
              <div style={{fontSize:s.v.toString().length > 4 ? 16 : 22, fontWeight:800, color:"#38bdf8", marginBottom:2}}>{s.v}</div>
              <div style={{fontSize:10, color:"#334155", letterSpacing:2}}>{s.l}</div>
            </div>
          ))}
        </div>

        <div style={{...S.card, marginBottom:36, textAlign:"left"}}>
          <div style={{fontSize:10, color:"#334155", letterSpacing:3, marginBottom:14}}>SYLLABUS COVERAGE</div>
          <div style={{display:"flex", flexWrap:"wrap", gap:8}}>
            {TOPICS.map((t,i) => <span key={i} style={{background:"#111827", border:"1px solid #1a2540", borderRadius:6, padding:"5px 10px", fontSize:10, color:"#64748b"}}>{t}</span>)}
          </div>
        </div>

        <button style={S.primaryBtn} onClick={() => setScreen("config")}>CONFIGURE EXAM →</button>
      </div>
    </div>
  );

  // ── CONFIG ──
  if (screen === "config") return (
    <div style={{...S.page}}>
      <div style={{maxWidth:680, margin:"0 auto"}}>
        <button onClick={() => setScreen("home")} style={{background:"transparent", border:"1px solid #1a2540", color:"#475569", borderRadius:8, padding:"8px 16px", cursor:"pointer", fontSize:11, fontFamily:"inherit", marginBottom:28}}>← BACK</button>
        <h2 style={{fontSize:24, fontWeight:800, color:"#38bdf8", marginBottom:28, letterSpacing:-1}}>EXAM SETUP</h2>

        <div style={{...S.card, marginBottom:16}}>
          <div style={{fontSize:10, color:"#334155", letterSpacing:3, marginBottom:14}}>DIFFICULTY</div>
          <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:10}}>
            {["All","Easy","Medium","Hard"].map(l => (
              <button key={l} onClick={() => setConfig(c=>({...c,level:l}))} style={S.btn(config.level===l, l==="Easy"?"#4ade80":l==="Medium"?"#fbbf24":l==="Hard"?"#f87171":"#38bdf8")}>{l}</button>
            ))}
          </div>
        </div>

        <div style={{...S.card, marginBottom:16}}>
          <div style={{fontSize:10, color:"#334155", letterSpacing:3, marginBottom:14}}>QUESTION COUNT</div>
          <div style={{display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:10}}>
            {[10,15,20,30,35,60].map(n => (
              <button key={n} onClick={() => setConfig(c=>({...c,count:n}))} style={S.btn(config.count===n)}>{n}</button>
            ))}
          </div>
        </div>

        <div style={{...S.card, marginBottom:16}}>
          <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14}}>
            <div style={{fontSize:10, color:"#334155", letterSpacing:3}}>TOPICS ({config.topics.length}/{TOPICS.length})</div>
            <div style={{display:"flex", gap:8}}>
              {["ALL","NONE"].map(t => <button key={t} onClick={() => setConfig(c=>({...c,topics:t==="ALL"?[...TOPICS]:[]}))} style={{background:"transparent", border:"1px solid #1a2540", color:"#475569", borderRadius:6, padding:"3px 10px", cursor:"pointer", fontSize:10, fontFamily:"inherit"}}>{t}</button>)}
            </div>
          </div>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:8}}>
            {TOPICS.map(t => {
              const on = config.topics.includes(t);
              return <button key={t} onClick={() => setConfig(c=>({...c,topics:on?c.topics.filter(x=>x!==t):[...c.topics,t]}))} style={{padding:"10px 12px", borderRadius:8, border:`1px solid ${on?"#1d4ed8":"#1a2540"}`, background:on?"rgba(29,78,216,0.12)":"transparent", color:on?"#93c5fd":"#374151", cursor:"pointer", fontSize:10, textAlign:"left", fontFamily:"inherit", transition:"all 0.15s"}}>{on?"✓":"○"} {t}</button>;
            })}
          </div>
        </div>

        <div style={{...S.card, marginBottom:24, display:"flex", justifyContent:"space-between"}}>
          <span style={{color:"#475569", fontSize:12}}>⏱ Time limit</span>
          <span style={{color:"#38bdf8", fontWeight:700}}>{Math.ceil(Math.min(config.count,60) *0.85)} minutes</span>
        </div>

        <button onClick={startExam} disabled={config.topics.length === 0} style={{...S.primaryBtn, width:"100%", padding:"18px", opacity: config.topics.length===0?0.4:1}}>LAUNCH EXAM →</button>
      </div>
    </div>
  );

  // ── EXAM ──
  if (screen === "exam") {
    const q = examQ[current];
    const lc = levelConfig[q.level];
    const answered = Object.keys(answers).length;
    return (
      <div style={{...S.page}}>
        <div style={{maxWidth:740, margin:"0 auto"}}>
          {/* Top bar */}
          <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:16}}>
            <div style={{fontSize:12}}>
              <span style={{color:"#38bdf8", fontWeight:800, fontSize:20}}>{current+1}</span>
              <span style={{color:"#334155"}}>/{examQ.length}</span>
            </div>
            <div style={{background:"#0d1422", border:`1px solid ${timeLeft<60?"#f87171":"#1a2540"}`, borderRadius:10, padding:"10px 20px", fontSize:18, fontWeight:800, color:timeLeft<60?"#f87171":"#38bdf8", letterSpacing:2}}>
              {fmt(timeLeft)}
            </div>
            <div style={{fontSize:11, color:"#475569"}}>{answered}/{examQ.length} done</div>
          </div>

          {/* Progress */}
          <div style={{height:3, background:"#1a2540", borderRadius:4, marginBottom:24, overflow:"hidden"}}>
            <div style={{height:"100%", width:`${(current/examQ.length)*100}%`, background:"linear-gradient(90deg,#1d4ed8,#7c3aed)", transition:"width 0.4s"}}/>
          </div>

          {/* Question */}
          <div style={{...S.card, marginBottom:16, borderLeft:`3px solid ${lc.color}`}}>
            <div style={{display:"flex", gap:8, marginBottom:16, flexWrap:"wrap"}}>
              <span style={{background:lc.bg, color:lc.color, border:`1px solid ${lc.border}`, borderRadius:6, padding:"3px 10px", fontSize:10, fontWeight:800, letterSpacing:1}}>{q.level.toUpperCase()}</span>
              <span style={{background:"#111827", color:"#475569", borderRadius:6, padding:"3px 10px", fontSize:10}}>{q.topic}</span>
            </div>
            <p style={{margin:0, fontSize:"clamp(13px,2.5vw,16px)", lineHeight:1.7, color:"#e2e8f0", fontWeight:500}}>{q.question}</p>
          </div>

          {/* Options */}
          <div style={{display:"flex", flexDirection:"column", gap:10, marginBottom:16}}>
            {q.options.map((opt,i) => {
              let bc="#1a2540", bg="#0d1422", tc="#64748b", ico=String.fromCharCode(65+i);
              if (selected !== null) {
                if (i===q.answer) { bc="#4ade80"; bg="rgba(74,222,128,0.08)"; tc="#4ade80"; ico="✓"; }
                else if (i===selected && i!==q.answer) { bc="#f87171"; bg="rgba(248,113,113,0.08)"; tc="#f87171"; ico="✗"; }
              }
              return (
                <button key={i} onClick={() => handleSelect(i)} style={{background:bg, border:`2px solid ${bc}`, borderRadius:12, padding:"14px 18px", textAlign:"left", cursor:selected!==null?"default":"pointer", color:tc, fontSize:"clamp(11px,2vw,13px)", lineHeight:1.5, fontFamily:"inherit", display:"flex", gap:14, alignItems:"flex-start", transition:"all 0.2s"}}>
                  <span style={{minWidth:24,height:24, borderRadius:6, border:`1px solid ${bc}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:800, flexShrink:0}}>{ico}</span>
                  {opt}
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {showExp && (
            <div style={{background:"rgba(29,78,216,0.08)", border:"1px solid rgba(29,78,216,0.3)", borderRadius:12, padding:"14px 18px", marginBottom:16}}>
              <div style={{fontSize:10, color:"#3b82f6", letterSpacing:2, marginBottom:8}}>💡 EXPLANATION</div>
              <p style={{margin:0, fontSize:12, color:"#93c5fd", lineHeight:1.7}}>{q.explanation}</p>
            </div>
          )}

          <div style={{display:"flex", justifyContent:"space-between", gap:12}}>
            <button onClick={finishExam} style={{background:"transparent", border:"1px solid #1a2540", color:"#475569", borderRadius:10, padding:"12px 20px", cursor:"pointer", fontSize:11, fontFamily:"inherit"}}>SUBMIT EXAM</button>
            <button onClick={nextQ} disabled={selected===null} style={{...S.primaryBtn, padding:"12px 40px", opacity:selected===null?0.35:1}}>
              {current<examQ.length-1?"NEXT →":"FINISH →"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── RESULTS ──
  if (screen === "results") {
    const topicStats = TOPICS.map(t => {
      const tqs = examQ.filter(q=>q.topic===t);
      const correct = tqs.filter(q=>answers[q.id]===q.answer).length;
      return {topic:t,total:tqs.length,correct};
    }).filter(s=>s.total>0);

    const levelStats = ["Easy","Medium","Hard"].map(l => {
      const lqs = examQ.filter(q=>q.level===l);
      const correct = lqs.filter(q=>answers[q.id]===q.answer).length;
      return {level:l,total:lqs.length,correct};
    }).filter(s=>s.total>0);

    // Review mode
    if (reviewMode) {
      const q = examQ[reviewIdx];
      const uAns = answers[q.id];
      const isC = uAns === q.answer;
      const lc = levelConfig[q.level];
      return (
        <div style={{...S.page}}>
          <div style={{maxWidth:740, margin:"0 auto"}}>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:24}}>
              <button onClick={()=>setReviewMode(false)} style={{background:"transparent",border:"1px solid #1a2540",color:"#475569",borderRadius:8,padding:"8px 14px",cursor:"pointer",fontSize:11,fontFamily:"inherit"}}>← RESULTS</button>
              <span style={{fontSize:11,color:"#475569"}}>Q{reviewIdx+1} of {examQ.length}</span>
            </div>
            <div style={{...S.card, border:`2px solid ${isC?"#4ade80":"#f87171"}`, marginBottom:16}}>
              <div style={{display:"flex",gap:8,marginBottom:14,flexWrap:"wrap"}}>
                <span style={{background:isC?"rgba(74,222,128,0.1)":"rgba(248,113,113,0.1)",color:isC?"#4ade80":"#f87171",borderRadius:6,padding:"3px 12px",fontSize:11,fontWeight:800}}>{isC?"✓ CORRECT":"✗ INCORRECT"}</span>
                <span style={{background:lc.bg,color:lc.color,borderRadius:6,padding:"3px 10px",fontSize:10,fontWeight:700}}>{q.level}</span>
                <span style={{background:"#111827",color:"#475569",borderRadius:6,padding:"3px 10px",fontSize:10}}>{q.topic}</span>
              </div>
              <p style={{fontSize:15,lineHeight:1.6,margin:"0 0 18px",color:"#e2e8f0"}}>{q.question}</p>
              {q.options.map((opt,i)=>{
                let bc="#1a2540",bg="transparent",tc="#475569";
                if(i===q.answer){bc="#4ade80";bg="rgba(74,222,128,0.07)";tc="#4ade80";}
                else if(i===uAns&&i!==q.answer){bc="#f87171";bg="rgba(248,113,113,0.07)";tc="#f87171";}
                return <div key={i} style={{border:`2px solid ${bc}`,background:bg,borderRadius:10,padding:"12px 16px",marginBottom:8,color:tc,fontSize:12,display:"flex",gap:12}}><span style={{fontWeight:800}}>{i===q.answer?"✓":i===uAns?"✗":String.fromCharCode(65+i)}</span>{opt}</div>;
              })}
            </div>
            <div style={{background:"rgba(29,78,216,0.08)",border:"1px solid rgba(29,78,216,0.3)",borderRadius:12,padding:"14px 18px",marginBottom:20}}>
              <div style={{fontSize:10,color:"#3b82f6",letterSpacing:2,marginBottom:8}}>💡 EXPLANATION</div>
              <p style={{margin:0,fontSize:12,color:"#93c5fd",lineHeight:1.7}}>{q.explanation}</p>
            </div>
            <div style={{display:"flex",gap:12}}>
              <button onClick={()=>setReviewIdx(i=>Math.max(0,i-1))} disabled={reviewIdx===0} style={{flex:1,background:reviewIdx===0?"#0d1422":"#111827",border:"1px solid #1a2540",color:reviewIdx===0?"#334155":"#94a3b8",borderRadius:10,padding:"14px",cursor:reviewIdx===0?"not-allowed":"pointer",fontFamily:"inherit",fontSize:12}}>← PREV</button>
              <button onClick={()=>setReviewIdx(i=>Math.min(examQ.length-1,i+1))} disabled={reviewIdx===examQ.length-1} style={{...S.primaryBtn,flex:1,padding:"14px",opacity:reviewIdx===examQ.length-1?0.35:1}}>NEXT →</button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div style={{...S.page}}>
        <div style={{maxWidth:780, margin:"0 auto"}}>
          {/* Grade card */}
          <div style={{...S.card, textAlign:"center", marginBottom:24, padding:"40px 24px", background:"linear-gradient(135deg,#0d1422,#0d1830)", borderColor:"#1a2540"}}>
            <div style={{fontSize:11,letterSpacing:4,color:"#334155",marginBottom:12}}>EXAM COMPLETE</div>
            <div style={{fontSize:96,fontWeight:900,color:grade.c,lineHeight:1,marginBottom:6}}>{grade.l}</div>
            <div style={{fontSize:48,fontWeight:800,color:"#e2e8f0",marginBottom:8}}>{pct}%</div>
            <div style={{color:"#475569",marginBottom:16}}>{score} / {examQ.length} correct</div>
            <div style={{fontSize:18,color:grade.c,fontWeight:600}}>{grade.m}</div>
          </div>

          {/* Level stats */}
          <div style={{display:"grid", gridTemplateColumns:`repeat(${levelStats.length},1fr)`, gap:14, marginBottom:20}}>
            {levelStats.map(({level,total,correct})=>{
              const lc=levelConfig[level]; const p2=Math.round(correct/total*100);
              return (
                <div key={level} style={{...S.card, textAlign:"center"}}>
                  <div style={{fontSize:10,color:lc.color,letterSpacing:2,fontWeight:800,marginBottom:10}}>{level.toUpperCase()}</div>
                  <div style={{fontSize:30,fontWeight:800,color:"#e2e8f0"}}>{p2}%</div>
                  <div style={{fontSize:11,color:"#334155",marginTop:4}}>{correct}/{total}</div>
                  <div style={{height:4,background:"#1a2540",borderRadius:4,marginTop:12,overflow:"hidden"}}>
                    <div style={{height:"100%",width:`${p2}%`,background:lc.color,borderRadius:4}}/>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Topic breakdown */}
          <div style={{...S.card, marginBottom:20}}>
            <div style={{fontSize:10,color:"#334155",letterSpacing:3,marginBottom:20}}>TOPIC BREAKDOWN</div>
            {topicStats.map(({topic,total,correct})=>{
              const p2=Math.round(correct/total*100);
              const c2=p2>=75?"#4ade80":p2>=50?"#fbbf24":"#f87171";
              return (
                <div key={topic} style={{marginBottom:14}}>
                  <div style={{display:"flex",justifyContent:"space-between",marginBottom:5}}>
                    <span style={{fontSize:11,color:"#94a3b8"}}>{topic}</span>
                    <span style={{fontSize:11,color:c2,fontWeight:700}}>{correct}/{total} · {p2}%</span>
                  </div>
                  <div style={{height:5,background:"#1a2540",borderRadius:4,overflow:"hidden"}}>
                    <div style={{height:"100%",width:`${p2}%`,background:c2,borderRadius:4}}/>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Question map */}
          <div style={{...S.card, marginBottom:20}}>
            <div style={{fontSize:10,color:"#334155",letterSpacing:3,marginBottom:14}}>QUESTION MAP · click to review</div>
            <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
              {examQ.map((q,i)=>{
                const isC=answers[q.id]===q.answer; const na=answers[q.id]===undefined;
                return (
                  <button key={i} onClick={()=>{setReviewIdx(i);setReviewMode(true);}} title={`Q${i+1}: ${q.topic}`} style={{width:36,height:36,borderRadius:8,border:`2px solid ${na?"#1a2540":isC?"#4ade80":"#f87171"}`,background:na?"#111827":isC?"rgba(74,222,128,0.1)":"rgba(248,113,113,0.1)",color:na?"#334155":isC?"#4ade80":"#f87171",cursor:"pointer",fontSize:11,fontWeight:800,fontFamily:"inherit"}}>
                    {i+1}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Actions */}
          <div style={{display:"flex",gap:12}}>
            <button onClick={()=>{setReviewIdx(0);setReviewMode(true);}} style={{flex:1,...S.card,border:"1px solid #1a2540",color:"#94a3b8",cursor:"pointer",fontSize:12,fontFamily:"inherit",fontWeight:700,letterSpacing:1,textAlign:"center",padding:"16px"}}>📖 REVIEW ALL</button>
            <button onClick={()=>setScreen("config")} style={{...S.primaryBtn,flex:1,padding:"16px"}}>🔄 NEW EXAM</button>
          </div>
        </div>
      </div>
    );
  }
  return null;
}