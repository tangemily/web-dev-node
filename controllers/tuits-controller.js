import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime()+'';
    newTuit.likes = 0;
    newTuit.dislikes = 0;
    newTuit.comments = 0;
    newTuit.retweets = 0;
    newTuit.liked = false;
    newTuit.disliked = false;
    newTuit.handle = "NASA";
    newTuit.postedBy = {};
    newTuit.postedBy.username = "NASA";
    newTuit.logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png";

    tuits = [newTuit, ...tuits]
    res.json(newTuit);
}
const findAllTuits = (req, res) => {
    res.json(tuits);
}
const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
    res.sendStatus(200);
}

const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    tuits = tuits.filter(t => t._id !== tuitdIdToDelete);
    res.sendStatus(200);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
