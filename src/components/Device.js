const Device = () => {
  return (
    <>
      <div class="container">
        <h2 class="text-center mb-4">Проверка оборудования</h2>
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Инструкция</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-md-8 offset-md-2">
            <ul class="list-group">
              <li class="list-group-item">Проверка браузера</li>
              <li class="list-group-item">Проверка веб-камеры</li>
              <li class="list-group-item">Проверка микрофона</li>
              <li class="list-group-item">Проверка соединения</li>
              <li class="list-group-item">Проверка экрана</li>
            </ul>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-md-8 offset-md-2">
            <button class="btn btn-primary">Далее</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Device;
