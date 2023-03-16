//hashtables

//first

const graph = {};
graph['start'] = {};
graph['start']['a'] = 6;
graph['start']['b'] = 2;

graph['a'] = {};
graph['a']['fin'] = 1;

graph['b'] = {};
graph['b']['a'] = 3;
graph['b']['fin'] = 5;

graph['fin'] = {};

//second

const costs = {};
costs['a'] = 6;
costs['b'] = 2;
costs['fin'] = Infinity;

//third

parents = {};
parents['a'] = 'start';
parents['b'] = 'start';
parents['fin'] = null;

processed = [];

const findLowestCostNode = (costs) => {
    lowestCost = Infinity;
    lowestCostNode = null;
    for (let node in costs) {
        let cost = costs[node]
        if (cost < lowestCost && (processed.indexOf(node) === -1)) {
            lowestCost = cost;
            lowestCostNode = node;
        }
    }
    return lowestCostNode;
}

node = findLowestCostNode(costs);

while (node != null) {
    let cost = costs[node];
    let neighbors = graph[node];
    Object.keys(neighbors).forEach(function (neighborNode) {
        let newCost = cost + neighbors[neighborNode];
        if (costs[neighborNode] > newCost) {
            costs[neighborNode] = newCost;
            parents[neighborNode] = node;
        }
    });
    processed = processed.concat(node);

    node = findLowestCostNode(costs);
}

console.log(costs, parents);