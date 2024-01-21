function mainFun() {
    return secondFun = () => {

        return thirdFun = () => {
            console.log("Hello I am Third Function....")
        }
    }
}

mainFun()()();