import './App.scss';
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Watch from './Pages/Watch/Watch';

const App = () => {
  return (
    <div>
      <Home />
      <Watch src="https://vod-progressive.akamaized.net/exp=1661177649~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F390%2F29%2F726954265%2F3370901662.mp4~hmac=85cfc6db95d097644a28b98db83ff70dc295cad6f5451a347af279a12c2fd0d3/vimeo-prod-skyfire-std-us/01/390/29/726954265/3370901662.mp4?filename=file.mp4"/>
      <Signup />
      <Login />
    </div>
  );
}

export default App;
