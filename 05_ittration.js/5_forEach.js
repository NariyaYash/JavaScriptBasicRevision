const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach((item) => console.log(item))
coding.forEach((item, index, WholeArray) => console.log(item, index, WholeArray));

// | ForEach not return anything|
const array = coding.forEach((item) => console.log(item));
console.log("ForEach return nothing : ",  array)


// | We can write foreachWith seprate function then put it inside foreach(Always pass referance) |
function printMe(item){
    console.log(item);
}
coding.forEach(printMe)

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myCoding.forEach((item) => {
    console.log(item.languageName);
});

