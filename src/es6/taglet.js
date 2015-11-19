class Taglet {

    constructor(name) {
        this.name = name;
    }

    compile() {
        console.log('compiling....')
    }

    render() {
        console.log('rendering...')
    }

}

export { Taglet }