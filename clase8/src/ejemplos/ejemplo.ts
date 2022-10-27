class Configuracion {
    public readonly variableglobal1;
    public readonly variableglobal2;
    public readonly variableglobal3;
    public init():void {
        // cargar el archivo de configuracion en las variables
    }
}

let exportable = new Configuracion()

export default { configuracion: exportable}

