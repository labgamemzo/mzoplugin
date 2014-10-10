///////////////
// Model
var ConectaMundoGameCoreModel = {
    user: undefined,
    games: undefined
};



/////////////
// Urls da API
var ConectaMundoGameCoreApi = {
    login: "http://localhost/conectamundo/login",
    game_list: "http://localhost/conectamundo/game_list"
};

///////////////
// Utilitários
var ConectaMundoGameCoreUtils = {
    CheckSuccess: function (data) {
        if (data === undefined) return false;
        return (data.success === "true");
    }
};