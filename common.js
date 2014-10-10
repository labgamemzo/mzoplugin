///////////////
// Model
var ConectaMundoGameCoreModel = {
    user: undefined,
    games: undefined
};



/////////////
// Urls da API
var ConectaMundoGameCoreApi = {
    login: "http://gidenilson.com.br/ws_labgame/login",
    game_list: "http://gidenilson.com.br/ws_labgame/game_list"
};

///////////////
// Utilitários
var ConectaMundoGameCoreUtils = {
    CheckSuccess: function (data) {
        if (data === undefined) return false;
        return (data.success === "true");
    }
};