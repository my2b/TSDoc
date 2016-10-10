import {TSDocArguments, ArgumentsParser} from "./ArgumentsParser";
import ActionChooser from "./ActionChooser";

interface GeneratorInterface {
    setArguments(args: string[]): Generator;
    chooseAction(): Generator;
    callAction(): Generator;
    returnResult(): Generator;
}

export class Generator implements GeneratorInterface {

    private args: TSDocArguments;
    private actionName: TSDocArguments;

    public setArguments(args: string[]): Generator {
        this.args = new ArgumentsParser(args).parse();
        return this;
    }

    public chooseAction(): Generator {
        this.actionName = new ActionChooser(this.args).choose();
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