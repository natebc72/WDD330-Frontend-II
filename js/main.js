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
    {
        label: "Week 4 Notes",
        url: "html/week4.html"
    },
    {
        label: "Week 5 Notes",
        url: "html/week5.html"
    },
    {
        label: "Week 7 Notes",
        url: "html/week7.html"
    },
    {
        label: "Week 8 Notes",
        url: "html/week8.html"
    },
    {
        label: "Week 9 Notes",
        url: "html/week9.html"
    },
    {
        label: "Week 10 Notes",
        url: "html/week10.html"
    },
    {
        label: "Week 11 Notes",
        url: "html/week11.html"
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
        label: "Week 2 Group",
        url: "z_group_work/week2/week2.html"
    },
    {
        label: "Week 3 Group",
        url: "z_group_work/week3/week3.html"
    },
    {
        label: "Week 4 Group",
        url: "z_group_work/week4/week4.html"
    },
    {
        label: "Week 5 Group",
        url: "z_group_work/week5/week5.html"
    },
    {
        label: "Week 7 Group",
        url: "z_group_work/week7/week7.html"
    },
    {
        label: "Week 8 Group",
        url: "z_group_work/week8/week8.html"
    },
    {
        label: "Week 9 Group",
        url: "z_group_work/week9/week9.html"
    },
    {
        label: "Week 10 Group",
        url: "z_group_work/week10/week10.html"
    },
    {
        label: "Week 11 Group",
        url: "z_group_work/week11/week11.html"
    },
    {
        label: "Week 12 Group",
        url: "z_group_work/week12/week12.html"
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


