function groupAnagrams(strs) {
    let map = new Map();


    for (let str of strs) {
        
        let sortedStr = str.split('').sort().join('');
        

        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        

        map.get(sortedStr).push(str);
    }
    
    return Array.from(map.values());
}


let inputArray = ["Bat", "tap", "cat", "tab", "pat"];
let result = groupAnagrams(inputArray);
console.log(result);