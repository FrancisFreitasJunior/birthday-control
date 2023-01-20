new Vue({
    el: "#appCep",
    data: {
        endereco: {
            cep: null,
            logradouro: null,
            estado: null,
            cidade: null,
            bairro: null
        }
    },
    methods: {
        cepAlteradoEvento() {
            axios({
                method: "get",
                url: `https://viacep.com.br/ws/${this.endereco.cep}/json/`,
                responseType: "application/json"
            }).then(response => {
                var bean = response.data;
                this.endereco.logradouro = bean.logradouro;
                this.endereco.bairro = bean.bairro;
                this.endereco.estado = bean.uf;
                this.endereco.cidade = bean.localidade;
            });
        }
    }
});


const cepInput = document.querySelector("#CEP")
cepInput.addEventListener("keypress", function(e){
    if(!checkChar(e)){
        e.preventDefault();
    }
})
function checkChar(e) {
    const char = String.fromCharCode(e.keyCode);
    const pattern = `[0-9]`

    if(char.match(pattern)) {
        console.log(char);
        return true;
    }
}