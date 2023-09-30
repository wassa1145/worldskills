const Exam = () => {
  return (
    <>
      <div class="container">
    <h2 class="test-title">Название теста</h2>
    <div class="test-details">
      <p>30.09.2023</p>
      <p>Автор теста: Иванов В.П.</p>
    </div>
    <div class="time-remaining">
      <p>Количество времени до завершения теста: 00:32:12</p>
    </div>
    <div class="progress">
    <div class="progress-bar bg-success" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div className="progress">
        <div
          className="progress-bar bg-primary"
          role="progressbar"
          style={{ width: "25%" }}
          aria-valuenow={25}
          aria-valuemin={0}
          aria-valuemax={100}
        >25%</div>
      </div>
    <div class="mt-4">
          <h4>Вопрос 4 из 10</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      <div class="answers">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="answer" id="answer1" value="option1"/>
          <label class="form-check-label" for="answer1">
            Вариант ответа 1
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="answer" id="answer2" value="option2" />
          <label class="form-check-label" for="answer2">
            Вариант ответа 2
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="answer" id="answer3" value="option3" />
          <label class="form-check-label" for="answer3">
            Вариант ответа 3
          </label>
        </div>
      </div>
    </div>
    <button class="mt-4 btn btn-primary">Завершить тест</button>
  </div>
    </>
  );
};

export default Exam;
