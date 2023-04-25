const headerRec = document.getElementById("headerRec")
const recContainer = document.getElementById("recContainer")

headerRec.addEventListener("click", () => {
    for(let i=0;i<3;i++) {
        let len = recContainer.getElementsByTagName("section").length==0?1:recContainer.getElementsByTagName("section").length
        let rec = document.createElement("section");
        recSize = 20*len
        rec.classList.add("rectangle")
        recContainer.append(rec);
        recContainer.querySelectorAll(".rectangle")[len-1].style.width = `${recSize}px`
        recContainer.querySelectorAll(".rectangle")[len-1].style.height = `${recSize}px`
    }
});