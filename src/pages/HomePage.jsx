import LoginAuth from "../components/LoginAuth";

function HomePage() {
  return (
    <div className="flex h-[100vh] flex-col  items-center justify-center bg-stone-200 bg-gradient-to-b from-green-50 to-green-800 px-4">
      <h1 className="animate__animated animate__bounceInLeft pb-10 text-center font-bebas text-4xl font-medium tracking-wide text-green-950 sm:text-5xl">
        Welcome To Spot Lists
        <span>
          <i className="fa-brands fa-spotify pl-3 text-green-500"></i>
        </span>
      </h1>
      <p className=" animate__animated animate__bounceInLeft max-w-[700px] pb-7 text-center font-mont  text-lg font-[550] text-green-950">
        Discover a new way to enjoy your favorite music with Spot Lists. Our app
        creates personalized playlists featuring your most-played tracks on
        Spotify, ensuring you always have the perfect soundtrack for any moment.
      </p>
      <LoginAuth />
    </div>
  );
}

export default HomePage;
