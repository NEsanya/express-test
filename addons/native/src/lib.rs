use neon::prelude::*;
use pwhash::bcrypt;

fn hash(mut cx: FunctionContext) -> JsResult<JsString> {
    let arg = cx.argument::<JsString>(0)?.value();
    let hashed = bcrypt::hash(arg).unwrap();
    Ok(cx.string(hashed))
}

fn verify(mut cx: FunctionContext) -> JsResult<JsBoolean> {
    let arg = cx.argument::<JsString>(0)?.value();
    let hashed = cx.argument::<JsString>(1)?.value();
    let response = bcrypt::verify(arg, &hashed);
    Ok(cx.boolean(response))
}

register_module!(mut cx, {
    cx.export_function("hash", hash);
    cx.export_function("verify", verify)
});
