// Assignment : Browser Storage
// Create a simple HTML page with:
// One input field (name)
// Two buttons: Save and Load
// On Save:
// Store the value in localStorage
// Store the same value in sessionStorage
// On Load:
// Retrieve and display values from both storages
// Think About:
// What happens on page refresh?
// What happens when the tab is closed?

const save=document.getElementById("save");
const input=document.getElementById("name");
save.addEventListener('click',()=>{
    if(!input.value){
        alert("Please enter your name");
    }
    else{
   
        // localStorage.setItem('name',data)
        // sessionStorage.setItem('name',data);
        localStorage.setItem('name',input.value)
        sessionStorage.setItem('name',input.value);
        alert('Name saved successfully');
    }
});

const load=document.getElementById("load");

load.addEventListener('click',()=>{
    const localData=localStorage.getItem('name');
    const sessionData=sessionStorage.getItem('name');

    if(localData && sessionData){
        const ele=document.createElement("div");
        ele.textContent=`Local Storage: ${localData}`;
        console.log(ele);
        const ele1=document.createElement("div");
        console.log(ele1);
        ele1.textContent=`Session Storage: ${sessionData}`;
        document.body.appendChild(ele);
        document.body.appendChild(ele1);
    }
    else{
        alert("Nothing is there in session and local storage");
    }
});


/*
What happens on page refresh?
-->When we refresh the page both local storage data and session storage data persist nothing happens to it
What happens when the tab is closed?
-->When we close the tab the session storage data is deleted as it is stored for temporaray purpose but the local storage data 
remains as it is.   

*/