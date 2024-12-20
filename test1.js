const limit = 3;
console.log("hello world");

const url = `https://randomuser.me/api/?results=${limit}`;
const but = document.getElementById('sub');
const search = document.getElementById('search');
let searchkey = 0;

let userss = JSON.parse(localStorage.getItem(0));
console.log(userss);

const searchfunc = function () {
    searchkey = search.value;
    let a = userss.filter((v)=>{ return v.name.first.toLowerCase().includes(searchkey.toLowerCase())});
    console.log(a);
    
    // array.filter(searchy) =>
    //     {
    //         searchy.includes(searchkey);
    //     }
    
};

but.addEventListener('click', searchfunc);

getUser();

async function getUser() {
    try {
        const answer = await fetch(url);
        const answerless = await answer.json();
        const manche = answerless.results;
        const back = JSON.stringify(manche); // No need for `var`, prefer `const`
        console.log(back);
        localStorage.setItem(0, back);

    } catch (error) {
        console.log("oops error");
        console.log(error);
    }
}


