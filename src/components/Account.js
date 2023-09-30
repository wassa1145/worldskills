
const Basket = () => {

	return (
		<>

      <div class="container mt-4">
      <button class="btn btn-secondary mb-4">Выйти</button>
        <div>
          <div class="row">
            <div class="col-md-4">
              <div class="card">
                <img src="https://klike.net/uploads/posts/2023-07/1690340943_5-2.jpg" class="account-image card-img-top" alt="" />
                <div class="card-body">
                  <h5 class="card-title">Иванов Аркадий Петрович</h5>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        <div class="mt-4">
          <h2>Прошедшие тесты</h2>
          <ul class="list-group">
            <li class="list-group-item">
              <div class="d-flex justify-content-between align-items-center">
                <h5 class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
                <small>25.03.2023</small>
              </div>
              <button class="btn btn-primary">Посмотреть результат</button>
            </li>
            <li class="list-group-item">
              <div class="d-flex justify-content-between align-items-center">
                <h5 class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
                <small>25.03.2023</small>
              </div>
              <button class="btn btn-primary">Посмотреть результат</button>
            </li>
            <li class="list-group-item">
              <div class="d-flex justify-content-between align-items-center">
                <h5 class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
                <small>25.03.2023</small>
              </div>
              <button class="btn btn-primary">Посмотреть результат</button>
            </li>
            <li class="list-group-item">
              <div class="d-flex justify-content-between align-items-center">
                <h5 class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
                <small>25.03.2023</small>
              </div>
              <button class="btn btn-primary">Посмотреть результат</button>
            </li>
          </ul>
        </div>

        <div class="mt-4">
          <h2>Запланированные испытания</h2>
          <ul class="list-group">
            <li class="list-group-item">
              <div class="d-flex justify-content-between align-items-center">
                <h5 class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
                <small>31.10.2023</small>
              </div>
              <button class="btn btn-secondary">Включить напоминание</button>
            </li>
            <li class="list-group-item">
              <div class="d-flex justify-content-between align-items-center">
                <h5 class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
                <small>31.10.2023</small>
              </div>
              <button class="btn btn-secondary">Включить напоминание</button>
            </li>
            <li class="list-group-item">
              <div class="d-flex justify-content-between align-items-center">
                <h5 class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
                <small>31.10.2023</small>
              </div>
              <button class="btn btn-secondary">Включить напоминание</button>
            </li>
            
          </ul>
        </div>
    </div>


  <div class="notification mt-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Напоминание об испытании</h5>
        <h6 class="card-subtitle mb-2 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <p class="card-text">12.11.2023</p>
        <button class="btn btn-primary">Закрыть</button>
      </div>
    </div>
  </div>

		</>
	)
}

export default Basket;
