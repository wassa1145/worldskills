const Photo = () => {
  return (
    <>
       <div class="container">
    <h2 class="text-center mt-4">Фотографирование лица</h2>
    <div class="instruction">
      <p>                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.</p>
    </div>
        <div class="video-container">
          
    <button class="w-100 btn btn-primary btn-block take-photo-button">Сделать снимок</button>
    </div>
    <img className='photo-container mt-2' src="https://klike.net/uploads/posts/2023-07/1690340943_5-2.jpg" alt="Photo" />
   
    <button class="btn btn-primary">Далее</button>
  </div>
    </>
  );
};

export default Photo;
