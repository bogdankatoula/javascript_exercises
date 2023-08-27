const getNotes = async () => {
    try {
        const response = await fetch("http://localhost:3000/diary");
        const res = await response.json();
        // console.log(res);
        return res;
    }
    catch (error) {
        console.log("Error fetching notes:", error);
        return [];
    }
}
getNotes();
const notes = getNotes();
notes.then(notes => {
    console.log(notes);
    notes.sort((a,b)=>new Date(a.date)-new Date(b.date));
    const main$$ = document.createElement("main");
    document.body.appendChild(main$$);
    for (let i = 0; i < notes.length; i++) {
        const note = notes[i];
        console.log(note);
        const div$$ = document.createElement("div");
        main$$.appendChild(div$$);
        div$$.innerHTML = `
        <h3>${note.title}</h3>
        <h5>${note.date}</h5>
        <p>${note.description}</p>
        `
        const button$$ = document.createElement("button");
        button$$.textContent = "X"
        div$$.appendChild(button$$);
        const handleClick = () =>div$$.remove();
        button$$.addEventListener("click", handleClick);
    }
})
.catch(error=>{
    console.log("Error manejando datos de la api:", error);
})