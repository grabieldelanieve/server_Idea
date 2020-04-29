const { createContainer, asClass, asValue, asFunction } = require('awilix');

// Config
const config = require('../config');
const app = require('.');

// Services
const { HomeService,IdeaService, CommentService, BaseService, UserService } = require('../services');

// Controllers
const { HomeController, IdeaController, CommentController, BaseController, UserController } = require("../controllers");

// Routes
const { HomeRoutes, UserRoutes, IdeaRoutes, CommentRoutes, AuthRoutes } = require('../routes/index.routes');
const Routes = require('../routes');

// Models
const { User, Comment, Idea } = require('../models');

// Repositories
const {UserRepository, IdeaRepository, CommentRepository} = require("../repositories")

const container = createContainer();

container
    .register({
        // Configuracion principal de la aplicacion.
        app: asClass(app).singleton(),
        router: asFunction(Routes).singleton(),
        config: asValue(config)
    }).register({
        HomeService: asClass(HomeService).singleton(),
        IdeaService: asClass(IdeaService).singleton(),
        CommentService: asClass(CommentService).singleton(),
        UserService: asClass(UserService).singleton(),
    }).register({
        HomeController: asClass(HomeController.bind(HomeController)).singleton(),
        UserController: asClass(UserController.bind(UserController)).singleton(),
        IdeaController: asClass(IdeaController.bind(IdeaController)).singleton(),
        CommentController: asClass(CommentController.bind(CommentController)).singleton(),
    }).register({
        HomeRoutes: asFunction(HomeRoutes).singleton(),
        UserRoutes: asFunction(UserRoutes).singleton(),
        IdeaRoutes: asFunction(IdeaRoutes).singleton(),
        CommentRoutes: asFunction(CommentRoutes).singleton(),
        AuthRoutes: asFunction(AuthRoutes).singleton()
    }).register({
        User: asValue(User),
        Idea: asValue(Idea),
        Comment: asValue(Comment)
    }).register({
        UserRepository: asClass(UserRepository).singleton(),
        IdeaRepository: asClass(IdeaRepository).singleton(),
        CommentRepository: asClass(CommentRepository).singleton()
    });


module.exports = container;