const favhobbies=(hobbies:string|string[]):string|string[]=>{
if (typeof hobbies==="string") {
    return hobbies
} else {
    return hobbies.map((item)=>item)
}
}

console.log(favhobbies("reading"))
console.log(favhobbies(["reading","writing","swimming","sleeping","travelling"]))