const router = require('express').Router();
const axios = require('axios');

async function getPhotoURL(photoReference) {
  const placesPhotosConfig = {
    method: 'get',
    url: `${process.env.PLACES_API_ROOT_URL}${process.env.PLACES_PHOTOS_PATH}${photoReference}&key=${process.env.GOOGLE_API_KEY}`,
    headers: {},
  };

  try {
    const response = await axios(placesPhotosConfig);
    const photoUrl = response.request.socket._httpMessage.res.responseUrl;
    return photoUrl;
  } catch (err) {
    console.log(err);
  }
}

async function getPhotoReference(placeId) {
  const placesDetailsConfig = {
    method: 'get',
    url: `${process.env.PLACES_API_ROOT_URL}${process.env.PLACES_DETAILS_PATH}${placeId}&key=${process.env.GOOGLE_API_KEY}`,
    headers: {},
  };

  try {
    const response = await axios(placesDetailsConfig);
    const photoReference = response.data.result.photos[0].photo_reference;
    return photoReference;
  } catch (err) {
    console.log(err);
  }
}

router.post('/proxy', async (req, res) => {
  if (
    !req.body.CLIENT_SECRET ||
    req.body.CLIENT_SECRET !== process.env.CLIENT_SECRET
  ) {
    res.status(400).json({ error: 'Invalid Client Secret' });
    return;
  }
  const placeId = req.body.placeId;
  try {
    const photoReference = await getPhotoReference(placeId);
    const photoURL = await getPhotoURL(photoReference);
    res.status(200).send(photoURL);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Proxy failed' });
  }
});

module.exports = router;
