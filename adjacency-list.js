class AdjacencyList {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.adjacencies = [];
    }

    equals(coords){
        return this.x === coords[0] && this.y === coords[1];
    }

    prettyPrint(){
        let string = `[${this.x}, ${this.y}] -> `;
        this.adjacencies.forEach((coords) => {
            string += `[${coords[0]}, ${coords[1]}],`;
        })
    }
}

export default AdjacencyList;