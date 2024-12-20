import { getMovies } from "../../../lib/mongo/movies";

const handler = async (req, res) => {
    if (req.method === "GET") { // Changed `res.method` to `req.method`
        try {
            const { movies, error } = await getMovies();
            if (error) throw new Error(error);

            return res.status(200).json({ movies });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} not allowed`); // Updated status code to 405
};

export default handler;
