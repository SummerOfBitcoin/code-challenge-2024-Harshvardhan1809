// 0a8b21af1cfcc26774df1f513a72cd362a14f5a598ec39d915323078efb5a240.json inspection

import transaction from "0a8b21af1cfcc26774df1f513a72cd362a14f5a598ec39d915323078efb5a240.js"

const pubkey = transaction.vin[0].prevout;
const [sigscript, sigscript_asm] = [transaction.vin[0].scriptsig, transaction.vin[0].scriptsig_asm];

if(pubkey.scriptpubkey_type == "p2pkh") {
    // implementing in array instead of stack
    public_key = sigscript_asm.split(" ")[4];
    signature = sigscript_asm.split(" ")[1];

    // hash the public key twice with SHA256 and then RIPEMD160
    
}