import { useState,useRef,useEffect } from "react";

type TagInputProps = {
  name: string;
  label: string;
  tags: string[];
  onChange: (name: string, tags: string[]) => void;
  error: string;
  required?: boolean;
  minTags?: number;
  maxTags?: number;
  touched?: boolean
  validationMode?: "onBlur" | "onChange" | "onSubmit";  
};

export default function TagInput({
  name,
  label,
  tags,
  onChange,
  error,
  maxTags,
  touched,
  validationMode,  
}: TagInputProps) {
  const [inputValue, setInputValue] = useState<string>("");
  const lastItemRef = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    // Scroll to the last item whenever items change
    if (lastItemRef.current) {
      lastItemRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [tags]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
   
    if(e.key ==="Backspace" && !inputValue){
      e.preventDefault();
      if (e.key === "Backspace" && !inputValue && tags.length > 0) {
  e.preventDefault();

  lastItemRef.current?.focus();
}
      console.log("hiiii");
       
      

    }
    if(e.key !== "Enter")return;
    e.preventDefault(); // prevent form submit

    const value = inputValue.trim();

    if (!value) return;

    if (tags.includes(value)){
      console.log("Repeat");
      return ;
    } 


    if (maxTags !== undefined && tags.length >= maxTags) return;

    const updatedTags = [...tags, value];

    onChange(name, updatedTags);

    setInputValue(""); 
  };

  const removeTag = (tagToRemove: string) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    onChange(name, updatedTags);
  };
  const showError = validationMode === "onSubmit" ? touched && !!error : !!error;
  return (
    <div style={{ marginBottom: "12px" }}>
      <label>{label}</label>

     
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "6px" }}>
        {tags.map((tag,index) => (
          <span
            key={tag}
             ref={index === tags.length - 1 ? lastItemRef : null}
            tabIndex={0}
            onKeyDown={(e) => {
  if (e.key === "Backspace") {
    e.preventDefault();
    removeTag(tag);
  }
}}
            style={{
              padding: "4px 8px",
              background: "#e3e3e3",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            {tag}

            <button
              type="button"
              onClick={() => removeTag(tag)}
             
              style={{
                border: "none",
                background: "transparent",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              ×
            </button>
          </span>
        ))}
      </div>


      <input
        type="text"
        placeholder="Type and press Enter"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        
     
      />

     
       {showError && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
}