export type FieldConfig={
  name:string;
  label:string;
  type:string;
  required:boolean;
  regex?:RegExp;  
  errorMessage?:string;
  options?:string[];
  showWhen?:{field: string,
            values: string[]
          };
  min?: number
  max?: number
  defaultValue?: string | boolean | number
  minTags?: number
  maxTags?: number
}

export const formConfig:FieldConfig[]=[
  {name:"firstName",label:"First Name: ",type:"text",required:true, },
  {name:"lastName",label:"Last Name: ",type:"text",required:false,},
  {name:"email",label:"Email: ",type:"email",required:false,regex:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,errorMessage:"Enter Valid email id"},
  {name:"phone",label:"Phone: ",type:"number",required:true,regex:/^\d{10}$/,errorMessage:"Please enter correct phone number"},
  {name:"password",label:"Password: ",type:"password",required:true,regex:/^(?=.*[A-Z])(?=.*\d).{8,}$/,errorMessage:"Please enter password with minimum 8 characters including 1 special character and 1 uper case letter"},
  {name:"confirmPassword",label:"Confirm Password: ",type:"password",required:true},
  {name:"gender",label:"Gender: ",type:"select",required:true,options:["Male","Female","Other"]},
  {name:"agree",label:"Terms & Conditions: ",type:"checkbox",required:true,defaultValue: false},
  {name:"role",label:"Role: ",type:"radio",required:true,options:["Admin","User","Guest"],defaultValue: "Guest" },
  {name: "fatherName",label: "Father Name",type: "text",required: true,showWhen: { field: "gender", values: ["Male", "Other"] }},
  {name: "motherName",label: "Mother Name",type: "text",required: true,showWhen: { field: "gender", values: ["Female", "Other"] }},
  {name:"age",label:"Age: ",type:"number",required:true,min:18,max:100},
  {name:"skills",label:"Skills: ",type:"tag",required:true,minTags:3,maxTags:5},
  {name:"hobbies",label:"Hobbies: ",type:"tag",required:false,maxTags:5},
  {name:"address",label:"Address: ",type:"text",required:true},
   {name:"team",label:"Team: ",type:"tag",required:true,minTags:3,maxTags:5},
]