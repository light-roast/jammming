const ClientID = '30766de3eea9475cbaede96c97e98ad9';
const redirectUri = 'http://localhost:3000/';
let accessToken;
const Spotify = {
    getAccessToken() {
    if (accessToken) {
        return accessToken;
    };

    //check for access token match
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
        const expiresIn = Number(expiresInMatch[1])
        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');
        return accessToken;
    } else {
        const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
        window.location = accessUrl;
    }
    }
};


export default Spotify;