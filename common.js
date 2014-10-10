///////////////
// Model
var ConectaMundoGameCoreModel = {
    user: undefined
};



/////////////
// Urls da API
var ConectaMundoGameCoreApi = {
    login: "http://localhost/conectamundo/login"
};

///////////////
// Utilitários
var ConectaMundoGameCoreUtils = {
    CheckSuccess: function (data) {
        if (data === undefined) return false;
        return (data.success === "true");
    }
};