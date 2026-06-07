let supabase_url = 'https://exnpalyslhxjxpsaycet.supabase.co';
let apikey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4bnBhbHlzbGh4anhwc2F5Y2V0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA0MDAwMjQsImV4cCI6MjA5NTk3NjAyNH0.ZbBzBlTpqRHTpd9NmCX9sP1_y0kJRlcHV0PYrPPXm5U';
async function bodacare() {
    let res = await fetch(`${supabase_url}/rest/v1/Bodacare?select=*`,{
    headers:{
      'apikey' : apikey,
      'authorisation': `bearer ${apikey}`,
    }});
    let data = await res.json();
    let fromValue = document.getElementById('select');
    let toValue = document.getElementById('select2');
        //console.log(`from: ${fromValue.value} to: ${toValue.value}`);
    let current = fromValue.value;
    let screen = document.querySelector(".screen");
    let places = data.filter(place => place.location === current);
    screen.innerHTML = '';
    //places.forEach(area => console.log(area.location));
   places.forEach(val => {
     let p = document.createElement("p");
     p.textContent = (`${val.BodacareName} tel:${val.phone} ${val.location}`);
     screen.appendChild(p);
   });
   //console.log(driver.BodacareName);
}
//bodacare();
let form = document.querySelector('form');
form.addEventListener("submit", (e)=> {
  e.preventDefault();
  bodacare();
});