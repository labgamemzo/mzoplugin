var ConectaMundoGameCoreExps = function () {};

ConectaMundoGameCoreExps.prototype.MyExpression = function (ret) // 'ret' must always be the first parameter - always return the expression's result through it!
{
    ret.set_int(1337); // return our value
    // ret.set_float(0.5);			// for returning floats
    // ret.set_string("Hello");		// for ef_return_string
    // ret.set_any("woo");			// for ef_return_any, accepts either a number or string
};