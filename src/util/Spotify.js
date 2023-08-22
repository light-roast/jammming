const clientID =import.meta.env.VITE_API_KEY;
const redirectUri = 'http://127.0.0.1:5173/';
const scope = 'user-read-private user-read-email playlist-read-private playlist-modify-private playlist-modify-public';
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
  
    return result;
  }
const state = generateRandomString(16);
const stateKey = "jammming_state"
localStorage.setItem(stateKey, state);


let accessToken;
const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }

        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        if (accessTokenMatch && expiresInMatch) {
            accessToken=accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        } else {
            let url = 'https://accounts.spotify.com/authorize';
            url += '?response_type=token';
            url += '&client_id=' + encodeURIComponent(clientID);
            url += '&scope=' + encodeURIComponent(scope);
            url += '&redirect_uri=' + encodeURIComponent(redirectUri);
            url += '&state=' + encodeURIComponent(state);
            window.location = url;
        }
    },

    async search(term) {
        const accessToken = this.getAccessToken();
        const options = {
            headers: {
                
                'Authorization': `Bearer ${accessToken}`
            }};
        try {
            const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/search?type=track&q=${encodeURIComponent(term)}`, options);
            const data = await response.json();
            
            if (data.tracks) {
              return data.tracks.items.map(track => {
                return {
                    id: track.id,
                    name: track.name,
                    artist: track.artists.length > 0 ? track.artists[0].name : 'Unknown Artist',
                    album: track.album.name,
                    uri: track.uri
                }
              });
            } else {
              return [];
            }
          } catch (err) {
            console.error('Failed to fetch data from Spotify API:', err);
            throw new Error('Failed to fetch data from Spotify API');
          }
    },

    async savePlaylist(name, trackUris){
        if (!name || !trackUris.length) {
            return
        }
        const accessToken = this.getAccessToken();
        const options = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${accessToken}`}
        };
        const optionsP = {
            headers: {
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${accessToken}`},
            method: 'POST',
            body: JSON.stringify({name: name})
        };

        const optionsPp = {
            headers: {
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${accessToken}`
        },
            method: 'POST',
            body: JSON.stringify({uris: trackUris})
        }
        let userId;
        try {
            const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/me`, options);
            const data = await response.json();
            
            if (data.id) {
              userId = data.id;
              const responseP = await fetch(`https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/users/${userId}/playlists`, optionsP);
              const dataP = await responseP.json();
              const playlistId = dataP.id;
              const responsePp = await fetch(`https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/playlists/${playlistId}/tracks`, optionsPp)
            } 

          } catch (err) {
            console.error('Failed to post data to Spotify API:', err);
            throw new Error('Failed to post data to Spotify API');
          }
    }
}

export default Spotify;