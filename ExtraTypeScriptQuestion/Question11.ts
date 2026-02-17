// ✅ Q11 — Tag Mapping Transformer (TypeScript Version)

// Create FULL typing for:

// transformTags(data)


// Rules:

// ✔ No duplicate IDs
// ✔ Sorted arrays
// ✔ Strong typing
// ✔ No any

// Use:

// 👉 Record<string, number[]>

// But try to infer automatically.

// This mirrors the difficulty of your assessment.



type TaggedItems={
    id:number;
    tag:string;
}



const data:TaggedItems[] = [
  { id: 1, tag: "js" },
  { id: 2, tag: "ts" },
  { id: 1, tag: "ts" },
  { id: 3, tag: "js" }
];



function transformTags(datas:TaggedItems[]):Record<string,number[]>{
    const result:Record<string,number[]>={};
    for(const item of datas){
        if(!result[item.tag]){
            result[item.tag]=[];
        }
        if(!result[item.tag].includes(item.id)){
            result[item.tag].push(item.id);
        }
    }
    for(const tag in result){
        result[tag].sort((a,b)=>a-b);
    }

    return result;
}


console.log(transformTags(data));