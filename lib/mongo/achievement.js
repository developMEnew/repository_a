import clientPromise from ".";

let client
let db 
let achievements

async function init(){
    if(db) return
    try{
        client = await clientPromise
        db = await client.db("achievement_sheets")
        achievements = await db.collection("achievement_sheets")
    }catch(Error){
        throw Error('failed to stablish the connection');
    }
}
;(async() =>{
    await init();
})

////////////////
//// achievement load ////
///////////////

export async function getAchievements() {
    try {
        if (!achievements) await init()
            const result = await achievements
                .find({user : "san"})
                .limit(1)
                .map(user =>({ ...user, _id : user._id.toString()}))
                .toArray()
        return {__user : result}
    } catch (error) {
        return {error:"failed to fetch achievements"}
    }
}