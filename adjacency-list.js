class AdjacencyList {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.adjacencies = [];
    }

    prettyPrint(){
        let string = `[${this.x}, ${this.y}] -> `;
        this.adjacencies.forEach((coords) => {
            string += `[${coords[0]}, ${coords[1]}],`;
        })
        console.log(string);
    }
}

export default AdjacencyList;