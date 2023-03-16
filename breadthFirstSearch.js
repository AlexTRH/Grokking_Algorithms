const graph = {};
graph['you'] = ['alice', 'bob', 'claire'];
graph['bob'] = ['anuj', 'peggy'];
graph['alice'] = ['peggy'];
graph['claire'] = ['thom', 'jonny'];
graph['anuj'] = [];
graph['peggy'] = [];
graph['thom'] = [];
graph['jonny'] = [];

checkIfSeller = (name) => {
    return name[name.length - 1] === 'm'
}

const search = (name) => {
    let searchQueue = [];
    searchQueue = searchQueue.concat(graph[name]);
    const searched = [];
    while (searchQueue.length) {
        let person = searchQueue.shift();
        if (searched.indexOf(person) === -1) {
            if (checkIfSeller(person)) {
                console.log(`${person} is a mango seller!`);
                return true;
            } else {
                searchQueue = searchQueue.concat(graph[person]);
                searched.push(person);
            }
        }
    }
    return false;
}