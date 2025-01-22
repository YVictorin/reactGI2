import convertToId from '../serverlessUtils/convertToId';
import getSimilarGenresMovies from '../serverlessUtils/similarGenre';

export default async function handler(req, res) {
    const userOption = req.query?.userGenre;

    try {
        const idArr = await convertToId(userOption);
        const results = await getSimilarGenresMovies(idArr);
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch similar movies: " + error.message });
    }
}
