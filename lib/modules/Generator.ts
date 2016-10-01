import {TSDocArguments, ArgumentsParser} from "./ArgumentsParser";

interface GeneratorInterface {
    setArguments(args: string[]): Generator;
    chooseAction(): Generator;
    callAction(): Generator;
    returnResult(): Generator;
}

export class Generator implements GeneratorInterface {

    private args: TSDocArguments;

    public setArguments(args: string[]): Generator {
        this.args = new ArgumentsParser(args).parse();
        return this;
    }

    public chooseAction(): Generator {
        return this;
    }

    public callAction(): Generator {
        return this;
    }

    public returnResult(): Generator {
        return this;
    }

    constructor(){

    }
}