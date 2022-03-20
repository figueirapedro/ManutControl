class TipoManuntecao {
        
    static Preditiva = new TipoManuntecao("Preditiva");
    static Preventiva = new TipoManuntecao("Preventiva");
    static Planejada = new TipoManuntecao("Planejada");
    static Corretiva = new TipoManuntecao("Corretiva");

    constructor (name) {
        this.name = name;
    }
}