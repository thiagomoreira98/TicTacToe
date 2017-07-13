module.exports = (app)=>{
    let indexController = app.controller.IndexController;

    app.route("/").get(indexController.showGame);
}