const Documents = () => {
  return (
    <>
      <div class="container">
        <h2 class="text-center mt-4">Загрузка документа</h2>
        <div class="instruction">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div class="video-container">
          <div className="documents-buttons">
            <button class="w-48 btn btn-primary btn-block take-photo-button">
              Сделать снимок
            </button>
            <button class="w-48 btn btn-primary btn-block take-photo-button">
              Загрузить
            </button>
          </div>
        </div>
        <img
          className="photo-container mt-4"
          src="https://test-gpu.ru/wp-content/uploads/kak-pravilno-sdelat-skan-pasporta.jpg"
          alt="Photo"
        />

        <button class="btn btn-primary">Далее</button>
      </div>
    </>
  );
};

export default Documents;
