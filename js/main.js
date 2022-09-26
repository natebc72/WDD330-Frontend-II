//this is the current date for my footer
const options = {weekday: 'short', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);

//this is my array which I will update every week with a label and url
const links = [
    {
        label: "Week 1 Notes",
        url: "html/week1.html"
    },
    {
        label: "Week 2 Notes",
        url: "html/week2.html"
    },
    {
        label: "Week 3 Notes",
        url: "html/week3.html"
    },

];

//this gets the assignments id from the html
 ol = document.getElementById("assignments");

//this will create a loop to create the li and a elements
for ( i = 0; i < links.length; i++) {
     li = document.createElement("li");
     a = document.createElement("a");
    
    //these reference the array above for info
    a.href = links[i].url;
    a.innerHTML = links[i].label;
    a.target="_blank";
    
    //these will append and place the a inside the li and the li inside the ol
    li.appendChild(a);
    ol.appendChild(li);
 }

 //this is my array which I will update every week with a label and url
const g_work = [
    {
        label: "Week 1 Group",
        url: "z_group_work/week1/week1.html"
    },
    {
        label: "Week 2 Group",
        url: "z_group_work/week2/week2.html"
    },
    {
        label: "Week 3 Group",
        url: "z_group_work/week3/week3.html"
    },

];

//this gets the assignments id from the html
 ol = document.getElementById("groups");

//this will create a loop to create the li and a elements
for (i = 0; i < g_work.length; i++) {
     li = document.createElement("li");
     a = document.createElement("a");
    
    //these reference the array above for info
    a.href = g_work[i].url;
    a.innerHTML = g_work[i].label;
    a.target="_blank";
    
    //these will append and place the a inside the li and the li inside the ol
    li.appendChild(a);
    ol.appendChild(li);
 };


