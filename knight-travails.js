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

    return { findAdjacencies }
})();


knightTravail.findAdjacencies();