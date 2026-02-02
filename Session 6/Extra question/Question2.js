// Q2 – Coding Task: Select & Modify
// <ul>
//   <li class="item">Apple</li>
//   <li class="item">Banana</li>
//   <li class="item">Mango</li>
// </ul>


// Task

// Select all <li> elements

// Change their text color to blue

// Add prefix "Fruit: " before each item

// 👉 Use JavaScript only



<ul>
  <li class="item">Apple</li>
  <li class="item">Banana</li>
  <li class="item">Mango</li>
</ul>

const items=document.querySelectorAll(".item");
items.forEach((item)=>{
    item.style.color="blue";
    item.textContent="Fruit: "+item.textContent;
})

