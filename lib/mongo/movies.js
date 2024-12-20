import clientPromise from ".";

let client
let db 
let movies

async function init(){
    if(db) return
    try{
        client = await clientPromise
        db = await client.db("achievement_sheets")
        movies = await db.collection("achievement_sheets")
    }catch(Error){
        throw Error('failed to stablish the connection');
    }
}
;(async() =>{
    await init();
})

////////////////
//// MOVIES ////
///////////////

export async function getMovies() {
    try {
        if (!movies) await init()
            const result = await movies
                .find({userName : "g"})
                .limit(20)
                .map(user =>({ ...user, _id : user._id.toString()}))
                .toArray()
        return {movies : result}
    } catch (error) {
        return {error:"failed to fetch movies"}
    }
}