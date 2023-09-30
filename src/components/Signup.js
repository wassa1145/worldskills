const Signup = () => {
    return (
        <div class="row row-cols-1 row-cols-md-3 mb-3 text-center justify-content-center">
                <div class="col">
                    <div class="row">
                        <form>
                            <h1 className="h3 mb-3 fw-normal">Регистрация</h1>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingFio" placeholder="ФИО" />
                                <label htmlFor="floatingFio">ФИО</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingPhone" placeholder="Телефон" />
                                <label htmlFor="floatingPhone">Телефон</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Email</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingCompany" placeholder="Организация" />
                                <label htmlFor="floatingCompany">Организация</label>
                        </div>
                        <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPosition" placeholder="Должность" />
                                <label htmlFor="floatingPosition">Должность</label>
                        </div>
                        <div class="mb-3 text-left">
								<input className='mr-3' type="checkbox" id="checkbox" name="checkbox" />
								<label for="checkbox">Согласие на обработку персональных данных</label>
							</div>
                            <button className="w-100 btn btn-lg btn-primary mb-3" type="submit">Зарегистрироваться</button>
                        </form>
                    </div>

                </div>
        </div>
    )
}

export default Signup;
