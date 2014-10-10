///////////////
// Model
var ConectaMundoGameCoreModel = {
    user: undefined,
    games: undefined
};



/////////////
// Urls da API
var ConectaMundoGameCoreApi = {
    login: "http://172.18.200.169/ws_labgame/login",
    game_list: "http://172.18.200.169/ws_labgame/game_list"
};

///////////////
// Utilitários
var ConectaMundoGameCoreUtils = {
    CheckSuccess: function (data) {
        if (data === undefined) return false;
        return (data.success === "true");
    }
};