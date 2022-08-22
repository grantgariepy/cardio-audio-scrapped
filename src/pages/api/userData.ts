// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db/client";
import SpotifyWebApi from "spotify-web-api-node";



const recentPlayed =  (req: NextApiRequest, res: NextApiResponse) => {

  

  // const recentPlayed =  spotifyApi.getUser('petteralexis')
  // .then(function(data) {
  //   console.log('Some information about this user', data.body);
  // }, function(err) {
  //   console.log('Something went wrong!', err);
  // });
  // res.status(200).json(recentPlayed);

  const spotify = new SpotifyWebApi();
  spotify.setAccessToken(_token);

  spotify.getUserPlaylists().then((playlists) => {    
      console.log(playlists);
  });

  spotify.getPlaylist("37i9dQZF1E36tW5bkWLjXH").then((playlist) => {
          console.log(playlist);
  });
};

export default recentPlayed;
