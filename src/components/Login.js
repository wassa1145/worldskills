const Login = () => {
	return (
		<div class="row row-cols-1 row-cols-md-3 mb-3 text-center justify-content-center">
			<div class="col">
				<div class="row">
					<form>
						<h1 className="h3 mb-3 fw-normal">Вход</h1>
							<div class="form-floating mb-3">
								<input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
								<label for="floatingInput">Электронная почта</label>
							</div>

							<div class="form-floating mb-3">
								<input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
								<label for="floatingPassword">Пароль</label>
							</div>
							<div class="mb-3 text-left">
								<input className='mr-3' type="checkbox" id="checkbox" name="checkbox" />
								<label for="checkbox"> Запомнить меня</label>
							</div>
									<button class="w-100 btn btn-lg btn-primary mb-3" type="submit">Войти</button>
							</form>
					</div>
			</div>
		</div>
	)
}

export default Login;
