import AdjacencyList from './adjacency-list.js';

const knightTravail = (() => {

    let boardLength = 8;
    const adjacencyLists = [];
    const knightMoves = [[1,2],[2,1],[-1,2],[2,-1],[-1,-2],[-2,-1],[1,-2],[-2,1]];

    const inBorder = (x, y) => {
        return x < boardLength && x >= 0 && y < boardLength && y >= 0;
    }

    const findPossibleMoves = (x, y) => {
        const possibleMoves = [];
        knightMoves.forEach((move) => {
            const [newX, newY] = [x + move[0], y + move[1]]
            if(inBorder(newX, newY))
                possibleMoves.push([newX, newY]);
        })
        return possibleMoves;
    }

    const getListForCoords = (coords) => {
        for(let i = 0; i < adjacencyLists.length; i++){
            if(adjacencyLists[i].equals(coords))
                return adjacencyLists[i].adjacencies;
        }
    } 

    const findAdjacencies = () => {
        for(let i = 0; i < boardLength; i++){
            for(let j = 0; j < boardLength; j++){
                const list = new AdjacencyList(i, j);
                list.adjacencies = findPossibleMoves(i, j);
                list.prettyPrint();
                adjacencyLists.push(list);
            }
        }
    }

    const moveKnight = (start, end) => {
        let paths = [[start]];
        const finishedPaths = [];
        while(finishedPaths.length === 0){
            const newPaths = [];
            paths.forEach((path) => {
                if(path[path.length-1][0] === end[0] && path[path.length-1][1] === end[1])
                    finishedPaths.push(path);
            })
            if(finishedPaths.length === 0){
                paths.forEach((path) => {
                    const newCoords = getListForCoords(path[path.length-1]);
                    newCoords.forEach((coords) => {
                        newPaths.push([...path, coords])
                    })
                })
                paths = newPaths;
            }
        }
        printPaths(finishedPaths);
    } blablablablabllabla

    const printPaths = (paths) => {
        console.log(`MINIMUM MOVES - ${paths[0].length-1}.`);
        console.log(`${paths.length} POSSIBLE PATH/S:`);
        paths.forEach((path) => {
            let string = "";
            path.forEach((coords) => {
                string += `[${coords[0]},${coords[1]}] `
            })
            string = string.slice(0, -1);
            console.log(string)
        })
    }

    return { findAdjacencies, moveKnight, printPaths }
})();

knightTravail.findAdjacencies();
knightTravail.moveKnight([3,5],[0,4]);